import { asyncForEach } from '../../src/asynchrony/array';
import { sleep } from '../../src/asynchrony/thread';
import { testArr } from '../__data__/array';

describe('test async array method', () => {
  test('asyncForEach', async () => {
    const result = [];

    await asyncForEach(testArr, async (item) => {
      await sleep(100);
      result.push(item);
    });

    expect(result).toEqual(testArr);
  })
})
