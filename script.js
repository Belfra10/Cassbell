// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation Example [cite: 26]
const bookingForm = document.querySelector('.booking-form');
if(bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        const name = this.querySelector('input[name="name"]').value;
        if(name.length < 3) {
            e.preventDefault();
            alert("Please enter a valid name.");
        } else {
            alert("Thank you, " + name + "! Your email client will now open to send your request.");
        }
    });
}

// Gallery Lightbox Placeholder Logic
const images = document.querySelectorAll('.gallery-item img');
images.forEach(img => {
    img.addEventListener('click', () => {
        // You can integrate a library like Luminous or GLightbox here [cite: 26]
        console.log("Image clicked: " + img.src);
    });
});