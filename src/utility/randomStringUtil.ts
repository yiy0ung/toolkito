import { randint } from "../algorithm";

/**
 * 지정한 아스키코드 사이의 랜덤 문자열 생성
 * 
 * @param length 문자열 길이
 * @param start 아스키코드 처음
 * @param end 아스키코드 마지막
 * 
 * @returns 지정한 아스키코드 사이의 랜덤 문자열
 */
function random(length: number, start: number, end: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += String.fromCharCode(randint(start, end));
    }

    return text;
}

/**
 * 영어 대소문자로 이루어진 랜덤 문자열 생성
 * 
 * @param length 문자열 길이
 * 
 * @returns 영어 대소문자로 이루어진 랜덤 문자열
 */
function randomAlphabetic(length: number) {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += char.charAt(Math.floor(Math.random() * char.length));
    }

    return text;
}

/**
 * 숫자로 이루어진 랜덤 문자열 생성
 * 
 * @param length 문자열 길이
 * 
 * @returns 숫자로 이루어진 랜덤 문자열
 */
function randomNumberic(length: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += String.fromCharCode(randint(48, 57));
    }

    return text;
}

/**
 * 영어 대소문자 및 숫자로 이루어진 랜덤 문자열 생성
 * 
 * @param length 문자열 길이
 * 
 * @returns 영어 대소문자 및 숫자로 이루어진 랜덤 문자열
 */
function randomAlphanumeric(length: number) {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += char.charAt(Math.floor(Math.random() * char.length));
    }

    return text;
}

/**
 * 랜덤한 아스키코드(33, 125)로 생성한 문자열 생성
 * 
 * @param length 문자열 길이
 * 
 * @returns 랜덤한 아스키코드(33, 125)로 생성한 문자열
 */
function randomAscii(length: number) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += String.fromCharCode(randint(33, 125));
    }

    return text;
}
