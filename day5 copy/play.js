import * as fs from 'fs';
const res = fs.readFileSync("input.txt")
console.log(JSON.parse(res))