const sorter = (string) => {
    let smalls = '';
    let mediums = '';
    let larges = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] === 's'){
            smalls += string[i]
        }
        if(string[i] === 'm'){
            mediums += string[i]
        }
        if(string[i] === 'l'){
            larges += string[i]
        }
    }
    return smalls + mediums + larges
}
console.log(tshirtSorter('xxsmlxlxxl'));

let sizes = ("xsxlsmmsllsmsmlmsls")

let size1 = ('lms')

let size2 = ('smllms')

function sortSizes(str){
    let sorted = str.split("")
    return sorted.sort().reverse().join("")
}

console.log(sortSizes(sizes))