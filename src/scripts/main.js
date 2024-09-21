// Get the toggle button and set event listener
const themeToggleButton = document.getElementById('toggleLightTheme');

// Function to toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('lightTheme');
});

//--------------------------------------------------------------//

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const aboutLink = document.getElementById("about");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("modal__content_close")[0];

// When the user clicks the button, open the modal
aboutLink.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//--------------------------------------------------------------//

//PopUp Quote
document.getElementById('showPopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
    popup.classList.toggle('hidden');
});