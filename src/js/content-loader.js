class ContentManager {
    async loadAllContent() {
        console.log('📁 Загрузка контента...');
        // Пока просто логируем - в будущем будет загружать из JSON
        console.log('✅ Базовый контент загружен');
    }
}

window.contentManager = new ContentManager();
