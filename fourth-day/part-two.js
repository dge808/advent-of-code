import { guardsTimingFull, getTheMostFrequentElement } from './part-one.js';

const guardsSleepingMinutesCounts = {};

Object.entries(guardsTimingFull).forEach(entry => {
    const guardId = entry[0];
    const minutesAsleep = entry[1];

    const maxAsleepMinuteName = getTheMostFrequentElement(minutesAsleep);
    let maxAsleepDuration = 0;
    minutesAsleep.forEach(minute => {
        if (minute === maxAsleepMinuteName) {
            maxAsleepDuration++;
        }
    });

    guardsSleepingMinutesCounts[guardId] = { maxAsleepMinuteName, maxAsleepDuration };

});

console.log('guardsSleepingMinutesCounts', guardsSleepingMinutesCounts);
