class WeatherSimulator {
    constructor() {
        this.weatherData = [];
        this.filteredData = [];
        this.init();
    }

    async init() {
        document.getElementById('loadData').addEventListener('click', () => this.loadWeatherData());
        document.getElementById('tempFilter').addEventListener('input', (e) => this.filterData());
        document.getElementById('humidityFilter').addEventListener('input', (e) => this.filterData());
        document.getElementById('citySelect').addEventListener('change', (e) => this.displayCityWeather(e.target.value));

        const tempFilter = document.getElementById('tempFilter');
        tempFilter.addEventListener('input', () => document.getElementById('tempValue').textContent = `${tempFilter.value}°C`);
        
        const humidityFilter = document.getElementById('humidityFilter');
        humidityFilter.addEventListener('input', () => document.getElementById('humidityValue').textContent = `${humidityFilter.value}%`);
        
        this.loadFromLocalStorage();
    }

    async loadWeatherData() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            this.weatherData = await response.json();
            this.populateCitySelect();
            this.filterData();
            this.saveToLocalStorage();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    populateCitySelect() {
        const citySelect = document.getElementById('citySelect');
        citySelect.innerHTML = '<option value="">Seleccione una Ciudad</option>';
        this.weatherData.forEach(cityWeather => {
            const option = document.createElement('option');
            option.value = cityWeather.city;
            option.textContent = cityWeather.city;
            citySelect.appendChild(option);
        });
    }

    filterData() {
        const tempValue = document.getElementById('tempFilter').value;
        const humidityValue = document.getElementById('humidityFilter').value;
        this.filteredData = this.weatherData.filter(cityWeather => cityWeather.temperature <= tempValue && cityWeather.humidity <= humidityValue);
        this.displayWeatherData();
        this.createWeatherChart();
    }

    displayWeatherData() {
        const weatherDataDiv = document.getElementById('weatherData');
        weatherDataDiv.innerHTML = '';
        this.filteredData.forEach(cityWeather => {
            const cityDiv = document.createElement('div');
            cityDiv.classList.add('cityWeather');
            cityDiv.innerHTML = `<h3>${cityWeather.city}</h3>
                                 <p>Temperatura: ${cityWeather.temperature}°C</p>
                                 <p>Humedad: ${cityWeather.humidity}%</p>`;
            weatherDataDiv.appendChild(cityDiv);
            anime({
                targets: cityDiv,
                opacity: [0, 1],
                translateY: [-10, 0],
                duration: 800,
                easing: 'easeOutExpo'
            });
        });
    }

    displayCityWeather(city) {
        const cityWeather = this.weatherData.find(weather => weather.city === city);
        if (cityWeather) {
            alert(`Ciudad: ${cityWeather.city}\nTemperatura: ${cityWeather.temperature}°C\nHumedad: ${cityWeather.humidity}%`);
        }
    }

    createWeatherChart() {
        const ctx = document.getElementById('weatherChart').getContext('2d');
        const temperatures = this.filteredData.map(cityWeather => cityWeather.temperature);
        const humidities = this.filteredData.map(cityWeather => cityWeather.humidity);
        const labels = this.filteredData.map(cityWeather => cityWeather.city);

        if (this.chart) {
            this.chart.destroy();
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Temperatura (°C)',
                        data: temperatures,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Humedad (%)',
                        data: humidities,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    saveToLocalStorage() {
        localStorage.setItem('weatherData', JSON.stringify(this.weatherData));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            this.weatherData = JSON.parse(data);
            this.populateCitySelect();
            this.filterData();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WeatherSimulator();
});
