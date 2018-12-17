import { inputArray } from './constant.js';

function parseCoordinats(string) {
    const leftIndentCoordinatesStart = string.indexOf('@') + 2;
    const leftIndentCoordinatesEnd = string.indexOf(',');
    const topIndentCoordinatesStart = leftIndentCoordinatesEnd + 1;
    const topIndentCoordinatesEnd = string.indexOf(':');
    const widthValueStart = topIndentCoordinatesEnd + 2;
    const widthValueEnd = string.indexOf('x');
    const heightValueStart = widthValueEnd + 1;

    const leftIndent = string.substring(leftIndentCoordinatesStart, leftIndentCoordinatesEnd);
    const topIndent = string.substring(topIndentCoordinatesStart, topIndentCoordinatesEnd);
    const width = string.substring(widthValueStart, widthValueEnd);
    const height = string.substring(heightValueStart);

    return {
        x1: +leftIndent,
        x2: +leftIndent + +width,
        y1: +topIndent,
        y2: +topIndent + +height,
    };
}

console.log(parseCoordinats('#8 @ 561,59: 11x24'));
// console.log(inputArray.length);
const filled = {};
let count = 0;

inputArray.forEach(input => {
    const coordinates = parseCoordinats(input);

    const { x1, x2, y1, y2 } = coordinates;

    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            const key = `${x}${y}`;

            if (filled[key]) {
                filled[key] += 1;
            } else {
                filled[key] = 1;
            }
        }
    }
});


Object.values(filled).forEach(value => {
    if (value > 1) {
        count += 1;
    }
});

console.log('count', count);