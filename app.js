// Application data
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Built a shopping platform that actually processes payments (shocking, I know).",
        category: "past",
        role: "Full Stack Developer",
        duration: "6 months",
        technologies: ["React", "Node.js", "MongoDB"],
        icon: "globe",
        gradient: "from-blue-600 to-purple-600"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Because the world needed another todo app (but this one has dark mode).",
        category: "past",
        role: "Mobile Developer",
        duration: "3 months",
        technologies: ["React Native", "Firebase"],
        icon: "smartphone",
        gradient: "from-green-600 to-teal-600"
    },
    {
        id: 3,
        title: "AI Code Reviewer",
        description: "AI that judges my code better than my past self does.",
        category: "current",
        role: "Solo Developer",
        duration: "Ongoing",
        technologies: ["Python", "OpenAI", "FastAPI"],
        icon: "zap",
        gradient: "from-yellow-600 to-orange-600",
        active: true
    }
];

const techStackData = [
    {
        name: "JavaScript",
        level: "Expert",
        color: "yellow-500",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjdERjFFIi8+CjxwYXRoIGQ9Ik0yNi41IDI5LjVDMjYuNSAzMS4yIDI1IDMyIDIzIDMyQzIxIDMyIDE5LjUgMzEuMiAxOS41IDI4VjE0SDE2VjI4QzE2IDMzIDIwIDM2IDI1IDM2QzMwIDM2IDM0IDMzIDM0IDI4SDMwLjVDMzAuNSAyOS41IDI4LjUgMzEgMjYuNSAyOS41WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTI0IDI2QzI0IDI3IDIzIDI4IDIyIDI4QzIxIDI4IDIwIDI3IDIwIDI2VjE0SDE2VjI2QzE2IDMwIDIwIDMyIDI0IDMyQzI4IDMyIDMyIDMwIDMyIDI2SDE2VjIySDI4VjI2SDE2VjI0SDI0VjI2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
    },
    {
        name: "React",
        level: "Expert", 
        color: "blue-500",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9IiM2MUREREIiLz4KPGVsbGlwc2UgY3g9IjIwIiBjeT0iMjAiIHJ4PSI3IiByeT0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSIyMCIgY3k9IjIwIiByeD0iNyIgcnk9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNjAgMjAgMjApIi8+CjxlbGxpcHNlIGN4PSIyMCIgY3k9IjIwIiByeD0iNyIgcnk9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDIwIDIwKSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
    },
    {
        name: "Node.js",
        level: "Comfortable",
        color: "green-500",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDJMMzUgMTBWMzBMMjAgMzhMNSAzMFYxMEwyMCAyWiIgZmlsbD0iIzY4QTI2MyIvPgo8cGF0aCBkPSJNMjAgMTBMMzAgMTVWMjVMMjAgMzBMMTAgMjVWMTVMMjAgMTBaIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo="
    },
    {
        name: "MongoDB",
        level: "Comfortable",
        color: "green-600",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjIwIiBjeT0iMjAiIHJ4PSIxOCIgcnk9IjE4IiBmaWxsPSIjNDdBMjQ4Ii8+CjxwYXRoIGQ9Ik0yMCA4QzI2IDggMzAgMTQgMzAgMjBTMjYgMzIgMjAgMzJTMTAgMjYgMTAgMjBTMTQgOCAyMCA4WiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K"
    },
    {
        name: "Git",
        level: "Expert",
        color: "orange-500", 
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0YwNTAzMiIvPgo8cGF0aCBkPSJNMTkgMTBMMjkgMjBMMTkgMzBMMTUgMjZMMjEgMjBMMTUgMTRMMTkgMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
    },
    {
        name: "Three.js",
        level: "Familiar",
        color: "white",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAgNUwzMCAxNUwyMCAyNUwxMCAxNUwyMCA1WiIgZmlsbD0iIzAwMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yMCA1TDE1IDEwSDI1TDIwIDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
    }
];

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby_3cUZeM7RapicKpdny35Gf8WmktfWVmupNwQ0M1FR0A2yDH_D7nVn7Evz0O4X4CzElg/exec';

