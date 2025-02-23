import { NextApiRequest, NextApiResponse } from 'next';
import { HTTPError } from 'ky-universal';
import {
  GetQuoteListQueryExternal,
  isGetQuoteListQueryExternal,
} from '@/server/quote/QuoteExternal';
import { getQuoteListFromExternal } from '@/server/quote/getQuoteListFromExternal';
import { createQuoteListViewModel } from '@/server/quote/createQuoteListViewModel';

/**
 * 複数の引用文取得 API
 *
 * クエリ
 * - minLength: number - 引用文の最小文字数
 * - maxLength: number - 引用文の最大文字数
 * - authors: string - 著者名（複数名の時はカンマ区切りで繋いだもの）
 * - tags: string - タグ（複数の時はカンマ区切りで繋いだもの）
 * - limit: number - 1ページ当たりの件数
 * - page: number - ページ指定
 * @param {NextApiRequest} req リクエストミドルウェア
 * @param {NextApiResponse} res レスポンスヘルパー
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      // 不正なクエリパラメータの時は403を返す
      const queryParams = req.query;
      if (!isGetQuoteListQueryExternal(queryParams as unknown)) {
        res.status(403).send('Invalid query parameter.');
      }
      const limit = 'limit' in queryParams ? Number(queryParams.limit) : 10;
      const page = 'page' in queryParams ? Number(queryParams.page) : 1;

      const searchParams = queryParams as GetQuoteListQueryExternal;
      await getQuoteListFromExternal({
        searchParams: searchParams,
      })
        .then((data) => {
          res.status(200).json(createQuoteListViewModel(data, limit, page));
        })
        .catch((err) => {
          if (err instanceof HTTPError) {
            res.status(err.response.status).send(err.response.statusText);
          } else if (err instanceof Error) {
            res.status(500).send(err.message);
          }
        });
      break;
    default:
      res.status(405).end();
  }
}
