// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the entered email from the form
    const emailInput = document.querySelector('input[type="text"]');
    const email = emailInput.value;
  
    // Save the email to localStorage
    localStorage.setItem('userEmail', email);
  
    // Redirect to another page (replace 'next-page.html' with the desired page URL)
    window.location.href = '../HomePage/home.html';   
}
  
  // Add an event listener to the form
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleFormSubmit);
  