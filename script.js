function showNotification(message) {
    const notification = document.querySelector('.notification');
    notification.textContent = message;
    notification.style.right = '20px';
    setTimeout(() => {
        notification.style.right = '-300px';
    }, 3000);
}


document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        showNotification(`${productName} added to favorites!`);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for floating images
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.float-img');
    images.forEach((img, index) => {
        const speed = index % 2 === 0 ? 0.1 : 0.15;
        const yPos = window.scrollY * speed;
        img.style.transform = `translateY(${yPos}px)`;
    });
});


const specialPhrases = [
    "Fresh batch just out of the oven!",
    "Limited time offer!",
    "Today's special!",
    "Customer favorite!"
];

setInterval(() => {
    const randomPhrase = specialPhrases[Math.floor(Math.random() * specialPhrases.length)];
    showNotification(randomPhrase);
}, 10000);
