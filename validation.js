document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.needs-validation');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const fullName = document.getElementById('fullName');
    const terms = document.getElementById('terms');
    const submitButton = document.querySelector('button[type="submit"]');

 
    submitButton.disabled = true;

   
    password.addEventListener('input', function() {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            password.setCustomValidity('Password must include at least 8 characters, uppercase, lowercase, number, and special character.');
            password.classList.add('is-invalid');
            password.classList.remove('is-valid');
        } else {
            password.setCustomValidity('');
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
    });

  
    confirmPassword.addEventListener('input', function() {
        if (password.value.length < 8) {
            confirmPassword.setCustomValidity('Enter a valid password first.');
            confirmPassword.classList.add('is-invalid');
            confirmPassword.classList.remove('is-valid');
        } else if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match.');
            confirmPassword.classList.add('is-invalid');
            confirmPassword.classList.remove('is-valid');
        } else {
            confirmPassword.setCustomValidity('');
            confirmPassword.classList.add('is-valid');
            confirmPassword.classList.remove('is-invalid');
        }
    });


    email.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.setCustomValidity('Please enter a valid email address.');
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        } else {
            email.setCustomValidity('');
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }
    });

   
    fullName.addEventListener('input', function() {
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(fullName.value)) {
            fullName.setCustomValidity('Full name should only contain letters and spaces.');
            fullName.classList.add('is-invalid');
            fullName.classList.remove('is-valid');
        } else {
            fullName.setCustomValidity('');
            fullName.classList.add('is-valid');
            fullName.classList.remove('is-invalid');
        }
    });


    terms.addEventListener('change', function() {
        if (!terms.checked) {
            terms.setCustomValidity('You must agree to the terms.');
        } else {
            terms.setCustomValidity('');
        }
    });

   
    form.addEventListener('input', function() {
        submitButton.disabled = !form.checkValidity();
    });

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});