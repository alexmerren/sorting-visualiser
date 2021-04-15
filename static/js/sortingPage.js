
const DEFAULT_SIZE = 50;
let DELAY = 5;

$(document).ready(function() {
    // Create an array when the page is loaded.
    let arr = refreshArray();

    // Function for pressing the refresh array button.
    $("#refresh").on('click', function() {
        arr = refreshArray();
    })

    // Function for pressing enter on the refresh array button.
    $("#arr-size").on('keypress', function(e) {
        if (e.which === 13) {
            arr = refreshArray();
        }
    });
    
    $("#delay").on('keypress', function(e) {
        if (e.which === 13) {
            if ($("#delay").val() === undefined) { return }
            DELAY = $("#delay").val();
        }
    });
    // On click function for all of the different kinds of sorts.
    $("#quick, #merge, #bubble, #selection, #insertion").on('click', function() {
        let id = $(this).get(0).id;
        if (id === "quick") {
            arr = quickSort(arr, DELAY);
        }
        if (id === "merge") {
            arr = mergesort(arr, 0, arr.length, DELAY);
        }
        if (id === "bubble") {
            arr = bubbleSort(arr, DELAY);
        }
        if (id === "selection") {
            arr = selectionSort(arr, DELAY);
        }
        if (id === "insertion") {
            arr = insertionSort(arr, DELAY);
        }
        console.log(arr);
    });

});

// Function to create new array upon request, with specified attributes.
function refreshArray() {
    // Set the default amount to 200.
    let size = DEFAULT_SIZE;
    let limit = 300;

    // If the field is empty or bigger than the limit, don't do anything.
    if (  !$("#arr-size").val() ) {}
    else if ( $("#arr-size").val() > limit ) {
        $("#arr-size").val(size); 
    } else {
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
