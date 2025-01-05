document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('formMessage');

    if (email && password) {
        message.textContent = 'Form submitted successfully!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
});

const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});


const modal = document.getElementById('modal');
document.getElementById('openModal').addEventListener('click', () => {
    modal.style.display = 'flex';
});
document.getElementById('closeModal').addEventListener('click', () => {
    modal.style.display = 'none';
});