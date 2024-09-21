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

// Variable to track if popup is active
let isPopupActive = false;

// When the user clicks the button, open the modal only if popup is not active
aboutLink.onclick = function() {
    if (!isPopupActive) {
        modal.style.display = "block";
    }
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

// PopUp Quote
document.getElementById('showPopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    isPopupActive = !isPopupActive; // Toggle popup state
    popup.classList.toggle('active');
    popup.classList.toggle('hidden');
});

//--------------------------------------------------------------//


//Dropdown Apps
document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.toggle_apps_btn');
    
    dropbtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default button behavior
        const dropdownContent = document.getElementsByClassName(".dropdown_content"); // Get the dropdown content

        // Toggle visibility
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        } else {
            dropdownContent.classList.add('show');
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
        if (!e.target.matches('.toggle_apps_btn')) {
            const dropdowns = document.getElementsByClassName(".dropdown_content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});
