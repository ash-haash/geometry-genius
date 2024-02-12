function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // calculate triangle area
    const triangleArea = 0.5 * base * height;

    // display triangle area
    const tirangleAreaSpan = document.getElementById('triangle-area');
    tirangleAreaSpan.innerText = triangleArea;
}