// ===== HAMBURGER MENU TOGGLE =====
// Lấy các phần tử cần thiết
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Hàm mở/đóng menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Khi click vào nút hamburger
hamburger.addEventListener('click', toggleMenu);

// Đóng menu khi click vào một link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Đóng menu khi click ra ngoài
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== SMOOTH SCROLLING =====
// Cuộn mượt mà khi click vào các link
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

// ===== SPARKLE EFFECT =====
// Tạo hiệu ứng lấp lánh khi di chuột
document.addEventListener('mousemove', function(e) {
    // Chỉ tạo sparkle 5% thời gian để không quá nhiều
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

// Hàm tạo sparkle
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Các icon ngẫu nhiên
    const icons = ['✨', '💖', '🌸', '⭐', '💕', '🦋', '🌈'];
    sparkle.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    document.body.appendChild(sparkle);
    
    // Xóa sparkle sau 2 giây
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// ===== SCROLL ANIMATIONS =====
// Thêm animation khi scroll đến các section
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Kiểm tra khi scroll
window.addEventListener('scroll', checkScroll);

// Kiểm tra ngay khi load trang
window.addEventListener('load', checkScroll);

// ===== HOBBY CARDS CLICK EFFECT =====
// Thêm hiệu ứng khi click vào các thẻ sở thích
const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
    card.addEventListener('click', function() {
        // Tạo hiệu ứng "pulse"
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
        
        // Tạo nhiều sparkles xung quanh thẻ
        const rect = this.getBoundingClientRect();
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100;
                const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 100;
                createSparkle(x, y);
            }, i * 100);
        }
    });
});

// ===== WELCOME MESSAGE =====
// Hiển thị thông báo chào mừng khi load trang
window.addEventListener('load', () => {
    console.log('🌸 Chào mừng bạn đến với trang web của bé! 💕');
    console.log('✨ Website được tạo bởi: HTML, CSS và JavaScript');
    console.log('💖 Hãy khám phá và vui chơi nhé!');
});

// ===== INTERACTIVE AVATAR =====
// Thêm hiệu ứng khi hover vào avatar
const avatar = document.querySelector('.avatar');

if (avatar) {
    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    avatar.addEventListener('click', function() {
        // Tạo hiệu ứng vui vẻ khi click
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const rect = this.getBoundingClientRect();
                const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 150;
                const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 150;
                createSparkle(x, y);
            }, i * 50);
        }
    });
}

// ===== CHANGE THEME (BONUS FEATURE) =====
// Thêm tính năng thay đổi màu nền (tùy chọn)
let themeIndex = 0;
const themes = [
    { primary: '#ff9ec8', secondary: '#ffb6d9', bg: '#ffeef8' },
    { primary: '#b19cd9', secondary: '#dda0dd', bg: '#f0e6ff' },
    { primary: '#87ceeb', secondary: '#b0e0e6', bg: '#e6f7ff' }
];

// Bạn có thể thêm một nút để thay đổi theme nếu muốn
function changeTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    const theme = themes[themeIndex];
    
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--bg-color', theme.bg);
}

// ===== GREETING BASED ON TIME =====
// Hiển thị lời chào theo thời gian trong ngày
function updateGreeting() {
    const hour = new Date().getHours();
    const subtitle = document.querySelector('.subtitle');
    
    if (subtitle) {
        let greeting = '';
        if (hour < 12) {
            greeting = '🌅 Chào buổi sáng! Chúc bạn một ngày tuyệt vời! ✨';
        } else if (hour < 18) {
            greeting = '☀️ Chào buổi chiều! Hy vọng bạn đang vui vẻ! ✨';
        } else {
            greeting = '🌙 Chào buổi tối! Chúc bạn có buổi tối ấm áp! ✨';
        }
        
        // Không thay đổi subtitle gốc, chỉ log ra console
        console.log(greeting);
    }
}

// Gọi hàm khi trang load
updateGreeting();

// ===== KEYBOARD SHORTCUTS =====
// Thêm phím tắt cho người dùng
document.addEventListener('keydown', (e) => {
    // Nhấn ESC để đóng menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Nhấn M để toggle menu
    if (e.key === 'm' || e.key === 'M') {
        toggleMenu();
    }
});

console.log('💡 Mẹo: Nhấn phím "M" để mở/đóng menu, nhấn "ESC" để đóng menu!');