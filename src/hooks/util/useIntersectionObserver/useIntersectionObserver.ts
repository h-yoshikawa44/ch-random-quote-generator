import { RefObject, useState, useCallback, useEffect } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import { HTTPError } from 'ky';

type Argument = {
  root?: RefObject<HTMLElement> | null;
  onIntersect: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<unknown, HTTPError>>;
  threshold?: number | number[];
  rootMargin?: string;
  enabled?: boolean;
};

const useIntersectionObserver = ({
  root = null,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: Argument) => {
  const [target, setTarget] = useState<Element | null>(null);

  // コールバックref（呼び出し側はこれを無限スクロール検知用要素のrefに渡せばいい）
  const loadMoreRef = useCallback((node: Element | null) => {
    if (node !== null) {
      setTarget(node);
    }
  }, []);

  const newIntersectionObserver = useCallback(
    () =>
      new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && onIntersect()),
        {
          root: root && root.current,
          rootMargin,
          threshold,
        },
      ),
    [root, onIntersect, threshold, rootMargin],
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const el = target;

    if (!el) {
      return;
    }
    const observer = newIntersectionObserver();

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [enabled, target, newIntersectionObserver]);

  return { loadMoreRef };
};

export default useIntersectionObserver;
