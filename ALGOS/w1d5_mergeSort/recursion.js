// 5! 1*2*3*4*5 // 5*4*3*2*1*
// 3! 1*2*3
// 1! 1
// num!




//                  
function factorial(num) {
    // 1. early exit - BASE CASE
    if (num === 1) {
        return 1
    }
    // 2. logic to guide towards the base case
    // 3. call the function again
    return num * factorial(num-1)
}

console.log(factorial(4))