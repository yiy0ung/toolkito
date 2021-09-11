import { randint } from '../src/utility/number';

describe('Test Something', () => {
  it('simple test', () => {
    const num = 1;
    randint(1, 5);

    expect(num).toEqual(1);
  });
});
