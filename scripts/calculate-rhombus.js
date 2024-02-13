function calculateRhombusArea() {
    // get rhombus d1 length
    const length1Input = document.getElementById('rhombus-d1');
    const length1Text = length1Input.value;
    const length1 = parseFloat(length1Text);

    // get rhombus d2 length
    const length2Input = document.getElementById('rhombus-d2');
    const length2Text = length2Input.value;
    const length2 = parseFloat(length2Text);

    // calculate rhombus area
    const area = 0.5 * length1 * length2;

    // display rhombus area
    const areaSpan = document.getElementById('rhombus-area');
    areaSpan.innerText = area;
}