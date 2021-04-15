/* === Quick Sort === */

function quickSort(arr, delay) {
    return arr;
}

function partition() {

}

/* === Merge Sort === */

function mergeSort(arr, delay) {
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

async function bubbleSort(arr, delay) {
    let i, j, temp, n;
    n = arr.length;
    // Iterate through the entire array.
    for (i = 0; i < arr.length; ++i) {
        // Go through the remaining amount of elements
        // to the right of the current element.
        for (j = 0; j < arr.length-i-1; ++j) {
            // Change the colour of the two values being compared to red.
            changeColor(j, "#FF0000", delay)
            changeColor(j+1, "#FF0000", delay)

            // Wait for the previous frame to end before
            // executing the next part of the loop.
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });

            // If the element next in line is bigger 
            // than the current element- swap them.
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // Animate the swapping of the values.
                animate(j, j+1, delay);
            }
            // Change the colour of the compared values back to normal.
            changeColor(j, "var(--element3)", delay);
            changeColor(j+1, "var(--element3)", delay);
        }
        // Change the colour of the  sorted value to green.
        changeColor(n - i - 1, "#00FF00", delay);
    }
    return arr;
}

/* === Selection Sort === */

async function selectionSort(arr, delay) {
    let i, j, minIndex;
    // Iterate through the entire array.
    for (i = 0; i < arr.length; ++i) {
        // Set the swapping index to i.
        minIndex = i;
        // Set the colour of the minimum value to red.
        changeColor(i, "#FF0000", delay);

        // Go through the remaining subset of the array
        // to the right of the current element, and
        // find the index of the smallest element.
        for (j = i + 1; j < arr.length; ++j) {

            // Set the color of the other value we are 
            // comparing to the minimum value as red.
            changeColor(j, "#FF0000", delay);

            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });

            // Reset the colour after comparing.
            changeColor(j, "var(--element3)", delay);

            if (arr[j] < arr[minIndex]) {
                // Reset the colour of the old minimum value.
                changeColor(minIndex, "var(--element3)", delay);
                minIndex = j;
                // Set the colour of the new minimum value.
                changeColor(minIndex, "#FF0000", delay);
            }

        }
        // Swap the leftmost unordered element if
        // there is a smaller number further right
        // than it.
        if (i != minIndex) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            // Animate the two values swapping.
            animate(i, minIndex, delay);
        }
        // Change the colour of the old minimum index back to default.
        changeColor(minIndex, "var(--element3)", delay);
        // The value at position i is the most recently sorted,
        // so set the colour of the value to green.
        changeColor(i, "#00FF00", delay);
    }
    return arr;
}

/* === Insertion Sort === */

async function insertionSort(arr, delay) {
    let i, j, key;
    // Iterate through the entire array.
    for (i = 1; i < arr.length; ++i) {
        // Get the current element, and set that as the key.
        key = arr[i];

        // Change the color of the currently biggest element. 
        changeColor(i, "#FF0000", delay);

        j = i -1;
        // Move along the array either until you hit the beginning 
        // or you find something that is bigger than it.
        while (j >= 0 && arr[j] > key) {

            // Change the colour of the element that is being compared.
            changeColor(j, "#FF0000", delay);

            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });

            arr[j+1] = arr[j];
            // Move the element down the array.
            animate(j+1, j, delay);
            // Change the colour of the currently compared element to normal.
            changeColor(j, "var(--element3)", delay);
            j = j-1;
        }
        arr[j+1] = key;
    }

    // After the array is sorted go through and change
    // all of the colours to green.
    for (i = 0; i < arr.length; ++i) {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
        changeColor(i, "#00FF00", delay)
    }

    return arr;
}

/* === Auxiliary Functions === */

function changeColor(elem, color, delay) {
    return new Promise(resolve => {
        let arr = $(".bar");
        window.requestAnimationFrame(function() {
            setTimeout(() => {
                $(arr[elem]).css("background-color", color);
                resolve();
            }, delay);
        });
    });
}

function animate(elem1, elem2, delay) {
    return new Promise(resolve => {
        let arr = $(".bar");
        let elem1Val, elem2Val;
        window.requestAnimationFrame(function() {
            setTimeout(() => {
                elem1Val = arr.eq(elem1).css("height");
                elem2Val = arr.eq(elem2).css("height");
                $(arr[elem2]).css("height", elem1Val);
                $(arr[elem1]).css("height", elem2Val);
                resolve();
            }, delay);
        });
    })
}