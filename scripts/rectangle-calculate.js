function calculateRectangleArea() {
    // get rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    // get rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // calculate rectangle area
    const rectangleArea = length * width;

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}