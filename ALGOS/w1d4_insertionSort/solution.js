/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

function insertionSort2(arr) {

    for (var x = 1; x < arr.length; x++) {
        let temp = arr[x];
        // console.log("X: ", x)
        for (var y = x - 1; y >= 0; y--) {

            if (arr[y] > temp) {
                arr[y + 1] = arr[y];
                if (y == 0) {
                    arr[y] = temp;
                    // break;
                }
            }
            else {
                // console.log("else at y:", y)
                arr[y + 1] = temp;
                break; //because everything else on the left is already pre-sorted
                // once we put the temp in we have to break out of its loop; otherwise it will continue 
            }

        }
    }
    console.log(arr);
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // save the current 'target' so this space is available to use for shifting
        let numToInsert = arr[i];
        let leftIdx = i - 1;

        while (leftIdx >= 0 && arr[leftIdx] > numToInsert) {
            // shift to the right because it's greater than the item we are going to insert
            arr[leftIdx + 1] = arr[leftIdx];
            leftIdx--;
        }
        // shifting complete, insert position located
        arr[leftIdx + 1] = numToInsert;
    }
    return arr;
}


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                // if temp < arr[j], move arr[j] forward
                arr[j + 1] = arr[j];
                if (j == 0) {
                    // if we're at the beginning of the array set arr[0] = temp
                    arr[j] = temp;
                }
            } else {
                // if temp >= arr[j], set arr[j+1] (the index holding the duplicate value) = temp
                arr[j + 1] = temp;
                break
            }
        }
    }
    console.log(arr);
    return arr;
}

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        // storing the first element in the array
        let temp = arr[i];
        // storing the last element in the array
        let j = i - 1;
        // while loop will run only if j is greater than or equal to 0 and temp has to be less than J
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp
    }
    return arr;
}

// ??
function insertionSort(arr) {
  for (let x = 1; x < arr.length; x++) {
    let temp = arr[x];
    for (let y = x - 1; y >= 0; y--) {
      if (arr[y] > temp) {
        arr[y + 1] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
}

insertionSort([3, 5, 2, 1, 0])
insertionSort([3, 0])
insertionSort([0])
insertionSort([])
insertionSort([1, 2, 3, 4, 5])
insertionSort([5, 4, 3, 2, 1])
insertionSort([5, 4, 0, 2, 1])