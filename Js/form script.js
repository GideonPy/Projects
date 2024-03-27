document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('Name'); 
    const emailInput = document.getElementById('Email');
    const organizationInput = document.getElementById('ogranization'); 
    const roleInput = document.getElementById('role');
    const messageTextArea = document.getElementById('message');
    const submitButton = form.querySelector('button[type="submit"]');

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate form fields
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || organizationInput.value.trim() === '' || roleInput.value.trim() === '' || messageTextArea.value.trim() === '') {
            alert('Please fill out all the fields.');
            return false;
        }

        // If validation passes, show a confirmation message
        alert('Thank you for your message, ' + nameInput.value + '! We will get back to you soon.');

        // Optionally, reset the form or perform other actions here
        form.reset();
    };
});
