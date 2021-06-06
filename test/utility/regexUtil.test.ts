import { validateEmail, validateURL } from '../../src/utility/regexUtil';

describe('test utility regex method', () => {
  test('validateEmail', () => {
    const samples = [
      'test-email-id',
      'test@tsul',
      'test!@tsul.com',
      'test1234!@weqw@tsul.com',
      'example@tsul.com',
      'ex.ample@tsul.com',
      'ex.ample1234@tsul.com',
    ];
    const validated = samples.map(validateEmail);

    expect(validated).toEqual([
      false,
      false,
      false,
      false,
      true,
      true,
      true,
    ])
  })

  test('validateURL', () => {
    const samples = [
      'mylocal.com',
      'ftp://myfile.com',
      'http://localhost/foo/doo',
      'http://localhost123.net/foo/doo',
      'https://my.hosts.com',
    ];
    const validated = samples.map(validateURL);

    expect(validated).toEqual([
      false,
      false,
      false,
      true,
      true,
    ])
  })
})
