// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(600, 400);
    document.getElementById('tesla-model').appendChild(renderer.domElement);

    // Create a simplified Tesla-inspired 3D model
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00ffcc,
        wireframe: true,
        transparent: true,
        opacity: 0.7
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ffcc, 1, 100);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    camera.position.z = 30;

    // Particle system
    const particles = new THREE.Group();
    for (let i = 0; i < 200; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0x00ffcc })
        );
        particle.position.set(
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50
        );
        particles.add(particle);
    }
    scene.add(particles);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        particles.rotation.y += 0.002;
        renderer.render(scene, camera);
    }
    animate();

    // Interactive cards
    const cards = document.querySelectorAll('.innovation-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Window resize handler
    window.addEventListener('resize', () => {
        camera.aspect = 600 / 400;
        camera.updateProjectionMatrix();
        renderer.setSize(600, 400);
    });
});