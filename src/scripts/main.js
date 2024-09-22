// Get the toggle button and set event listener
const themeToggleButton = document.getElementById('toggleLightTheme');

// Function to toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('lightTheme');
});

//--------------------------------------------------------------//

// // Get the modal
// const modal = document.getElementById("myModal");

// // Get the button that opens the modal
// const aboutLink = document.getElementById("about");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("modal__content_close")[0];

// // Variable to track if popup is active
// let isPopupActive = false;

// // When the user clicks the button, open the modal only if popup is not active
// aboutLink.onclick = function() {
//     if (!isPopupActive) {
//         modal.style.display = "block";
//         isPopupActive = true; // Set popup as active
//     }
// };

// span.onclick = function() {
//     modal.style.display = "none";
//     isPopupActive = false; // Reset popup state
// };

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         isPopupActive = false; // Reset popup state
//     }
// };

//--------------------------------------------------------------//

// Array with and 10 quotes
const quotes = [
    // Quotes
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill",
    "“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson",
    "“Opportunities don't happen. You create them.” – Chris Grosser",
    "“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt",
    "“The way to get started is to quit talking and begin doing.” – Walt Disney",
    "“Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.” – Roy T. Bennett",
    "“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau",
    "“If you really look closely, most overnight successes took a long time.” – Steve Jobs",
    "“Hardships often prepare ordinary people for an extraordinary destiny.” – C.S. Lewis",
    "“It’s not whether you get knocked down, it’s whether you get up.” – Vince Lombardi"
];

// Function to generate a random idea or quote
function generateQuote() {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the idea or quote at that index
    const randomMessage = quotes[randomIndex];
    // Display the message in the "message" div
    document.getElementById("message").textContent = randomMessage;
}

// PopUp Quote
document.getElementById('showPopup').addEventListener('click', function() {
    generateQuote(); // Generate quote
    const popup = document.getElementById('popup');
    isPopupActive = !isPopupActive; // Toggle popup state
    popup.classList.toggle('active');
    popup.classList.toggle('hidden');
});


//--------------------------------------------------------------//

//Dropdown Apps
document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.toggle_apps_btn');
    
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        const dropdownContent = document.getElementsByClassName("dropdown_content")[0]; // Access the first dropdown content

        // Toggle visibility
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        } else {
            dropdownContent.classList.add('show');
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.toggle_apps_btn')) {
            const dropdowns = document.getElementsByClassName("dropdown_content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});

