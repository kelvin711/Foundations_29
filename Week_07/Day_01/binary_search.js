const binarySearch = (arr, value) => {
    // use a while loop since we don't know the amount of attempts
    //min =0 max= n-1
    let start = 0;
    let end = arr.length - 1;
    //guess median 
    
    //adjust min/max as you guess
    while (start <= end) {
        //when the number is found with our midpoint
        let mid = Math.floor( (start + end) / 2);
        console.log("start", start, "end", end, "mid",mid,"arr mid", arr[mid]);

        if (arr[mid] === value) {
            return mid;
        }
        //when our guess is less than
        else if (arr[mid] < value) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return false
}
//       s                      m                       e
let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];
console.log(binarySearch(x, 68)); //true and return me the postition 15
console.log(binarySearch(x, 51)); //false