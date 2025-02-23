import { NextApiRequest, NextApiResponse } from 'next';
import { HTTPError } from 'ky-universal';
import {
  GetRandomQuoteQueryExternal,
  isGetRandomQuoteQueryExternal,
} from '@/server/quote/QuoteExternal';
import { getRandomQuoteFromExternal } from '@/server/quote/getRandomQuoteFromExternal';
import { createQuoteViewModel } from '@/server/quote/createQuoteViewModel';

/**
 * ランダム引用文取得 API
 *
 * クエリ
 * - minLength: number - 引用文の最小文字数
 * - maxLength: number - 引用文の最大文字数
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
      const queryParams = req.query as unknown;
      if (!isGetRandomQuoteQueryExternal(queryParams)) {
        res.status(403).send('Invalid query parameter.');
      }

      await getRandomQuoteFromExternal({
        searchParams: queryParams as GetRandomQuoteQueryExternal,
      })
        .then((data) => {
          res.status(200).json(createQuoteViewModel(data));
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
