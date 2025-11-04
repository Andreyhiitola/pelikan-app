class WeatherService {
    async getWeather() {
        // Заглушка - всегда возвращает данные для Алаколя
        return {
            temperature: 28,
            description: "Солнечно",
            waterTemperature: 24,
            source: "Локальные данные",
            lastUpdated: new Date().toISOString()
        };
    }

    getWeatherIcon(description) {
        const desc = description.toLowerCase();
        if (desc.includes("ясно") || desc.includes("солнечно")) return "fas fa-sun";
        if (desc.includes("облач") || desc.includes("пасмурно")) return "fas fa-cloud";
        if (desc.includes("дождь") || desc.includes("морось")) return "fas fa-cloud-rain";
        return "fas fa-cloud";
    }
}

window.weatherService = new WeatherService();
