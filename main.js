// Control Systems Mastery - Main JavaScript File

// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
let videoData = [];
let filteredVideos = [];

// Configuration
const CONFIG = {
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
    // YOUTUBE_API_KEY removed - No longer needed! All videos data is hardcoded
    PLAYLIST_ID: 'PLrZbkNpNVSww_NDEWivJGMEekY40cUpJg',
    FORMSPREE_ID: 'xnnlqyja',
    FIREBASE_CONFIG: {
        apiKey: "YOUR_FIREBASE_API_KEY_HERE",
        authDomain: "control-systems-34707.firebaseapp.com",
        projectId: "control-systems-34707",
        storageBucket: "control-systems-34707.appspot.com",
        messagingSenderId: "200257577701",
        appId: "1:200257577201:web:YOUR_APP_ID"
    }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializePageSpecificFeatures();
    initializeAnimations();
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggle();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggle();
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Navigation
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Page-specific initialization
function initializePageSpecificFeatures() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'videos.html':
            initializeVideosPage();
            break;
        case 'assistant.html':
            initializeAssistantPage();
            break;
        case 'about.html':
            initializeAboutPage();
            break;
        case 'resources.html':
            initializeResourcesPage();
            break;
        case 'contact.html':
            initializeContactPage();
            break;
    }
}

// Homepage initialization
function initializeHomePage() {
    initializeHeroAnimations();
    initializeStatsCounter();
    initializeFeaturedTopics();
    initializeNewsletterForm();
}

// Hero animations
function initializeHeroAnimations() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    
    if (heroTitle) {
        // Typewriter effect for hero title
        new Typed('#hero-title', {
            strings: ['Master Control Systems Engineering', 'Learn with AI Assistance', '61+ Expert Video Tutorials'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Animated circuit pattern
    createCircuitAnimation();
}

// Circuit animation
function createCircuitAnimation() {
    const canvas = document.getElementById('circuit-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = currentTheme === 'dark' ? '#06B6D4' : '#3B82F6';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Statistics counter
function initializeStatsCounter() {
    const stats = [
        { id: 'video-count', target: 61, suffix: '+' },
        { id: 'topic-count', target: 15, suffix: '+' },
        { id: 'student-count', target: 1000, suffix: '+' },
        { id: 'hour-count', target: 15, suffix: '+' }
    ];
    
    stats.forEach(stat => {
        const element = document.getElementById(stat.id);
        if (element) {
            animateCounter(element, stat.target, stat.suffix);
        }
    });
}

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 20);
}

// Featured topics carousel
function initializeFeaturedTopics() {
    const topics = [
        'Laplace Transforms', 'Transfer Functions', 'Differential Equations',
        'PID Controllers', 'State-Space Analysis', 'Frequency Response',
        'Stability Analysis', 'Root Locus'
    ];
    
    const container = document.getElementById('topics-carousel');
    if (container) {
        topics.forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.className = 'topic-card bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300';
            topicElement.textContent = topic;
            container.appendChild(topicElement);
        });
    }
}

// Newsletter form
function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            submitNewsletter(email);
        });
    }
}

function submitNewsletter(email) {
    // Store in localStorage for demo
    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    subscribers.push({ email, date: new Date().toISOString() });
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    
    showNotification('Thank you for subscribing! You will receive updates about new content.', 'success');
}

// Videos page initialization
function initializeVideosPage() {
    loadYouTubeVideos();
    initializeVideoSearch();
    initializeVideoFilters();
}

// Load YouTube videos
async function loadYouTubeVideos() {
    try {
        // For demo purposes, using hardcoded video data
        // In production, this would fetch from YouTube API
        videoData = [
            {
                id: '7MzlIX4JhXA',
                title: 'Solving Vout for unit ramp input using transfer functions',
                description: 'Learn to solve Vout for unit ramp input using transfer functions in s-domain, partial fractions, and inverse Laplace transforms.',
                duration: '12:34',
                views: '1.2K',
                uploadDate: '2024-01-15',
                topic: 'Transfer Functions',
                difficulty: 'Intermediate'
            },
            {
                id: 'l_a7eL0lR4g',
                title: 'Vout for impulse input - Laplace transforms',
                description: 'Covering Vout for impulse input, checking Laplace tables, and partial fractions.',
                duration: '10:45',
                views: '987',
                uploadDate: '2024-01-12',
                topic: 'Laplace Transforms',
                difficulty: 'Beginner'
            },
            {
                id: '9M4I2G12XyY',
                title: 'First-order differential equation for R-L circuit',
                description: 'Solving first-order differential equation for R-L circuit with DC source.',
                duration: '15:20',
                views: '2.1K',
                uploadDate: '2024-01-10',
                topic: 'Differential Equations',
                difficulty: 'Intermediate'
            }
            // Add more videos as needed
        ];
        
        filteredVideos = [...videoData];
        renderVideoGrid();
        
    } catch (error) {
        console.error('Error loading videos:', error);
        showNotification('Error loading videos. Please try again later.', 'error');
    }
}

