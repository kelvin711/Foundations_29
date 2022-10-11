// let sample3 = [1,2,3,4,5,6,7,8,9,0];
// let sample4 = [9,8,7,6,5,4,3,2,1,0];

// function phoneCreater(arr){
//     let areacode = "";
//     for(i=0; i<3; i++){
//        areacode+= arr[i]
//     }
//     console.log(areacode)
//     let a = arr.slice(0,3).join("")
//     console.log("!!!!!!!!!!!!!!!!",a);
 
//     let chunk1=""
//     for (i=3; i<6; i++){
//         chunk1+=arr[i]
        
//     }
//     console.log(chunk1)

//     let chunk2=""  
//     for (i=6; i<arr.length; i++){
//         chunk2+=arr[i]
//     }
//     console.log(chunk2)

//     return "(" + areacode + ")" + " " + chunk1 + "-" + chunk2

// }
// console.log(phoneCreater(sample4))

//  xxx - xxx - xxxx
// const regex_phonenumber = (input_arr) => {
//     let format = input_arr.join("").match(/(\d{3})(\d{3})(\d{4})/)
//     console.log(format);
//     return `(${format[1]}) ${format[2]} - ${format[3]}`
// }

// console.log(regex_phonenumber([9,8,7,6,5,4,3,2,1,0]));

const replace = (array_input) => {
    let carlie_rae_jepsen = "(xxx) xxx - xxxx";
    for (const number of array_input) {
        carlie_rae_jepsen = carlie_rae_jepsen.replace("x", number)
    }
    return carlie_rae_jepsen;
}
console.log(replace([9,8,7,6,5,4,3,2,1,0]));