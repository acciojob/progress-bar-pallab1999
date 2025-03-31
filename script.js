//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progressLine = document.querySelector(".progress-line::before");

let currentActive = 1;

// Function to update the progress bar and buttons
function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update the progress line width dynamically
    const activeCircles = document.querySelectorAll(".active").length;
    const progressPercentage = ((activeCircles - 1) / (circles.length - 1)) * 100;
    document.styleSheets[0].addRule('.progress-line::before', `width: ${progressPercentage}% !important`);

    // Enable or disable buttons based on progress
    prevButton.disabled = currentActive === 1;
    nextButton.disabled = currentActive === circles.length;
}

// Event listener for Next button
nextButton.addEventListener("click", () => {
    if (currentActive < circles.length) {
        currentActive++;
        update();
    }
});

// Event listener for Previous button
prevButton.addEventListener("click", () => {
    if (currentActive > 1) {
        currentActive--;
        update();
    }
});

// Initial update to set correct styles
update();
