// Check if the Solana object is injected
async function checkIfWalletIsConnected() {
    try {
        const { solana } = window;
        if (solana && solana.isPhantom) {
            console.log('Phantom wallet found!');
            return solana;
        } else {
            alert('Solana object not found! Please install Phantom Wallet ���');
        }
    } catch (error) {
        console.error(error);
    }
}

// Connect to the wallet
async function connectWallet() {
    const solana = await checkIfWalletIsConnected();
    if (solana) {
        try {
            const response = await solana.connect();
            console.log('Connected with Public Key:', response.publicKey.toString());
            document.getElementById('connect-wallet').innerText = 'Wallet Connected';
            document.getElementById('connect-wallet').disabled = true;
        } catch (error) {
            console.error(error);
        }
    }
}

document.getElementById('connect-wallet').addEventListener('click', connectWallet);

// Toggle Navigation Menu on Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-active');
});

// Newsletter Form Handling
const newsletterForm = document.getElementById('newsletter-form');
const formMessage = document.getElementById('form-message');

newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        // Simulate form submission
        formMessage.style.color = '#1DB954';
        formMessage.textContent = 'Thank you for subscribing!';
        newsletterForm.reset();

        // Implement actual form submission logic here
        // e.g., send data to server using fetch or axios

    } else {
        formMessage.style.color = '#ff4d4d';
        formMessage.textContent = 'Please enter a valid email address.';
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

