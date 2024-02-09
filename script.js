document.getElementById("randomCatBtn").addEventListener("click", function() {
    var catImages = ["../images/frickuashley.jpg", "../images/lilla søt.jpg", "../images/PogOcat.jpg", "../images/lilla.png", "/lillab.jpg"];
    var randomIndex = Math.floor(Math.random() * catImages.length); // Generate a random index
    var randomCatImage = catImages[randomIndex]; // Get a random cat image URL
    document.getElementById("catImage").src = randomCatImage; // Set the src attribute of the cat image
});