const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']


function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }

    if (time === '12:00') {
        return 'noon'
    }
    //                  ["03","30"]
    let [hrs, mins] = time.split(':')
    hrs = parseInt(hrs)
    mins = parseInt(mins)

    let str = hours[hrs % 12] + ' '

    if (mins >= 20) {
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}

console.log(timeWords("12:30"));

// let animals = ["cats", "dogs", "giraffe"];
// let [,,b] = animals;
// console.log( b);

