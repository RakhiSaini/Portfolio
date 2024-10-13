document.getElementById('resume-link').addEventListener('click', function (event) {
    // event.preventDefault(); // Prevent the default action

    // Open the resume in a new tab
    window.open(this.href, '_blank');

    // Download the resume
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1pEOlQ5LosfY9YfcOknuQvo2gOK9zoCrP';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// function openResume() {
//     const resumeUrl = 'https://drive.google.com/uc?export=download&id=1pEOlQ5LosfY9YfcOknuQvo2gOK9zoCrP'; // Direct download link

//     // Open the resume link in a new tab
//     window.open(resumeUrl, '_blank');

//     // Create a temporary link element to trigger the download
//     const link = document.createElement('a');
//     link.href = resumeUrl;
//     link.download = 'Your_Resume.pdf'; // Specify the name for the downloaded file
//     document.body.appendChild(link);
//     link.click(); // Trigger the download
//     document.body.removeChild(link); // Clean up the temporary link
// }


// Function to handle fade-in animations
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in, .scale-in');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Initial fade-in on load
window.addEventListener('load', fadeInElements);

// Fade-in on scroll
window.addEventListener('scroll', fadeInElements);

// Form Validation
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

form.addEventListener('submit', (e) => {
    let formIsValid = true;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    if (!nameInput.value.trim()) {
        formIsValid = false;
        nameError.style.display = 'block';
    }

    if (!emailInput.value.trim() || !emailInput.checkValidity()) {
        formIsValid = false;
        emailError.style.display = 'block';
    }

    if (!messageInput.value.trim()) {
        formIsValid = false;
        messageError.style.display = 'block';
    }

    if (!formIsValid) {
        e.preventDefault();
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});