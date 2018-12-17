import { inputArray } from './constants.js';

// let string1 = '';
// let string2 = '';

function findCommonLetters(string1, string2) {
    let commonLetters = [];
    for (let i = 0; i < string1.length; i++) {
        if (string1.charAt(i) === string2.charAt(i)) {
            commonLetters.push(string1.charAt(i));
        }
    }

    return commonLetters.join('');
}

inputArray.forEach((string, index) => {
    for (let i = 0; i < inputArray.length; i++) {
        if (i === index) continue;
        const stringToCompare = inputArray[i];
        let wasMismatched = false;

        for (let k = 0; k < string.length; k++) {
            const charsMatch = stringToCompare.charAt(k) === string.charAt(k);
            const isTheLastChar = k === (string.length - 1);

            if ((charsMatch && !isTheLastChar)) {
                continue;
            } else if (!charsMatch && !wasMismatched) {
                wasMismatched = true;
                continue;
            } else if (!charsMatch && wasMismatched) {
                k = string.length;
            }

            if (isTheLastChar) {
                // console.log('answer', findCommonLetters(string, stringToCompare));

                // string1 = string;
                // string2 = stringToCompare;
            }
        }
    }
});

// console.log('string1', string1);
// console.log('string2', string2);

// console.log(inputArray.sort());
// fonbwmjquwtapeyzikghtvdxl
