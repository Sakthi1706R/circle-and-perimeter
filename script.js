// Function to calculate the area of the circle
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2); // Area = π * radius^2
}

// Function to calculate the perimeter (circumference) of the circle
function calculatePerimeter(radius) {
    return 2 * Math.PI * radius; // Perimeter = 2 * π * radius
}

// Function to handle the calculation and display results
function calculate() {
    const radius = document.getElementById('radius').value;
    
    // Check if the input radius is valid (non-negative number)
    if (radius <= 0 || isNaN(radius)) {
        alert("Please enter a valid radius.");
        return;
    }
    
    // Call the calculation methods
    const area = calculateArea(radius);
    const perimeter = calculatePerimeter(radius);

    // Display the results
    document.getElementById('areaResult').innerText = `Area: ${area.toFixed(2)} square units`;
    document.getElementById('perimeterResult').innerText = `Perimeter: ${perimeter.toFixed(2)} units`;
}
