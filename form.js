document.getElementById('threatForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Capture the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const threatType = document.getElementById('threatType').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    // Display a confirmation message
    document.getElementById('confirmationMessage').textContent = 
        `Thank you, ${name}. Your ${threatType} report has been submitted. We will review it and get back to you.`;

    // You can later send the data to your server here.
});
