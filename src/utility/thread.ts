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
  })
}

/**
 * 
 * @param closure 
 * @param delay 
 */
export function debounce(closure: Function, delay: number) {
  let timer: NodeJS.Timeout | null = null;

  if (timer) {
    clearTimeout(timer);
  }

  const newTimer = setTimeout(() => {
    closure();
  }, delay);

  timer = newTimer;
}
