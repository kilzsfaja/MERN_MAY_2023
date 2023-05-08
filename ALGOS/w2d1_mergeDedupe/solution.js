// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {

    const newArr = [];

    if (arr1.length >= arr2.length) {
        var longestArr = arr1;
        var smallestArr = arr2;
    }
    else {
        var longestArr = arr2;
        var smallestArr = arr1;
    }

    // set idx for both arr to increment independently 
    var longestIDX = 0; // a
    var smallestIDX = 0; // b

    while (smallestArr[smallestIDX] || longestArr[longestIDX]) {

        if (smallestArr[smallestIDX] === undefined) {
            // push the rest of the longest arr
            // does not account for duplicates in the remaining array! TODO
            console.log("----", longestArr.slice(longestIDX))
            newArr.push(...longestArr.slice(longestIDX));
            break;
        }

        if (longestArr[longestIDX] < smallestArr[smallestIDX]) {
            if (newArr[newArr.length - 1] != longestArr[longestIDX] || newArr[newArr.length - 1] === undefined) {
                newArr.push(longestArr[longestIDX])
            }
            longestIDX++;

        }
        else if (smallestArr[smallestIDX] < longestArr[longestIDX]) {
            if (newArr[newArr.length - 1] !== smallestIDX[smallestIDX] || newArr[newArr.length - 1] === undefined) {
                newArr.push(smallestArr[smallestIDX])
            }
            smallestIDX++;
        }
        else if (longestArr[longestIDX] === smallestArr[smallestIDX]) {
            if (newArr[newArr.length - 1] != longestArr[longestIDX]) {
                newArr.push(longestArr[longestIDX])
            }
            longestIDX++;
            smallestIDX++;
        }
    }
    console.log(newArr);
    return newArr;
}

function mergeDedupe2(arr1, arr2) {
    let merged = [] //array to return
    let indexOne = 0 // initialize two indices, one for each array
    let indexTwo = 0
    while (indexOne < arr1.length && indexTwo < arr2.length) { //while both indices are within their respective arrays
        let one = arr1[indexOne] //get the values from each arr at their respective indices
        let two = arr2[indexTwo]
        if (one == two) { //if they're equal
            if (merged[merged.length - 1] != one) { //see if the item exists already in our array (should be last item since we're using sorted arrs)
                merged.push(one) //if it doesn't, push this value
            }
            indexOne++ //regardless, move both indices forward
            indexTwo++
        } else if (one < two) { // if one is smaller, only check and potentially push one
            if (merged[merged.length - 1] !== one) {
                merged.push(one)
            }
            indexOne++ //regarless, move index one up
        } else if (merged[merged.length - 1] !== two) { // else if two smaller, check for dupes then push
            merged.push(two)
            indexTwo++
        } else {
            indexTwo++ //increase indexTwo if it the value didn't get pushed
        }
    }

    while (indexOne < arr1.length) {  //collect the rest of arr 1 if arr 2 ran out
        let one = arr1[indexOne]
        if (merged[merged.length - 1] != one) { // still checking for dupes
            merged.push(one)
        }
        indexOne++

    }

    while (indexTwo < arr2.length) { // collect the rest of arr 2 if arr 1 ran out
        let two = arr2[indexTwo]
        if (merged[merged.length - 1] != two) { // still checking for dupes
            merged.push(two)
        }
        indexTwo++

    }
    return merged

}


// =====================
function mergeDedupe(arrA, arrB) {
    let a = 0;
    let b = 0;
    let arrComb = [];
    while (arrA[a] != undefined && arrB[b] != undefined) {
        if (arrA[a] == arrB[b]) {
            if (arrComb.includes(arrA[a])) {
                a++;
                b++;
                continue
            } else {
                arrComb.push(arrA[a]);
                // console.log(`arrA[a] = ${arrA[a]}`)
                a++;
                b++;
            }
        } else if (arrA[a] < arrB[b]) {
            if (arrComb.includes(arrA[a])) {
                a++;
                continue
            } else {
                arrComb.push(arrA[a]);
                a++;
            }
        } else {  // arrB[b] > arrA[a]
            if (arrComb.includes(arrB[b])) {
                b++;
                continue
            } else {
                arrComb.push(arrB[b]);
                b++;
            }
        }
    }
    if (arrA[a] != undefined) {
        while (a < arrA.length) { //could also check against arrComb.length-1 value instead of this loop
            if (arrComb.includes(arrA[a])) {
                a++;
                continue
            } else {
                arrComb.push(arrA[a]);
                a++;
            }
        }
    } else {  // arrB[b] != undefined
        while (b < arrB.length) {
            if (arrComb.includes(arrB[b])) {
                b++;
                continue
            } else {
                arrComb.push(arrB[b]);
                b++;
            }
        }
    }
    console.log(arrComb);
    return arrComb
}


// ------------
function mergeDedupe(arr1, arr2) {
    let sortedArr = [];
    let a = 0;
    let b = 0;

    // while either index is less than its array's length...
    while (a < arr1.length || b < arr2.length) {
        // catches out of bounds
        if (a == arr1.length) {
            // dupe check
            if (sortedArr[sortedArr.length - 1] != arr2[b]) {
                sortedArr.push(arr2[b]);
            }
            b++;
            continue;
        } else if (b == arr2.length) {
            if (sortedArr[sortedArr.length - 1] != arr1[a]) {
                sortedArr.push(arr1[a]);
            }
            a++;
            continue;
        }

        // compare values. if the value has already been pushed, do not push that value (dedupe)
        if (arr1[a] < arr2[b]) {
            // dupe check
            if (sortedArr[sortedArr.length - 1] != arr1[a]) {
                sortedArr.push(arr1[a]);
            }
            a++;
        } else if (arr1[a] == arr2[b]) {
            if (sortedArr[sortedArr.length - 1] != arr1[a]) {
                sortedArr.push(arr1[a]);
            }
            a++, b++;
        } else {
            if (sortedArr[sortedArr.length - 1] != arr2[b]) {
                sortedArr.push(arr2[b]);
            }
            b++;
        }
    }
    return sortedArr;
}

// -----
function mergeDedupe(arr1, arr2) {
    let i = 0
    let j = 0
    let newArr = []
    while (i < arr1.length || j < arr2.length) {// while either loop is within their arrays length
        if (newArr[newArr.length - 1] == arr1[i]) {// if the last value in newArr is the same value we just pushed
            i++
        }
        if (newArr[newArr.length - 1] == arr2[j]) {// if the last value in newArr is the same value we just pushed
            j++
        }
        else if (arr2[j] < arr1[i] || arr1[i] == undefined) {// if the current arr2 value is less, push it and j++
            newArr.push(arr2[j])
            j++
        }
        else if (arr1[i] < arr2[j] || arr2[j] == undefined) {// if the current arr1 value is less, push it and i++
            newArr.push(arr1[i])
            i++
        } else {// else, arr1[i] and arr2[j] are equal, so push one, so and increment both
            newArr.push(arr1[i])
            i++
            j++
        }
    }
    return newArr
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a ->
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]