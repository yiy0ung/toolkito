//================================================================
/**
 * Regex Utility Method
 */
//================================================================

/**
 * validate that the email parameter is email format,
 * this email format follows : https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-
 * 
 * @param email E-mail value to validate
 * @returns Returns `true` if the email parameter is email format, false if not.
 */
export function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9]([\.!#$%&'*+/=?^_`{|}-]?[0-9a-zA-Z])*@{1}[-A-Za-z0-9]+[-A-Za-z0-9]*[.]{1}[A-Za-z]{1,5}$/

  return regex.test(email);
}

/**
 * validate that the URL parameter is URL format
 * 
 * @param url URL value to validate
 * @returns Returns `true` if the URL parameter is URL format, false if not.
 */
export function validateURL(url: string): boolean {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  return regex.test(url);
}

/**
 * 
 * @param phoneNumber 
 * @param option 
 * @returns 
 */
function validatePhoneNumber(
  phoneNumber: string,
  option?: { allowSeparator?: boolean },
): boolean {
  const regexStr = ``;
  const regex = new RegExp(regexStr);

  if (option) {}

  return regex.test(phoneNumber);
}
