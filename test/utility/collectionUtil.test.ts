import { normalize, groupBy } from '../../src/utility/collectionUtil';
import { testArr } from '../__data__/array';

describe('test utility collection method', () => {
  test('normalize', () => {
    const expectedVal = {
      '1': {
        id: 1,
        data: 'test-data:1',
      },
      '2': {
        id: 2,
        data: 'test-data:1',
      },
      '3': {
        id: 3,
        data: 'test-data:3',
      },
    }
    const normalized = normalize(testArr, (item) => item.id);

    expect(normalized).toEqual(expectedVal);
  });

  test('groupBy', () => {
    const expectedVal = {
      "test-data:1": [{
        id: 1,
        data: 'test-data:1',
      }, {
        id: 2,
        data: 'test-data:1',
      }],
      "test-data:3": [{
        id: 3,
        data: 'test-data:3',
      }],
    };
    const grouped = groupBy(testArr, (item) => item.data);

    expect(grouped).toEqual(expectedVal);
  })
})
