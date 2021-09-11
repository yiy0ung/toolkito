import { randint } from "./number";


/**
 * @Incompletion_Method
 * 
 * @param phoneStr 
 * @returns 
 */
function toFormatPhoneNumber(phoneStr: string) {
    const value = phoneStr.replace(/(\d)\D+|^[^\d+]/g, '$1').slice(0, 11);
    let phoneNumber = value;
  
    if (value.length > 3 && value.length <= 8) phoneNumber = `${value.slice(0, 3)}-${value.slice(3)}`;
    if (value.length === 9) phoneNumber = `${value.slice(0, 2)}-${value.slice(2, 5)}-${value.slice(5)}`;
    if (value.length === 10) phoneNumber = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
    if (value.length === 11) phoneNumber = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
  
    return phoneNumber.replace(/\+/g, '');
}

/**
 * Generate Random String Between Specified Ascii Codes
 * 
 * @param length string length
 * @param start ascii code start num
 * @param end ascii code end num
 * 
 * @returns Random Specified Ascii Codes String Between [start, end]
 */
export function random(length: number, start: number, end: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += String.fromCharCode(randint(start, end));
    }

    return text;
}

/**
 * Generate Random English String
 * 
 * @param length string length
 * 
 * @returns Random English String
 */
export function randomAlphabetic(length: number) {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += char.charAt(Math.floor(Math.random() * char.length));
    }

    return text;
}

/**
 * Generate Random Numbers String
 * 
 * @param length string length
 * 
 * @returns Random Numbers String
 */
export function randomNumberic(length: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += String.fromCharCode(randint(48, 57));
    }

    return text;
}

/**
 * Generate Random English And Numbers String
 * 
 * @param length string length
 * 
 * @returns Random English And Numbers String
 */
export function randomAlphanumeric(length: number) {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += char.charAt(Math.floor(Math.random() * char.length));
    }

    return text;
}

/**
 * Generate Random Ascii(33, 125) codes String
 * 
 * @param length string length
 * 
 * @returns Random Ascii(33, 125) codes String
 */
export function randomAscii(length: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += String.fromCharCode(randint(33, 125));
    }

    return text;
}
