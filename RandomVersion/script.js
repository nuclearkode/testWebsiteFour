document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect
    document.body.classList.add('loaded');

    // Number Counter Animation
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

    // Project Modal Functionality
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            const modal = document.getElementById(`${projectId}Modal`);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.style.display = 'none';
        });
    });

    // Contact Form Submission (Static Alert)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('contactEmail').value;
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            alert('Message sent successfully! We’ll get back to you soon.');
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Project Filtering
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projectCards = document.querySelectorAll('.project-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Dynamic Star Field
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

    // Create Particles (Reduced count)
    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (particlesContainer && document.body.classList.contains('home')) {
            for (let i = 0; i < 15; i++) { // Reduced from 30
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

    // Randomize Moving Objects Spawn
    if (document.body.classList.contains('home')) {
        const objects = document.querySelectorAll('.moving-objects img');
        objects.forEach(object => {
            object.style.animationDelay = `${Math.random() * 5}s`;
        });
    }

    // AI Bot Chat Modal with Predefined Responses
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
                const question = chatInput.value.toLowerCase().trim();
                let response;
                if (question.includes('project')) {
                    response = 'AI: Our projects include Mars Rover AI, Quantum Encryption, Hyperloop Control, Martian Farming, and more. Which one interests you?';
                } else if (question.includes('contact')) {
                    response = 'AI: Contact us via email at info@quantumportfolio.com or through the Contact page.';
                } else {
                    response = 'AI: I\'m here to assist with Quantum Portfolio queries. What would you like to know?';
                }
                const responseDiv = document.createElement('div');
                responseDiv.textContent = response;
                responseDiv.style.color = '#00ffcc';
                responseDiv.style.marginTop = '10px';
                chatResponses.appendChild(responseDiv);
                chatInput.value = '';
                chatResponses.scrollTop = chatResponses.scrollHeight;
            });
        }
    }

    // Responsive Menu
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Dynamic active class for navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});