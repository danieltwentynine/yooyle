// Array with 10 ideas and 10 quotes
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

// Add an event listener to the button
document.getElementById("showPopup").addEventListener("click", generateQuote);
