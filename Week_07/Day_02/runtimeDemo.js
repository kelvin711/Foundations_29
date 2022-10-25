const addToBack = arr => { //O(1) runtime -- O(1) space
    arr.push('new value')  //O(1) runtime
    return arr //O(n) space
}
//runtime -- O(1)
//space -- O(n)


const addToFront = arr => {
    arr.unshift('new value') //runtime -- O(n)
    return arr //space -- O(n)
}
//runtime -- O(n)
//space -- O(n)


const doubleUp = arr => {
    let arrLength = arr.length //runtime O(1) -- space O(1)
    while(arr.length < arrLength * 2){ //runtime O(n)
        arr.push(arr.length) //runtime O(1)
    }
    return arr
}
//O(1 + n(1))
//runtime -- O(n)
//space -- O(n)

const doubleUpReverse = arr => {
    let arrLength = arr.length //runtime O(1) -- space O(1)
    while(arr.length < arrLength * 2){ //runtime O(n)
        arr.unshift(arr.length) //runtime O(n)
    }
    return arr
}
//O(1 + n(n))
//O(n^2)


const isPalindrome = str => {
    for(i = 0; i < str.length; i++){ //O(n) -- runtime
        if(str[i] !== str[str.length - i - 1]){ //O(1) -- runtime
            return false //O(1)
        }
    }
    return true //O(1)
}
//space -- O(1)
//runtime -- O(n)


const hasMoreVowels = word => {
    let vowelcount = 0; //O(1)
    let vowels = ['a','e','i','o','u'] //O(1)
    word = word.toLowerCase() //O(n)
    for(i = 0; i < word.length; i++){ //O(n)
        for(j = 0; j < vowels.length; j++) { //O(n)
            if(word[i] === vowels[j]){ //O(1)
                vowelcount++ //O(1)
            }
        }
    }
    return vowelcount > word.length / 2 //O(1)
}
//O(1 + 1 + n + n(n(1 + 1)))
//O(2 + n + n(n(2)))
//O(2 + n + n(2n))
//O(2 + n + 2n^2)
//O(n + 2n^2)
//O(2n^2)
//runtime -- O(n^2)

//space O(1)



const printNumbers = n => {
    for(let i = 0; i < n; i++){
        console.log(i)
    }

    for(let i = n; i >= 0; i--){
        console.log(i)
    }
}

printNumbers(20)

const printLotsOfNumbers = n => {
    for(let i = 0; i < n; i++){ // O(n)
        for(let j = 0; j < n; j++){ // O(n)
            console.log(`i = ${i}, j = ${j}`)
        }
    }
}

printLotsOfNumbers(20)

const unshiftNums = n => {
    let nums = [1,2,32,1,2,1,4,2,58,2,8,2,5,58,8,1,8,8,5]
    for (let i = 0; i < 1000; i++) { // O(1)
      nums.unshift(i) // O(n)
      // O(1(n)) === O(1 * n) === O(n)
    }
    return nums
}


// nums = [0] --- 0 is at index 0
// nums = [1,0] --- extra calculation to put 0 at index 1
// nums = [2,1,0] --- extra calculation to put 0 at index 2, and 1 at index 1