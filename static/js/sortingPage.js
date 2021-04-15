
const SIZE_LIMIT = 300;
const SIZE_DEFAULT = 50;
const DELAY_DEFAULT = 5;

$(document).ready(function() {
    // Create an array when the page is loaded.
    let arr = refreshArray();
    let delay = DELAY_DEFAULT;

    // Function for pressing the refresh array button.
    $("#refresh").on('click', function() { arr = refreshArray(); })

    // Function for pressing enter on the refresh array button.
    $("#arr-size").on('keypress', function(e) {
        if ( e.which === 13 ) { arr = refreshArray(); }
    });
    
    $("#delay").on('keypress', function(e) {
        delay = $("#delay").val();
        if (!delay && e.which === 13) { delay = DELAY_DEFAULT; }
    });
    // On click function for all of the different kinds of sorts.
    $("#quick, #merge, #bubble, #selection, #insertion").on('click', function() {
        let id = $(this).get(0).id;
        if (id === "quick") { arr = quickSort(arr, delay); }
        if (id === "merge") { arr = mergeSort(arr, 0, arr.length, delay); }
        if (id === "bubble") { arr = bubbleSort(arr, delay); }
        if (id === "selection") { arr = selectionSort(arr, delay); }
        if (id === "insertion") { arr = insertionSort(arr, delay); }
        console.log(arr);
    });

});

// Function to create new array upon request, with specified attributes.
function refreshArray() {
    let size, arr;

    // Get the size from the input boxes in the HTML.
    size = $("#arr-size").val();
    if (!size || size > SIZE_LIMIT) { size = SIZE_DEFAULT; }

    // Create a new array with specified limits and size.
    arr = generateArray(size, 100, 500);
    drawArray(arr);

    return arr;
}

// Function to generate an array with different specified attributes.
function generateArray(length, min, max) {
    let arr = [];
    let number, i;

    for (i = 0; i < length; ++i) {
        number = genRandomInt(min, max);
        arr.push(number);
    }

    return arr;
}

// Function to create div's with height of value in array.
function drawArray(arr) {
    $target = $('.canvas');
    let height, width, element, i;
    // Empty the canvas element so that we can add the new values.
    $target.empty();

    for (i = 0; i < arr.length; ++i) {
        height = arr[i];
        width = $('.canvas').width() / arr.length
        
        // Create div's with a height of the value of the random number generated.
        element = `<div class="bar" style="height:${height}px; width: ${width}px"></div>`;
        // Add the new div's to the canvas.
        $target.append(element);
    }
}

// Function generate an interget between and including two limits.
function genRandomInt(min, max) {
    return Math.floor(Math.random() *  (max - min + 1) + min);
}
