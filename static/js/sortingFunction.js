/* === Quick Sort === */

async function quickSort(arr, start, end, delay) {
    // If the array given to the quick sort function
    // is less than one, that means that it has
    // been broken down to it's smallest form.
    if (start >= end) {
        return arr;
    }

    // Returns pivotIndex
    let index = await partition(arr, start, end, delay);

    // Recursively apply the same logic to the left and right subarrays
    await quickSort(arr, start, index - 1, delay);
    await quickSort(arr, index + 1, end, delay);

    // for (i = start; i < end + 1; i++) {
    //     await changeColor(i, "var(--primary)", delay);
    // }
}

async function partition(arr, start, end, delay) {
    let startIndex, endValue, i;

    endValue = arr[end];
    startIndex = start; 

    await changeColor(startIndex, "var(--secondary)", delay);
    await changeColor(end, "var(--secondary)", delay);
    // Go through the array and swap the elements
    // if the current element is smaller than the pivot value.
    for (i = start; i < end; i++) {

        await changeColor(i, "var(--secondary)", delay);

        if (arr[i] < endValue) {
            // Swapping elements
            temp = arr[i];
            arr[i] = arr[startIndex];
            arr[startIndex] = temp;

            changeColor(i, "var(--bar)", delay);

            await animate(i, startIndex, delay);
            // Moving to next element
            startIndex++;
        }

        changeColor(i, "var(--bar)", delay);
    }
    
    // Putting the pivot value in the middle
    temp = arr[startIndex];
    arr[startIndex] = arr[end];
    arr[end] = temp;
    changeColor(end, "var(--bar)", delay);
    changeColor(startIndex, "var(--bar)", delay);
    await animate(startIndex, end, delay);

    return startIndex;
}

/* === Cocktail Sort === */

async function cocktailSort(arr, start, end, delay) {
    let minIndex, maxIndex, middle, i;
    middle = Math.floor((arr.length) / 2);

    // Set the biggest value as the leftmost value.
    maxIndex = start;
    await changeColor(maxIndex, "var(--secondary)", delay);
    // Go through the rest of the array for bigger values.
    for (i = start; i <= end; i++) {
        if ( arr[i] >= arr[maxIndex] ) {
            // Set the current index as the biggest value
            // if the current index is bigger than the biggest value.
            changeColor(maxIndex, "var(--bar)", delay);
            maxIndex = i;
            changeColor(maxIndex, "var(--secondary)", delay);
        }
    }

    // Swap the rightmost value (end) and the biggest value.
    temp = arr[maxIndex];
    arr[maxIndex] = arr[end];
    arr[end] = temp;
    changeColor(maxIndex, "var(--bar)", delay);
    changeColor(end, "var(--secondary)", delay);
    await animate(maxIndex, end, delay);

    // Do the same as before but with the smallest value.
    minIndex = end;
    await changeColor(minIndex, "var(--secondary)", delay);
    for (i = end; i >= start; i--) {
        if ( arr[i] <= arr[minIndex] ) {
            changeColor(minIndex, "var(--bar)", delay);
            minIndex = i;
            changeColor(minIndex, "var(--secondary)", delay);
        }
    }

    // Swap the smallest value with the leftmost value.
    temp = arr[minIndex];
    arr[minIndex] = arr[start];
    arr[start] = temp; 
    changeColor(minIndex, "var(--bar)", delay);
    changeColor(start, "var(--secondary)", delay);
    await animate(minIndex, start, delay);
   
    // When the end of the sorting is reached,
    // mark all the bars ars done.
    if ( end - start <= 1 ) {
        for (i = 0; i < arr.length; ++i) {
            await changeColor(i, "var(--primary)", delay);
        }
        return arr;
    }

    // Reset the start and end colours.
    changeColor(start, "var(--bar)", delay);
    changeColor(end, "var(--bar)", delay);

    // Call the function again but not on the furthest values.
    cocktailSort(arr, start + 1, end - 1, delay);

    return arr;
}

/* === Bubble Sort === */

async function bubbleSort(arr, delay) {
    let i, j, temp, n;
    n = arr.length;
    // Iterate through the entire array.
    for (i = 0; i < arr.length; ++i) {
        // Go through the remaining amount of elements
        // to the right of the current element.
        for (j = 0; j < arr.length - i - 1; ++j) {
            // Change the colour of the two values being compared.
            changeColor(j, "var(--secondary)", delay);
            changeColor(j + 1, "var(--secondary)", delay);

            // If the element next in line is bigger
            // than the current element- swap them.
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // Animate the swapping of the values.
                await animate(j, j + 1, delay);
            }
            // Change the colour of the compared values back to normal.
            changeColor(j, "var(--bar)", delay);
            changeColor(j + 1, "var(--bar)", delay);
        }
        // Change the colour of the  sorted value to green.
        changeColor(n - i - 1, "var(--primary)", delay);
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
        changeColor(i, "var(--secondary)", delay);

        // Go through the remaining subset of the array
        // to the right of the current element, and
        // find the index of the smallest element.
        for (j = i + 1; j < arr.length; ++j) {
            // Set the color of the other value we are
            // comparing to the minimum value as red.
            await changeColor(j, "var(--secondary)", delay);

            // Reset the colour after comparing.
            changeColor(j, "var(--bar)", delay);

            if (arr[j] < arr[minIndex]) {
                // Reset the colour of the old minimum value.
                changeColor(minIndex, "var(--bar)", delay);
                minIndex = j;
                // Set the colour of the new minimum value.
                changeColor(minIndex, "var(--secondary)", delay);
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
            await animate(i, minIndex, delay);
        }
        // Change the colour of the old minimum index back to default.
        changeColor(minIndex, "var(--bar)", delay);
        // The value at position i is the most recently sorted,
        // so set the colour of the value to green.
        changeColor(i, "var(--primary)", delay);
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

        j = i - 1;

        await changeColor(i, "var(--secondary)", delay);

        // Move along the array either until you hit the beginning
        // or you find something that is bigger than it.
        while (j >= 0 && arr[j] > key) {

            changeColor(i, "var(--bar)", delay);
            changeColor(j, "var(--secondary)", delay);

            arr[j + 1] = arr[j];
            // Move the element down the array.
            await animate(j + 1, j, delay);
            // Change the colour of the currently compared element to normal.
            changeColor(j, "var(--bar)", delay);
            j = j - 1;
        }
        changeColor(j + 1, "var(--bar)", delay);
        changeColor(j, "var(--bar)", delay);

        arr[j + 1] = key;
    }

    // After the array is sorted go through and change
    // all of the colours to green.
    for (i = 0; i < arr.length; ++i) {
        await changeColor(i, "var(--primary)", delay);
    }

    return arr;
}

/* === Auxiliary Functions === */

function changeColor(elem, color, delay) {
    return new Promise((resolve) => {
        let arr = $(".bar");
        window.requestAnimationFrame(function () {
            setTimeout(() => {
                $(arr[elem]).css("background-color", color);
                resolve();
            }, delay);
        });
    });
}

function animate(elem1, elem2, delay) {
    return new Promise((resolve) => {
        let arr = $(".bar");
        let elem1Val, elem2Val;
        window.requestAnimationFrame(function () {
            setTimeout(() => {
                elem1Val = arr.eq(elem1).css("height");
                elem2Val = arr.eq(elem2).css("height");
                $(arr[elem2]).css("height", elem1Val);
                $(arr[elem1]).css("height", elem2Val);
                resolve();
            }, delay);
        });
    });
}
