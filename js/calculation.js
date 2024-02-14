function claculateTriangleArea()
{
    const triangleBaseInput = parseFloat(document.getElementById("triangle-base").value);
    // const triangleBaseText = triangleBaseInput.value;
    // const base = parseFloat(triangleBaseText);
    // console.log(triangleBaseInput);

    const height = parseFloat(document.getElementById("triangle-height").value);
    // console.log(hight);

    const Area = 0.5* triangleBaseInput * height
    // console.log(triangleArea);
    const triangleArea  = document.getElementById("triangle-area");
    triangleArea.innerText = Area;
}

function claculateRactangleArea()
{
    const rectangleWidth = parseFloat(document.getElementById("rectangle-width").value);
    const rectangleHeight = parseFloat(document.getElementById("rectangle-height").value);
    const area = rectangleWidth * rectangleHeight;
    const rectangleArea  = document.getElementById("rectangle-area");
    rectangleArea.innerText = area;

}

function calculateParallelogramArea()
{
    const parallelogramBase = parseFloat(document.getElementById("parallelogram-base").value);
    const parallelogramHeight = parseFloat(document.getElementById("parallelogram-height").value);
    const area = parallelogramBase * parallelogramHeight;
    const parallelogramArea = document.getElementById("parallelogram-area");
    parallelogramArea.innerText = area;
}

function calculateRhombusArea()
{
    const rhombusDiagonal1 = parseFloat(document.getElementById("rhombusDiagonal-1").value);
    const rhombusDiagonal2 = parseFloat(document.getElementById("rhombusDiagonal-2").value);
    const area = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    const rhombusArea = document.getElementById("rhombus-area");
    rhombusArea.innerText = area;
}

function calculatePentagonArea()
{
    const perimeter = parseFloat(document.getElementById("perimeter").value);
    const apothem = parseFloat(document.getElementById("apothem").value);
    const area = 0.5 * perimeter * apothem;
    const pentagonArea = document.getElementById("pentagon-area");
    pentagonArea.innerText = area;
}

function calculateEllipseArea()
{
    const majorAxix = parseFloat(document.getElementById("major-axix").value);
    const minorAxix = parseFloat(document.getElementById("minor-axix").value);
    const area = 3.1416 * majorAxix * minorAxix;
    const ellipseArea = document.getElementById("ellipse-area");
    ellipseArea.innerText = area;
}