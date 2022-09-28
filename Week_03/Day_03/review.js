function decoderHollyNotALiar(code) {
    let output = "";
    let i = 0;
    while(i < code.length) {
        if(/\D/.test(code[i])) {
             //write out the non digit
            output += code[i]
        }else{
            //add the number im looking at and add i to it
            i += parseInt(code[i])
        }
        i++
    }
    return output
}
console.log(decoderHollyNotALiar('0h2xce5ngbrdy'));

function decoder (scrammbled) {
    // find a word and store it in the array
    let hiddenword = ""
    // looping thry the word
    for (let i = 0; i < scrammbled.length; i++) {
        // am i looking at a number
        if(Number(scrammbled[i]) >= 0 ) {
            
            i += Number(scrammbled[i]) + 1
            hiddenword += scrammbled[i]
        }
    }
    return hiddenword
}

console.log(decoder('2bna0p1mp2osl0e'))

