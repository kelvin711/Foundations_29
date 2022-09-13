const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/

reader.question("what to calculate: ", function (user_input) {

    if (user_input[1] === "+") {
        console.log(parseInt(user_input[0]) + parseInt(user_input[2]));
    }
    reader.close();
});
// 0 1 2 --> index
// 2 + 2
// 2 * 2

// = --> assigning
// == --> loose comparison
// === --> strict comparison