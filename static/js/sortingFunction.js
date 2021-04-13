/* === Quick Sort === */

function quickSort(arr) {
    let middle = arr.length / 2;
    return arr;
}

/* === Merge Sort === */

function mergeSort(arr) {
    // Find the middle of the given array.
    let middle = arr.length / 2;
    // If an array is 1 element, it is already merged completely.
    if (arr.length < 2) {
        return arr;
    }
    // Split the given array in half, and sort that.
    let leftArr = arr.splice(0, middle);

    // Recursively split the arrays until there are 1 element arrays.
    return merge(mergeSort(leftArr),mergeSort(arr));
}

function merge(leftArr, rightArr) {
    let arr = [];
    // Loop over the two arrays until one is empty.
    while (leftArr.length && rightArr.length) {
        // If the first element of the left array is smaller
        // than the first element of the right array, remove
        // that element from the right array and push it onto
        // the main array
        if (leftArr[0] < rightArr[0]) {
            arr.push(leftArr.shift());
        } else {
            arr.push(rightArr.shift());
        }
    }

    // Concatenate the main array,
    // left array, and right array.
    return arr.concat(leftArr, rightArr);
}

/* === Bubble Sort === */

function bubbleSort(arr) {
    let i, j, temp;
    // Iterate through the entire array.
    for (i = 0; i < arr.length; ++i) {
        // Go through the remaining amount of elements
        // to the right of the current element.
        for (j = 0; j < arr.length-i-1; ++j) {
            // If the element next in line is bigger 
            // than the current element- swap them.
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

/* === Selection Sort === */

function selectionSort(arr) {
    let i, j, minIndex, temp;
    // Iterate through the entire array.
    for (i = 0; i < arr.length; ++i) {
        // Set the swapping index to i.
        minIndex = i;

        // Go through the remaining subset of the array
        // to the right of the current element, and
        // find the index of the smallest element.
        for (j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the leftmost unordered element if
        // there is a smaller number further right
        // than it.
        if (i != minIndex) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

/* === Insertion Sort === */

function insertionSort(arr) {
    let i, j, key;
    // Iterate through the entire array.
    for (i = 1; i < arr.length; ++i) {
        // Get the current element, and set that as the key.
        key = arr[i];
        j = i -1;
        // Move along the array either until you hit the beginning 
        // or you find something that is bigger than it.
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
}

function heapSort(arr) {}