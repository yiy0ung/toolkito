//================================================================
/**
 * Thread Uility Async Method
 */
//================================================================

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}
