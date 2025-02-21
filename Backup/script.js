document.addEventListener('DOMContentLoaded', () => {
    // Existing Number Counter Animation (Retained)
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const speed = 200;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Existing Project Card Hover Effects (Retained)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.querySelector('.project-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Project details coming soon!');
        });
    });

    // Existing Contact Form Submission (Retained)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully! We’ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Existing Dynamic Star Field (Retained)
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = `${Math.random() * 2}px`;
            star.style.height = star.style.width;
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
            starsContainer.appendChild(star);
        }
    }

    // New: Create Particles for Home Page
    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (particlesContainer && document.body.classList.contains('home')) {
            for (let i = 0; i < 30; i++) { // Limited for performance
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particlesContainer.appendChild(particle);
            }
        }
    }
    createParticles();

    // New: AI Bot Chat Modal for About Page
    if (document.body.classList.contains('about')) {
        const aiBot = document.getElementById('aiBot');
        const chatModal = document.getElementById('chatModal');
        const closeModal = document.getElementById('closeModal');
        const chatForm = document.getElementById('chatForm');
        const chatInput = document.getElementById('chatInput');
        const chatResponses = document.getElementById('chatResponses');

        if (aiBot && chatModal && closeModal && chatForm) {
            aiBot.addEventListener('click', () => {
                chatModal.style.display = 'block';
            });
            closeModal.addEventListener('click', () => {
                chatModal.style.display = 'none';
            });
            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const question = chatInput.value.trim();
                if (question) {
                    const response = `AI: I'm here to help with questions about Quantum Portfolio's innovations, projects, and vision. You asked: "${question}" – How can I assist further?`;
                    const responseDiv = document.createElement('div');
                    responseDiv.textContent = response;
                    responseDiv.style.color = '#00ffcc';
                    responseDiv.style.marginTop = '10px';
                    chatResponses.appendChild(responseDiv);
                    chatInput.value = '';
                    chatResponses.scrollTop = chatResponses.scrollHeight; // Auto-scroll to latest response
                }
            });
        }
    }
});