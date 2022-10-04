let sample2 = "iwanttoclimbamountain";
function makeUnique(str){
    let uniqueset = new Set(str); 
    let uniquestr = Array.from(uniqueset).join(""); 
    return uniquestr;
}
console.log(makeUnique(sample2));

const lebronIsGoated = (str) => {
    let unique = "";
    for (let letter in str) {
        if (!unique.includes(str[letter])) {
            unique = unique + str[letter];
        }
    }
    return unique;
}
console.log(lebronIsGoated("helloworld"));