// Three.js variables
let scene, camera, renderer, particles, shapes = [];
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// DOM elements
let loader, mainContent, progressFill, progressPercent;
let mobileMenuBtn, mobileMenu;
let contactForm, successToast;
let projectsGrid, filterBtns;
let threeCanvas, threeFallback;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeLoader();
    initializeNavigation();
    initializeThreeJS();
    populateProjects();
    populateTechStack();
    initializeContactForm();
    initializeSocialTooltips();
    initializeLucideIcons();
    
    // Start loading simulation
    simulateLoading();
});

function initializeElements() {
    loader = document.getElementById('loader');
    mainContent = document.getElementById('main-content');
    progressFill = document.querySelector('.progress-fill');
    progressPercent = document.querySelector('.progress-percent');
    mobileMenuBtn = document.getElementById('mobile-menu-btn');
    mobileMenu = document.getElementById('mobile-menu');
    contactForm = document.getElementById('contact-form');
    successToast = document.getElementById('success-toast');
    projectsGrid = document.getElementById('projects-grid');
    filterBtns = document.querySelectorAll('.filter-btn');
    threeCanvas = document.getElementById('three-canvas');
    threeFallback = document.getElementById('three-fallback');
}

function initializeLucideIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

function initializeLoader() {
    // Animate floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.5}s`;
    });
}

function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${Math.floor(progress)}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(hideLoader, 500);
        }
    }, 200);
}

function hideLoader() {
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.add('loaded');
    }, 800);
}

function initializeNavigation() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeThreeJS() {
    try {
        if (!window.THREE) {
            showThreeFallback();
            return;
        }
        
        const container = threeCanvas.parentElement;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ 
            canvas: threeCanvas, 
            antialias: true, 
            alpha: true 
        });
        
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xfbbf24, 0.4);
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xfbbf24, 0.8, 50);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        
        // Create geometric shapes
        createGeometricShapes();
        
        // Create particle system
        createParticleSystem();
        
        // Position camera
        camera.position.z = 30;
        
        // Mouse interaction
        document.addEventListener('mousemove', onMouseMove, false);
        
        // Start animation
        animate();
        
        // Handle resize
        window.addEventListener('resize', onWindowResize, false);
        
    } catch (error) {
        console.error('Three.js initialization failed:', error);
        showThreeFallback();
    }
}

function createGeometricShapes() {
    // Cube
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xfbbf24,
        shininess: 100,
        transparent: true,
        opacity: 0.8
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-8, 4, 0);
    scene.add(cube);
    shapes.push({ mesh: cube, rotationSpeed: { x: 0.01, y: 0.02, z: 0 } });
    
    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf59e0b,
        shininess: 100,
        transparent: true,
        opacity: 0.7
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(8, -4, -5);
    scene.add(sphere);
    shapes.push({ mesh: sphere, rotationSpeed: { x: 0.02, y: 0.01, z: 0.015 } });
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xfbbf24,
        shininess: 100,
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(0, 2, -8);
    scene.add(torus);
    shapes.push({ mesh: torus, rotationSpeed: { x: 0.015, y: 0.025, z: 0.01 } });
    
    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(1.8);
    const octaMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf59e0b,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(-5, -6, 3);
    scene.add(octahedron);
    shapes.push({ mesh: octahedron, rotationSpeed: { x: 0.02, y: 0.015, z: 0.025 } });
}

function createParticleSystem() {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Position
        positions[i3] = (Math.random() - 0.5) * 100;
        positions[i3 + 1] = (Math.random() - 0.5) * 100;
        positions[i3 + 2] = (Math.random() - 0.5) * 100;
        
        // Color
        color.setHSL((Math.random() * 0.1) + 0.1, 1.0, 0.5 + Math.random() * 0.5);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
}

function onMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.05;
    mouseY = (event.clientY - windowHalfY) * 0.05;
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate shapes
    shapes.forEach(shape => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
        
        // Floating animation
        shape.mesh.position.y += Math.sin(Date.now() * 0.001 + shape.mesh.position.x * 0.01) * 0.02;
    });
    
    // Rotate particles
    if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
    }
    
    // Mouse interaction
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    if (!camera || !renderer) return;
    
    const container = threeCanvas.parentElement;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    windowHalfX = width / 2;
    windowHalfY = height / 2;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
}

function showThreeFallback() {
    threeCanvas.style.display = 'none';
    threeFallback.classList.remove('hidden');
}

function populateProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    // Initialize project filters
    initializeProjectFilters();
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category}${project.active ? ' current' : ''}`;
    card.setAttribute('data-category', project.category);
    
    const gradientClass = project.gradient.replace('from-', '').replace('to-', '').split(' ');
    const gradientStyle = `linear-gradient(135deg, var(--color-${gradientClass[0].replace('-', '-')}), var(--color-${gradientClass[1].replace('-', '-')}))`;
    
    card.innerHTML = `
        <div class="project-header" style="background: ${gradientStyle}">
            <i data-lucide="${project.icon}"></i>
        </div>
        <div class="project-body">
            <div class="project-title">
                <h3>${project.title}</h3>
                ${project.active ? '<span class="project-status">Active</span>' : ''}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-meta">
                <span>Role: ${project.role}</span> • <span>${project.duration}</span>
            </div>
            <div class="project-links">
                <a href="#" class="project-link">
                    <i data-lucide="external-link"></i>
                    ${project.category === 'current' ? 'Preview' : 'Live Demo'}
                </a>
                <a href="#" class="project-link">
                    <i data-lucide="github"></i>
                    Code
                </a>
            </div>
        </div>
    `;
    
    return card;
}

function initializeProjectFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
            e.target.classList.add('filter-btn--active');
            
            // Filter projects
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function populateTechStack() {
    const techGrid = document.getElementById('tech-grid');
    if (!techGrid) return;
    
    techGrid.innerHTML = '';
    
    techStackData.forEach(tech => {
        const techItem = createTechItem(tech);
        techGrid.appendChild(techItem);
    });
}

function createTechItem(tech) {
    const item = document.createElement('div');
    item.className = 'tech-item';
    
    const levelClass = tech.level.toLowerCase().replace(' ', '-');
    
    item.innerHTML = `
        <div class="tech-icon">
            <img src="${tech.logo}" alt="${tech.name}" class="tech-logo">
        </div>
        <h3 class="tech-name">${tech.name}</h3>
        <span class="tech-level ${levelClass}">${tech.level}</span>
    `;
    
    return item;
}

function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Check honeypot
        if (formData.get('honey')) {
            return; // Bot detected
        }
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            const response = await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                showSuccessToast();
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending form:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
    
    // Hire me button
    const hireMeBtn = document.getElementById('hire-me-btn');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Focus on the form
            setTimeout(() => {
                document.getElementById('name').focus();
            }, 500);
        });
    }
}

function showSuccessToast() {
    if (!successToast) return;
    
    successToast.classList.remove('hidden');
    
    // Hide after 5 seconds
    setTimeout(() => {
        successToast.classList.add('hidden');
    }, 5000);
}

function initializeSocialTooltips() {
    const instaBtn = document.getElementById('insta-btn');
    const instaTooltip = document.getElementById('insta-tooltip');
    const fbBtn = document.getElementById('fb-btn');
    const fbTooltip = document.getElementById('fb-tooltip');
    
    function showTooltip(btn, tooltip) {
        if (!btn || !tooltip) return;
        
        btn.addEventListener('mouseenter', () => {
            tooltip.classList.remove('hidden');
        });
        
        btn.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            tooltip.classList.toggle('hidden');
            setTimeout(() => {
                tooltip.classList.add('hidden');
            }, 3000);
        });
    }
    
    showTooltip(instaBtn, instaTooltip);
    showTooltip(fbBtn, fbTooltip);
}

// Smooth scroll behavior for older browsers
function smoothScrollTo(targetY, duration = 1000) {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    const startTime = performance.now();
    
    function step() {
        const progress = (performance.now() - startTime) / duration;
        const amount = easeInOutCubic(progress);
        window.scrollTo(0, startY + (difference * amount));
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Intersection Observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeScrollAnimations, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.getElementById('hero');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});

// Handle external links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="http"]');
    if (link && !link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Performance optimization: Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(() => {
    onWindowResize();
    
    // Update window dimensions for mouse interaction
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
}, 250));

// Error handling for Three.js
window.addEventListener('error', (e) => {
    if (e.message.includes('THREE') || e.filename.includes('three')) {
        console.warn('Three.js error detected, falling back to static display');
        showThreeFallback();
    }
});

// Lazy load optimization
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
    // Enter key triggers buttons
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
        e.target.click();
    }
});

// Initialize everything after Lucide icons are loaded
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
} else {
    // Fallback for icon initialization
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}