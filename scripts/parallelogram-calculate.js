function calculateParallelogramArea() {
    // get parallelogram base
    const baseInput = document.getElementById('paralogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);

    // get parallelogram height
    const heightInput = document.getElementById('paralogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);

    // calculate parallelogram area
    const area = base * height;

    // display parallelogram area
    const areaSpan = document.getElementById('paralogram-area');
    areaSpan.innerText = area;
}