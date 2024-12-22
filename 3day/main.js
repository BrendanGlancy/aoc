import { argv } from 'process';
import { readFileSync } from 'fs';

let input = readFileSync(argv[2], {encoding: 'utf8'});

function multiply(input) {
    const regex = /mul\((\d+),(\d+)\)/g;
    return [...input.matchAll(regex)]
        .map(match => parseInt(match[1]) * parseInt(match[2]))
        .reduce((sum, value) => sum + value, 0);
}

const result = multiply(input);
console.log(result);
