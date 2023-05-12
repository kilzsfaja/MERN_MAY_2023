// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    // create an output
    const sums = [];
    console.log(arr, k);

    // loop the array
    for (let i = 0; i < arr.length; i++) {
        // create a consecutive sum array
        const consecNums = [];
        // and a rolling sum
        let sum = 0;
        // starting at i
        let j = i;
        // loop until the sum is less than k or we read off the end of arr
        while (sum <= k && j < arr.length - 1) {
            // if sum + j is still smaller, add it
            if (sum + arr[j] <= k) {
                sum += arr[j];
                consecNums.push(arr[j])
                j++;

                // if sum is equal to k now, push
                if (sum === k) {
                    sums.push([...consecNums]);
                    // [3, 6, 7]
                    // [3, 6, 7, 0]
                }
            } else {
                // if the next number is so large that the sum becomes larger than k, break
                break;
            }
        }
    }
    return sums;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));

function findConsecutiveSums1(arr, k) { //my first pass, lots of built ins
    let left = 0; //initialize left and right indices for slicing
    let right = 1;
    let returnArr = [] // arr to return
    while (right < arr.length + 1) { // while right is less than one more than length
        // plus one because we will be slicing, and slice is exclusive of second index provided
        let slice = arr.slice(left, right) //get the portion of the array we're looking at
        let sum = slice.reduce((a, b) => a + b) //sum its parts using reduce
        if (sum == k) { //if we found our target sum
            returnArr.push(slice) //push the slice into our return array
            right++ //increase right index, if next element is 0, it will be another solution
        } else if (sum > k) { //if we're over our sum, move left up one and reset right to one more than left
            left++
            right = left + 1
        } else if (sum < k) { // if we're under our sum, add another element to this slice
            right++
        }
    }
    return returnArr
}

function findConsecutiveSums2(arr, k) {
    let returnArr = [] //arr to return
    //main outer loop
    for (let i = 0; i < arr.length; i++) { //iterate through array
        let sum = arr[i] //initialize a sum starting at this i position

        //inner loop 
        for (let j = i + 1; j < arr.length + 1; j++) { // go through the rest off the array
            if (sum > k) { //if sum has passed k, we can stop looking / adding elements and move up i
                break //remove this check if inputs include negative numbers
            }
            if (sum == k) { // hit target, push this slice
                returnArr.push(arr.slice(i, j))
            }
            sum += arr[j] // add next element if we haven't reached target or passed it
        }
    }
    return returnArr
}

// console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11, 16], 16));
console.log(findConsecutiveSums2([2, 5, 3, 6, 7, 0, 0, 23, 11, 16], 16));

// ------- heidi
function findConsqSums(nums, targetSum) {
    let finalArr = []

    for (let i = 0; i < nums.length; i++) {
        let tempArr = [], sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            tempArr.push(nums[j])
            if (sum === targetSum) {
                finalArr.push([...tempArr])
            }
            // else if (sum > targetSum) {
            //   break;
            // }
        }
    }
    return finalArr
}

// ---------------
function findConsec(arr, target) {
    const resultsArray = [];
    let sum = 0;
    var idx = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        // here we are setting sum to be the initial val
        while (sum > target) {
            //while the sum is greater than the target
            sum -= arr[idx];
            idx++;
            //sum is being shifted forward from index val of last iteration
        }
        if (sum == target) {
            //if the sum is equal to the target (k)
            resultsArray.push(arr.slice(idx, i + 1));
            //we will push the array from the current index to where we currently are cheking in the loop
            let j = i + 1;
            //declaring J as index + 1 to check other index values
            while (arr[j] == 0 && j < arr.length) {
                resultsArray.push(arr.slice(idx, j + 1));
                j++;
            }
            sum -= arr[idx];
            idx++;
        }
    }
    return resultsArray;
}

console.log(findConsec(arr, k));

// ----------------
function consecutiveSumsV2(arr, k) {
    // setup our options array so we can push all our answers to it
    let options = [];
    for (let i = 0; i < arr.length; i++) {
        // setup a loop for the array
        // setup our variables and reset them if this isn't our first loop
        let tempArr = [];
        let runningSum = 0;
        let index = i;
        while (runningSum <= k && index < arr.length) {
            // do a loop starting at index(i) and going until we overshoot our sum or our array length
            // increase our sum and push our new value to our temp array
            runningSum += arr[index];
            tempArr.push(arr[index]);
            if (runningSum === k) {
                // if we found a solution, push it to the options array
                // spread operator
                options.push([...tempArr]);
            }
            // infinite loops are bad mkay
            index++;
        }
    }
    return options;
}

// -------------------------
// create the function and decide what params it needs and what it will return here:
function ConsecutiveSums(arr, target) {
    // Create an empty array to store the result.
    let results = [];
    // Iterate through the array until the second to last element.
    for (let i = 0; i < arr.length - 1; i++) {
        // Set the sum to the current element.
        let sum = arr[i];
        // Create a temporary array with the current element.
        let tempArr = [arr[i]];
        // Iterate through the array starting from the next element.
        for (let j = i + 1; j < arr.length; j++) {
            // If the sum is less than the target, add the current element to the sum and temporary array.
            if (sum < target) {
                sum += arr[j];
                tempArr.push(arr[j])
            }
            // If the sum is greater than or equal to the target, exit the loop.
            else {
                break;
            }
            // If the sum is equal to the target, add the temporary array to the results array.
            if (sum === target) {
                results.push(tempArr)
            }
        }
    }
    // Return the results array.
    return results;
}
console.log(ConsecutiveSums(arr, k))

// ==========
// pass in array and target
function twoSum(array, target) {
    // first loop - iterate over each value in array
    for (var i = 0; i < array.length; i++) {
        // declare sum and set equal to current value of i loop 
        let sum = array[i];
        // second loop - iterate array starting at i+1 position
        for (var j = i + 1; j < array.length; j++) {
            // if sum is equal to target after adding 2nd value
            if (sum + array[j] == target) {
                return [i, j]
            }
        }
    }
}
console.log(twoSum([2, 11, 7, 15], 9))

function twoSum(arr, target) {
    //set the function
    for (let i = 0; i < arr.length; i++) {
        //first for loop starts at index zero
        for (let j = i + 1; j < arr.length; j++) {
            //starts after i for second loop
            if (arr[i] + arr[j] == target) {
                //conditional to see if value of i and j equal the target
                return [i, j];
                //if so, we return the index' i
            }
        }
    }
}
console.log(twoSum([3, 2, 4], 6));

function twoSums(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= val) {
            continue;
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === val) {
                return [i, j];
            }
        }
    }
    return 'Error';
}

function twoSumsOneLoop(arr, val) {
    let i = 0;
    let j = 1;
    while (i < arr.length) {
        if (j >= arr.length) {
            i++;
            j = i + 1;
        } else if (arr[i] + arr[j] === val) {
            return [i, j];
        } else {
            j++;
        }
    }
    return 'Error';
}