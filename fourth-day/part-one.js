import { inputArray } from './constant.js';

const unorderedDates = {};
let orderedDates = new Map();
const orderedDatesReversed = {};
// pairs of minutes -- odds are the stars and doubles are the end
const guardsTiming = {};
// all minutes when guard was asleep
export const guardsTimingFull = {};
// summary how long each guard was asleep, where duration is the key and id is the value
const guardsTimingLength = {};
let guardId = null;

function parseTimestamp(input) {
    const date = input.substring(1, input.indexOf(']'));

    return Date.parse(date);
}

export const getTheMostFrequentElement = array => {
    let mostFrequent = 1;
    let count = 0;
    let item;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j])
                count++;
            if (mostFrequent < count) {
                mostFrequent = count;
                item = array[i];
            }
        }
        count = 0;
    }

    return item;
};

inputArray.forEach(date => {
    const key = parseTimestamp(date);

    unorderedDates[key] = date;
});

Object.keys(unorderedDates).sort().reverse().forEach(function(key) {
    orderedDates.set(key, unorderedDates[key]);
});

orderedDates.forEach(value => {
    if (value.includes('begins shift')) {
        const idStartPosition = value.indexOf('#');
        const idEndPosition = value.indexOf(' ', idStartPosition);

        guardId = value.substring((idStartPosition + 1), idEndPosition);
    }

    if (value.includes('falls')) {
        const minutesEnd = value.indexOf(']');
        const minutesAsleep = value.substring((minutesEnd - 2), minutesEnd);

        if (guardsTiming[guardId]) {
            guardsTiming[guardId].push(+minutesAsleep);
        } else {
            guardsTiming[guardId] = [+minutesAsleep];
        }
    }

    if (value.includes('wakes')) {
        const minutesEnd = value.indexOf(']');
        const minutesAwake = value.substring((minutesEnd - 2), minutesEnd);

        guardsTiming[guardId].push(+minutesAwake);
    }
});

Object.entries(guardsTiming).forEach(entry => {
    const allMinutesAsleep = [];

    for (let i = 0; i < entry[1].length; i += 2) {
        const startMinute = entry[1][i];
        const endMinute = entry[1][i + 1];

        for (let k = startMinute; k < endMinute; k++) {
            allMinutesAsleep.push(k);
        }
    }

    guardsTimingFull[entry[0]] = allMinutesAsleep.sort();
    guardsTimingLength[allMinutesAsleep.length] = entry[0];
});
// how long any of guards was asleep the most
const maxAsleepMinutes = Math.max.apply(null, Object.keys(guardsTimingLength));
//
const maxAsleepId = guardsTimingLength[maxAsleepMinutes];

console.log('maxAsleepId', maxAsleepId);

console.log('guardsTimingFull[maxAsleepId]', guardsTimingFull[maxAsleepId]);
console.log('getTheMostFrequentElement', getTheMostFrequentElement(guardsTimingFull[maxAsleepId]));
debugger;
// 49845 is wrong too low