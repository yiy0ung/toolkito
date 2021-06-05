//================================================================
/**
 * Array Async Method
 */
//================================================================

/**
 * @param array
 * @param callback
 */
 export async function asyncForEach<T>(
  array: T[], 
  callback: (value: T, idx: number) => Promise<void>,
): Promise<void> {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i);
  }
}

/**
 * @param array 
 * @param callback 
 * @returns 
 */
export async function asyncMap<T, R>(
  array: T[], 
  callback: (value: T, idx: number) => Promise<R>
) {
  const resultArr: R[] = new Array(array.length || 0);

  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = await callback(array[i], i);
  }

  return resultArr;
}


export async function asyncFilter<T>(
  array: T[],
  callback: (value: T, idx: number) => Promise<boolean>
) {
  let c = 0
  const resultArr: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (await callback(array[i], i)) {
      resultArr[c++] = array[i];
    }
  }

  return resultArr;
}