function renderVideoGrid() {
    const container = document.getElementById('video-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    filteredVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        container.appendChild(videoCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer';
    
    card.innerHTML = `
        <div class="relative">
            <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" 
                 alt="${video.title}" 
                 class="w-full h-48 object-cover">
            <div class="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                ${video.duration}
            </div>
        </div>
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2 line-clamp-2">${video.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">${video.description}</p>
            <div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>${video.views} views</span>
                <span>${video.uploadDate}</span>
            </div>
            <div class="flex gap-2 mt-3">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    ${video.topic}
                </span>
                <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    ${video.difficulty}
                </span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openVideoModal(video));
    
    return card;
}

function openVideoModal(video) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
    
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-full overflow-y-auto">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 class="text-xl font-bold">${video.title}</h2>
                <button class="close-modal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="p-4">
                <div class="aspect-video mb-4">
                    <iframe 
                        src="https://www.youtube.com/embed/${video.id}?autoplay=1" 
                        class="w-full h-full rounded-lg"
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-bold mb-2">Description</h3>
                        <p class="text-gray-600 dark:text-gray-300">${video.description}</p>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Video Info</h3>
                        <div class="space-y-2 text-sm">
                            <div><strong>Duration:</strong> ${video.duration}</div>
                            <div><strong>Views:</strong> ${video.views}</div>
                            <div><strong>Upload Date:</strong> ${video.uploadDate}</div>
                            <div><strong>Topic:</strong> ${video.topic}</div>
                            <div><strong>Difficulty:</strong> ${video.difficulty}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Video search and filters
function initializeVideoSearch() {
    const searchInput = document.getElementById('video-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            filterVideos(query);
        });
    }
}

function initializeVideoFilters() {
    const topicFilter = document.getElementById('topic-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    
    if (topicFilter) {
        topicFilter.addEventListener('change', applyFilters);
    }
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', applyFilters);
    }
}

function filterVideos(query) {
    filteredVideos = videoData.filter(video => 
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.topic.toLowerCase().includes(query)
    );
    renderVideoGrid();
}

function applyFilters() {
    const topicFilter = document.getElementById('topic-filter')?.value || 'all';
    const difficultyFilter = document.getElementById('difficulty-filter')?.value || 'all';
    
    filteredVideos = videoData.filter(video => {
        const matchesTopic = topicFilter === 'all' || video.topic === topicFilter;
        const matchesDifficulty = difficultyFilter === 'all' || video.difficulty === difficultyFilter;
        return matchesTopic && matchesDifficulty;
    });
    
    renderVideoGrid();
}

// AI Assistant initialization
function initializeAssistantPage() {
    initializeChatbot();
    initializeImageUpload();
}

// Chatbot functionality
function initializeChatbot() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');
    
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Load chat history
    loadChatHistory();
}

async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        const response = await getAIResponse(message);
        hideTypingIndicator();
        addChatMessage(response, 'ai');
    } catch (error) {
        hideTypingIndicator();
        addChatMessage('Sorry, I encountered an error. Please try again.', 'ai');
        console.error('AI Response Error:', error);
    }
}

async function getAIResponse(message) {
    // For demo purposes, using predefined responses
    // In production, this would call the Gemini API
    const responses = {
        'hello': 'Hello! I\'m your AI assistant for Control Systems Engineering. How can I help you today?',
        'transfer function': 'A transfer function is a mathematical representation of the relationship between the input and output of a linear time-invariant system. It\'s typically expressed as a ratio of polynomials in the Laplace domain.',
        'laplace transform': 'The Laplace transform is an integral transform that converts a function of a real variable to a function of a complex variable. It\'s widely used in control systems to solve differential equations.',
        'pid controller': 'A PID controller is a control loop feedback mechanism that calculates an error value as the difference between a desired setpoint and a measured process variable. It has three components: Proportional, Integral, and Derivative.',
        'stability': 'System stability refers to the ability of a system to return to equilibrium after being disturbed. A system is stable if all its poles are in the left half of the complex plane.',
        'default': 'That\'s an interesting question about control systems! I\'m still learning, but I can help you with topics like transfer functions, Laplace transforms, PID controllers, and system stability. What specific topic would you like to explore?'
    };
    
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return responses.default;
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender} mb-4`;
    
    const messageClass = sender === 'user' 
        ? 'bg-blue-500 text-white ml-auto' 
        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    
    messageElement.innerHTML = `
        <div class="flex ${sender === 'user' ? 'justify-end' : 'justify-start'}">
            <div class="max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${messageClass}">
                <p class="text-sm">${message}</p>
                <span class="text-xs opacity-75">${new Date().toLocaleTimeString()}</span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Save to chat history
    chatHistory.push({ message, sender, timestamp: new Date().toISOString() });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const typingElement = document.createElement('div');
    typingElement.id = 'typing-indicator';
    typingElement.className = 'chat-message ai mb-4';
    typingElement.innerHTML = `
        <div class="flex justify-start">
            <div class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                    <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                </div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function loadChatHistory() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages || chatHistory.length === 0) return;
    
    chatHistory.forEach(chat => {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${chat.sender} mb-4`;
        
        const messageClass = chat.sender === 'user' 
            ? 'bg-blue-500 text-white ml-auto' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
        
        messageElement.innerHTML = `
            <div class="flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${messageClass}">
                    <p class="text-sm">${chat.message}</p>
                    <span class="text-xs opacity-75">${new Date(chat.timestamp).toLocaleTimeString()}</span>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(messageElement);
    });
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Image upload functionality
function initializeImageUpload() {
    const imageUpload = document.getElementById('image-upload');
    const uploadButton = document.getElementById('upload-image-btn');
    
    if (uploadButton && imageUpload) {
        uploadButton.addEventListener('click', () => imageUpload.click());
        imageUpload.addEventListener('change', handleImageUpload);
    }
}

async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showNotification('Please select an image file.', 'error');
        return;
    }
    
    try {
        const imageUrl = URL.createObjectURL(file);
        addChatMessage(`Image uploaded: ${file.name}`, 'user');
        
        // Simulate AI image analysis
        setTimeout(() => {
            addChatMessage('I can see you uploaded an image. For circuit diagrams, I can help analyze the components and suggest transfer functions. For equations, I can help solve them step by step. What would you like me to help you with?', 'ai');
        }, 1000);
        
    } catch (error) {
        showNotification('Error uploading image. Please try again.', 'error');
        console.error('Image Upload Error:', error);
    }
}

