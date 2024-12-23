import { argv } from 'process';
import { readFileSync } from 'fs';

let input = readFileSync(argv[2], { encoding: 'utf8' });

function multiply(input) {
    const mulRegex = /mul\((\d+),(\d+)\)/g;
    const doPattern = /do(.*?)don't/g;
    let match;
    const regions = [];
    let totalSum = 0;


    while ((match = doPattern.exec(input)) !== null) {
        regions.push(match[1]);
    }

    regions.forEach(region => {
        const regionSum = [...region.matchAll(mulRegex)]
            .map(match => parseInt(match[1]) * parseInt(match[2]))
            .reduce((sum, value) => sum + value, 0);
        totalSum += regionSum;
    });

    console.log(totalSum);
}

multiply(input);
