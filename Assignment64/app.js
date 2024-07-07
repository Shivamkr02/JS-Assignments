function redirectToWebsite() {
    // Ask user for input
    var userInput = prompt("Which website do you want to visit? Type 'google' or 'facebook'.");

 
    userInput = userInput.toLowerCase();

    if (userInput === 'google') {
        window.location.href = 'https://www.google.com';
    } else if (userInput === 'facebook') {
        window.location.href = 'https://www.facebook.com';
    } else {
        
    }
}
