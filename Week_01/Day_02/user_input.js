const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/

reader.question("what is your name: ", function (input) {

    reader.close();
});