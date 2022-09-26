const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('.\\content\\second.txt', 'utf-8')
console.log('start');

writeFileSync('./content/result-sync.txt', 
    `This is the result: \n ${first} \n ${second}`,
    {flag: 'a'}
)
console.log('done');
console.log('starting the next one');