// About page initialization
function initializeAboutPage() {
    // Add any about page specific functionality here
}

// Resources page initialization
function initializeResourcesPage() {
    initializeResourceDownloads();
}

function initializeResourceDownloads() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const resourceName = this.getAttribute('data-resource');
            showNotification(`Downloading ${resourceName}...`, 'info');
            
            // Simulate download
            setTimeout(() => {
                showNotification(`${resourceName} downloaded successfully!`, 'success');
            }, 1500);
        });
    });
}

// Contact page initialization
function initializeContactPage() {
    initializeContactForm();
}

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

async function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    try {
        showNotification('Sending your message...', 'info');
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Message sent successfully! We will get back to you soon.', 'success');
            e.target.reset();
        }, 1500);
        
    } catch (error) {
        showNotification('Error sending message. Please try again later.', 'error');
        console.error('Contact Form Error:', error);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${getNotificationClass(type)}`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${getNotificationIcon(type)} mr-2"></i>
            <span class="text-sm">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function getNotificationClass(type) {
    const classes = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-white',
        info: 'bg-blue-500 text-white'
    };
    return classes[type] || classes.info;
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Animation initialization
function initializeAnimations() {
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Window resize handler
window.addEventListener('resize', function() {
    const canvas = document.getElementById('circuit-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Export functions for global access
window.ControlSystemsMastery = {
    toggleTheme,
    sendMessage,
    showNotification
};