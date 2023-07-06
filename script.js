'use strict';

// Function to validate the form inputs
function validateForm() {
  const nameInput = document.getElementById('name');
  const lastnameInput = document.getElementById('lastname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Validate name input
  if (!nameInput.value.trim()) {
    nameInput.classList.add('red');
    nameInput.nextElementSibling.style.display = 'flex';
    document.querySelector('.error-name').style.display = 'block';
  } else {
    nameInput.classList.remove('red');
    nameInput.nextElementSibling.style.display = 'none';
    document.querySelector('.error-name').style.display = 'none';
  }

  // Validate lastname input
  if (!lastnameInput.value.trim()) {
    lastnameInput.classList.add('red');
    lastnameInput.nextElementSibling.style.display = 'flex';
    document.querySelector('.error-lastname').style.display = 'block';
  } else {
    lastnameInput.classList.remove('red');
    lastnameInput.nextElementSibling.style.display = 'none';
    document.querySelector('.error-lastname').style.display = 'none';
  }

  // Validate email input
  const email = emailInput.value.trim();
  if (!email) {
    emailInput.classList.add('red');
    emailInput.nextElementSibling.style.display = 'flex';
    document.querySelector('.error-email').style.display = 'block';
  } else if (!isValidEmail(email)) {
    emailInput.classList.add('red');
    emailInput.nextElementSibling.style.display = 'flex';
    document.querySelector('.error-email').textContent =
      'Looks like this is not a valid email';
    document.querySelector('.error-email').style.display = 'block';
  } else {
    emailInput.classList.remove('red');
    emailInput.nextElementSibling.style.display = 'none';
    document.querySelector('.error-email').style.display = 'none';
  }

  // Validate password input
  if (!passwordInput.value.trim()) {
    passwordInput.classList.add('red');
    passwordInput.nextElementSibling.style.display = 'flex';
    document.querySelector('.error-password').style.display = 'block';
  } else {
    passwordInput.classList.remove('red');
    passwordInput.nextElementSibling.style.display = 'none';
    document.querySelector('.error-password').style.display = 'none';
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
