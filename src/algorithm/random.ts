/**
 * Generate random integer
 * 
 * @param min minimum number
 * @param max maximum number
 * 
 * @returns A random integer between [min, max]
 */
export function randint(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
