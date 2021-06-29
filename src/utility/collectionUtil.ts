//================================================================
/**
 * Collection Utility Method
 */
//================================================================

/**
 * 
 * @param arr 
 * @param selector 
 * @returns 
 */
 export function normalize<T>(
  arr: T[], 
  selector: (item: T) => string | number = (item: any) => item.id,
) {
  const normalizeObj: Record<string, T> = {};

  arr.forEach((data) => {
    normalizeObj[selector(data)] = data;
  });

  return normalizeObj;
}

export function groupBy<T>(
  arr: T[], 
  selector: (item: T) => string | number = (item: any) => item.id,
) {
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
