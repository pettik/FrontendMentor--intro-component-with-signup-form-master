'use strict';

// Function to validate the form inputs
function validateForm() {
  // Retrieve form inputs
  const nameInput = document.getElementById('name');
  const lastNameInput = document.getElementById('lastname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Retrieve error message elements
  const nameErrorMessage = document.querySelector('#name + p.error-message');
  const lastNameErrorMessage = document.querySelector(
    '#lastname + p.error-message'
  );
  const emailErrorMessage = document.querySelector('#email + p.error-message');
  const passwordErrorMessage = document.querySelector(
    '#password + p.error-message'
  );

  // Remove 'red' class from all inputs
  nameInput.classList.remove('red');
  lastNameInput.classList.remove('red');
  emailInput.classList.remove('red');
  passwordInput.classList.remove('red');

  // Hide all error messages
  nameErrorMessage.style.display = 'none';
  lastNameErrorMessage.style.display = 'none';
  emailErrorMessage.style.display = 'none';
  passwordErrorMessage.style.display = 'none';

  // Validate name (only strings)
  if (!isAlphabetical(nameInput.value)) {
    nameInput.classList.add('red');
    nameErrorMessage.style.display = 'block';
  }

  // Validate last name (only strings)
  if (!isAlphabetical(lastNameInput.value)) {
    lastNameInput.classList.add('red');
    lastNameErrorMessage.style.display = 'block';
  }

  // Validate email format
  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('red');
    emailErrorMessage.style.display = 'block';
  }

  // Validate password (at least 8 characters long, including special symbols and numbers)
  if (!isValidPassword(passwordInput.value)) {
    passwordInput.classList.add('red');
    passwordErrorMessage.style.display = 'block';
  }
}

// Function to check if a string contains only alphabetical characters
function isAlphabetical(input) {
  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(input);
}

// Function to check if an email address is valid
function isValidEmail(email) {
  const pattern = /^\S+@\S+\.\S+$/;
  return pattern.test(email);
}

// Function to check if a password is valid (at least 8 characters, including special symbols and numbers)
function isValidPassword(password) {
  const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
  return pattern.test(password);
}

// Event listener for form submission
document
  .getElementById('submit-button')
  .addEventListener('click', function (e) {
    e.preventDefault();
    validateForm();
  });
