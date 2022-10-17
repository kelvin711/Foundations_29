// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]

function buildTower(number) {
    let tower = [];
    for (let i = 0; i < number; i++) {
        tower.push(" ".repeat(number -i -1)
        + "*".repeat((i * 2) +1)
        + " ".repeat(number -i -1))
    }
    return tower;
}
console.log(buildTower(3))

module.exports = buildTower

// const buildATextTower = (symbol, levels) => {
//     // let arr = [0,1,2]
//     for (const level of Array.from(Array(levels).keys()))
//         console.log(symbol.padStart(levels - level + 1,' ').
//         padEnd(levels + level + 1, symbol))   
// }

// buildATextTower('*', 3);