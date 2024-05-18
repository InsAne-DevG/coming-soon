var typed = new Typed('#element', {
    strings: ['<h3>Coming Soon...</h3>'],
    typeSpeed: 50,
    backSpeed: 50,
});

document.querySelector('.form-wrapper').addEventListener('submit', function (event) {
    let isValid = true;

    // Clear previous errors
    document.getElementById('full_name_error').textContent = '';
    document.getElementById('email_error').textContent = '';
    document.getElementById('phone_number_error').textContent = '';

    // Full Name validation
    const fullName = document.querySelector('input[name="full_name"]').value.trim();
    if (fullName === '') {
        document.getElementById('full_name_error').textContent = 'Full Name is required';
        isValid = false;
    }

    // Email validation
    const email = document.querySelector('input[name="email"]').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email_error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email_error').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Phone Number validation
    const phoneNumber = document.querySelector('input[name="phone_number"]').value.trim();
    const phoneNumberPattern = /^\d{10}$/;
    if (phoneNumber === '' || !phoneNumberPattern.test(phoneNumber)) {
        document.getElementById('phone_number_error').textContent = 'Please enter a valid 10 digit phone number';
        isValid = false;
    }

    // Message validation
    const message = document.querySelector('textarea[name="message"]').value.trim();
    if (message === '') {
        document.getElementById('message_error').textContent = 'Message is required';
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});

// Phone number input restriction
document.querySelector('input[name="phone_number"]').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^\d]/g, '');
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const success = urlParams.get('success');
if (success === 'false') {
    document.querySelector('.error-message').classList.remove('d-none');
} else if (success === 'true') {
    document.querySelector('.success-message').classList.remove('d-none');
}