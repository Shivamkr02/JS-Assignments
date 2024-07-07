// Get the image element
const image = document.getElementById('myImage');

// Add event listeners for mouseover and mouseout
image.addEventListener('mouseover', () => {
    image.src = './img.jpeg';
});

image.addEventListener('mouseout', () => {
    image.src = './img1.jpeg';
});
