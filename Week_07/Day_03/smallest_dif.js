function findSmallestDif(arr1, arr2) {
    //sort both arrays
    arr1.sort((a, b) => a - b); //o(n)
    arr2.sort((a, b) => a - b); //o(m)
    //pointers for our arrays
    let arr1Pointer = 0; // o(1)
    let arr2Pointer = 0; // o(1)
    //result to compare and store
    let result = Number.MAX_SAFE_INTEGER; //o(1)
    //checking if we are in bounds of our arrays
    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) { //o(p)
        if (Math.abs(arr1[arr1Pointer] - arr2[arr2Pointer]) < result ){
            result = Math.abs(arr1[arr1Pointer] - arr2[arr2Pointer]);
        }
        //move the smaller value
        if ( arr1[arr1Pointer] < arr2[arr2Pointer] ) {
            arr1Pointer++;
        } else {
            arr2Pointer++;
        }
    }
    return result;
}

//o(n)