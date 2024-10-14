function calculateTriangleArea() {
    // for base value
    const traiangleBaseInput = document.getElementById('triangle-base');
    const inputBaseValue = traiangleBaseInput.value;
    const base = parseFloat(inputBaseValue);
    // console.log(base);

    // for height value:
    const traiangleHeightInput = document.getElementById('triangle-height');
    const inputHeightValue = traiangleHeightInput.value;
    const height = parseFloat(inputHeightValue);
    // console.log(height);

    // calculate triangle area:
    const area = 0.5 * base * height;
    // console.log('area of the triangle is: ', area);

    // disiplay triangle area:
    const triangleAreaDisplay = document.getElementById('triangle-area');
    triangleAreaDisplay.innerText = area;

}