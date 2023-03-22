
// Seek & Destroy 

// Vars to test
let arr = [1, 2, 3, 5, 1, 2, 3];
let n1 = 2;
let n2 = 3;

// Function with default inpunt in case is nothing is send
let destroyer = (arr, n1=0, n2=0) => {

    // Loop thru the array
    for (let i = 0; i < arr.length; i++) {
        // If the element of the array is the same as one of the other parameters, we use the splice method to delet the element
        if(arr[i] === n1 || arr[i] === n2) {
            arr.splice(i, i + 1);
        }        
    }
    return arr;
};

console.log(destroyer(arr, n1, n2));