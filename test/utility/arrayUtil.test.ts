import { normalize } from '../../src/utility/arrayUtil';
import { testArr } from '../__data__/array';

describe('test utilty array method', () => {
  test('asyncForEach', () => {
    const expectedVal = {
      '1': {
        id: 1,
        data: 'test-data:1',
      },
      '2': {
        id: 2,
        data: 'test-data:1',
      },
    }
    const normalizedArr = normalize(testArr, (item) => item.id);

    expect(normalizedArr).toEqual(expectedVal);
  })
})
