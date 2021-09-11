//================================================================
/**
 * Array Utility Method
 */
//================================================================

/**
 *
 * @param arr
 * @param selector
 * @returns
 */
export function normalize<T>(arr: T[], selector: (item: T) => string | number = (item: any) => item.id) {
  const normalizeObj: { [key: string]: T } = {};

  arr.forEach((data) => {
    normalizeObj[selector(data)] = data;
  });

  return normalizeObj;
}

/**
 *
 * @param arr
 * @param selector
 * @returns
 */
export function groupBy<T>(arr: T[], selector: (item: T) => string | number = (item: any) => item.id) {
  const map: Record<string, T[]> = {};

  arr.forEach((data) => {
    const key = selector(data);
    if (map[key]) {
      map[key].push(data);
    } else {
      map[key] = [data];
    }
  });

  return map;
}

/**
 * @param array
 * @param callback
 */
export async function asyncForEach<T>(
  array: T[],
  callback: (value: T, idx: number) => Promise<void> | void
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
export async function asyncMap<T, R>(array: T[], callback: (value: T, idx: number) => Promise<R> | R) {
  const resultArr: R[] = new Array(array.length || 0);

  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = await callback(array[i], i);
  }

  return resultArr;
}

/**
 *
 * @param array
 * @param callback
 * @returns
 */
export async function asyncFilter<T>(array: T[], callback: (value: T, idx: number) => Promise<boolean> | boolean) {
  let c = 0;
  const resultArr: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (await callback(array[i], i)) {
      resultArr[c++] = array[i];
    }
  }

  return resultArr;
}
