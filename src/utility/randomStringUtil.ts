import { randint } from "../algorithm";

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
