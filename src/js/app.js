// Главный файл приложения
class PelikanApp {
    constructor() {
        this.isInitialized = false;
    }

    async init() {
        if (this.isInitialized) return;
        
        console.log('🚀 Инициализация приложения Пеликан...');
        
        try {
            // Настройка обработчиков событий
            this.setupEventHandlers();
            
            // Запуск автообновлений
            this.startAutoUpdates();
            
            this.isInitialized = true;
            console.log('✅ Приложение успешно инициализировано');
            
        } catch (error) {
            console.error('❌ Ошибка инициализации приложения:', error);
        }
    }

    setupEventHandlers() {
        // Обновление времени
        this.updateTime();
        setInterval(() => this.updateTime(), 60000);
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }

    showSection(section) {
        const messages = {
            'booking': 'Система онлайн-бронирования',
            'food': 'Меню и заказ еды',
            'services': 'Дополнительные услуги',
            'map': 'Интерактивная карта базы',
            'room': 'Управление номером',
            'reception': 'Связь с ресепшеном',
            'animation': 'Расписание анимации',
            'beach': 'Пляжные услуги',
            'gallery': 'Фотогалерея',
            'admin': 'Обращение к администрации',
            'offers': 'Специальные предложения',
            'explore': 'Исследовать базу отдыха',
            'profile': 'Личный кабинет'
        };
        
        if (messages[section]) {
            this.showNotification(`${messages[section]} будет доступно в следующем обновлении`);
        }
    }

    handleNavigation(navItem) {
        // Снимаем активный класс со всех элементов
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Добавляем активный класс текущему элементу
        navItem.classList.add('active');
    }

    startAutoUpdates() {
        // Автообновление времени каждую минуту
        setInterval(() => this.updateTime(), 60000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            'info': 'fas fa-info-circle',
            'success': 'fas fa-check-circle',
            'warning': 'fas fa-exclamation-triangle',
            'error': 'fas fa-exclamation-circle'
        };
        
        notification.innerHTML = `
            <i class="${icons[type] || icons.info}"></i>
            <span>${message}</span>
        `;
        
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'error' ? 'var(--accent)' : 'var(--secondary)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '10px',
            zIndex: '10000',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '300px'
        });
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Создаем и инициализируем приложение
const pelikanApp = new PelikanApp();
