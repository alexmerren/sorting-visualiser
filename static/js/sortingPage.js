$(document).ready(function() {
    // Create an array when the page is loaded.
    let unsortedArr = refreshArray();

    // Function for pressing the refresh array button.
    $("#refresh").on('click', function() {
        unsortedArr = refreshArray();
    })

    // Function for pressing enter on the refresh array button.
    $("#arr-size").on('keypress', function(e) {
        if (e.which === 13) { unsortedArr = refreshArray() }
    });

    // Function for pressing the bubble sort button.
    $("#bubble").on('click', function() {
        let sortedArr = bubbleSort(unsortedArr);
        console.log(sortedArr);
    });

    // Function for pressing the bubble sort button.
    $("#selection").on('click', function() {
        let sortedArr = selectionSort(unsortedArr);
        console.log(sortedArr);
    });

    // Function for pressing the insertion sort button.
    $("#insertion").on('click', function() {
        let sortedArr = insertionSort(unsortedArr);
        console.log(sortedArr);
    });

    // Function for pressing the merge sort button.
    $("#merge").on('click', function() {
        let sortedArr = mergeSort(unsortedArr);
        console.log(sortedArr);

    // Function for pressing the quick sort button.
    $("#quick").on('click', function() {
        let sortedArr = quickSort(unsortedArr);
        console.log(sortedArr);
    });
    });
});

// Function to create new array upon request, with specified attributes.
function refreshArray() {
    // Set the default amount to 200.
    let size = 200;
    let limit = 500;

    // If the field is empty or bigger than the limit, don't do anything.
    if (  !$("#arr-size").val() ) {}
    else if ( $("#arr-size").val() > limit ) { $("#arr-size").val(size); }
    else {
        size = $("#arr-size").val();
    }
    // Generate a new array with given limits and size,
    // then draw that array in the html.
    let arr = generateArray(size, 100, 500);
    drawArray(arr);
    return arr;
}

// Function to generate an array with different specified attributes.
function generateArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; ++i) {
        // Generate a random number from the method below 
        // and add it to the array.
        let number = genRandomInt(min, max);
        arr.push(number);
    }
    return arr;
}

// Function to create div's with height of value in array.
function drawArray(arr) {
    $target = $('.canvas');
    let value, element;
    // Empty the canvas element so that we can add the new values.
    $target.empty();
    for (let i = 0; i < arr.length; ++i) {
        value = arr[i];
        // Create div's with a height of the value of the random number generated.
        element = `<div class="bar" style="height:${value}px;"></div>`;
        // Add the new div's to the canvas.
        $target.append(element);
    }
}

// Function generate an interget between and including two limits.
function genRandomInt(min, max) {
    return Math.floor(Math.random() *  (max - min + 1) + min);
}
