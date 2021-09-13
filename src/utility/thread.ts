//================================================================
/**
 * Thread Uility Async Method
 */
//================================================================

/**
 *
 * @param ms
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

/**
 *
 * @param closure
 * @param delay
 */
export function debounce<C extends (...args: any[]) => any>(closure: C, delay: number) {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<C>) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      closure.apply(null, args);
    }, delay);
  };
}
