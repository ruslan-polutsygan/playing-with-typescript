export interface StringValidator {
    isAcceptable(s: string): boolean;
}

var minLength = 5;
export class MinLengthValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length >= minLength;
    }
}

var lettersRegExp = /^[a-z]+$/i;
export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return lettersRegExp.test(s);
    }
}
