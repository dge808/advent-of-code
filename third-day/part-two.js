import { inputArray } from './constant.js';
import { parseCoordinats } from './part-one.js';

const filled = {};

inputArray.forEach((input, index) => {
    const coordinates = parseCoordinats(input);

    const { x1, x2, y1, y2 } = coordinates;
    const identificator = index + 1;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            const key = `${x}:${y}`;

            if (filled[key]) {
                filled[key].push(identificator);
            } else {
                filled[key] = [identificator];
            }
        }
    }
});

const filledRepeatedly = [];
const filledOnce = [];

Object.values(filled).forEach(value => {
    if (value.length > 1) {
        filledRepeatedly.push(...value);
    } else {
        filledOnce.push(...value);
    }
});

const duplicates = [...new Set(filledRepeatedly)];
const uniques = [...new Set(filledOnce)];

const result = uniques.filter(value => {
    return !duplicates.some(el => el === value);
});

// console.log('result', result);