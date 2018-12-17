import { inputArray } from './constants.js';


let twoCounts = 0;
let threeCounts = 0;

function countLetters(string) {
    let lettersCountsMap = {};
    let twoIncreased = false;
    let threeIncreased = false;

    for (let i = 0; i < string.length; i++) {

        if (lettersCountsMap[string.charAt(i)]) {
            lettersCountsMap[string.charAt(i)] += 1;
        } else {
            lettersCountsMap[string.charAt(i)] = 1;
        }
    }

    Object.values(lettersCountsMap).forEach(value => {
        if (value >= 3) {
            threeIncreased = true;
        } else if (value === 2) {
            twoIncreased = true;
        }
    });

    if (threeIncreased) threeCounts++;
    if (twoIncreased) twoCounts++;
}

inputArray.forEach(countLetters);

// console.log('twoCounts', twoCounts);
// console.log('threeCounts', threeCounts);









































