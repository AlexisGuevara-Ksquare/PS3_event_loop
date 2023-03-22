
// Array test
let arr = [1,2,3,7,4];

function removeElements(arr, secondFnCondition) {
    // We will loop Until the condition is met (array with 1 or more elements, second function with a true value)
    while (arr.length > 0 && !secondFnCondition(arr[0])) {
        arr.shift();
    }

    // Return array with elements only if have elements, else return an empty array
    return arr.length > 0 ? arr : [];
}

// Second function, we expect a true value to stop the shift
let secondFnCondition = (n) => n > 3;

console.log(removeElements(arr, secondFnCondition));
