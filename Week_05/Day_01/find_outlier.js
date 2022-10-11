const outlier = (array_input) => {
    let arr_odd = [];
    let arr_even = [];
    for (let i = 0; i < array_input.length; i++) {
        if (array_input[i] % 2 === 0) {
            arr_even.push(array_input[i])
        } else {
            arr_odd.push(array_input[i])
        }
    }
    //ternary statement
    // a ? b : 
    return arr_odd.length === 1 ? arr_odd[0] : arr_odd[0];
    // if ( arr_odd.length === 1) {
    //     return arr_odd[0];
    // } else {
    //     return arr_even[0]
    // }
}