const SIZE_LIMIT = 300;
const SIZE_DEFAULT = 50;
const DELAY_DEFAULT = 5;

$(document).ready(function () {
    // When the page is loaded, create a new array/
    let arr = refreshArray();
    let delay = DELAY_DEFAULT;

    // When the page is loaded add the default values into the settings boxes.
    $("#arr-size").attr("placeholder", `Array Size: ${SIZE_DEFAULT}`);
    $("#delay").attr("placeholder", `Delay Amount: ${DELAY_DEFAULT}`);

    // Function for pressing the refresh array button.
    $("#refresh").on("click", () => {
        arr = refreshArray();
    });

    // Function for pressing enter on the refresh array button.
    $("#arr-size").on("keypress", function (e) {
        if (e.which === 13) {
            arr = refreshArray();
        }
    });

    // Function for setting the delay value.
    $("#delay").on("keypress", function (e) {
        delay = $("#delay").val();
        if (!delay && e.which === 13) {
            delay = DELAY_DEFAULT;
        }
    });

    // On click function for all of the different kinds of sorts.
    $("#quick, #merge, #bubble, #selection, #insertion").on(
        "click",
        function () {
            let id = $(this).get(0).id;
            if (id === "quick") {
                arr = quickSort(arr, delay);
            }
            if (id === "merge") {
                arr = mergeSort(arr, 0, arr.length, delay);
            }
            if (id === "bubble") {
                arr = bubbleSort(arr, delay);
            }
            if (id === "selection") {
                arr = selectionSort(arr, delay);
            }
            if (id === "insertion") {
                arr = insertionSort(arr, delay);
            }
            console.log(arr);
        }
    );
});

// Function to create new array upon request, with specified attributes.
function refreshArray() {
    let size, arr;

    // Get the size from the input boxes in the HTML.
    size = $("#arr-size").val();
    if (!size || size > SIZE_LIMIT) {
        size = SIZE_DEFAULT;
    }

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
    let height, width, element, i;
    $target = $(".canvas");
    $target.empty();

    for (i = 0; i < arr.length; ++i) {
        height = arr[i];
        width = $target.width() / arr.length;
        // Create the bars with the calculated height and widths, and add the bars to the canvas..
        element = `<div class="bar" style="height:${height}px; width: ${width}px"></div>`;
        $target.append(element);
    }
}

// Function generate an interget between and including two limits.
function genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
