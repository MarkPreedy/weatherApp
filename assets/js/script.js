let apiKey = 'cf109d70333ba3d4ec8abecc4033afbf';

document.getElementById('search-button').addEventListener('click', handleButtonClick);

function handleButtonClick() {
    let locationName = document.getElementById('location-input').value;

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function displayWeather(data) {
    const forecastSection = document.getElementById('forecast-section');
    forecastSection.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 5; i++) {
        const day = data.list[i];
        const card = document.createElement('div');
        card.className = 'card mx-3 my-3';
        card.style.width = '18rem';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = `assets/images/${day.weather[0].main.toLowerCase()}.png`; // Assuming you have images named after weather conditions
        img.alt = `cartoon ${day.weather[0].main.toLowerCase()}`;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `${new Date(day.dt_txt).toLocaleDateString()}: ${day.weather[0].main}`;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = `
            Temperature: ${day.main.temp}°C<br>
            Wind Speed: ${day.wind.speed} m/s<br>
            Humidity: ${day.main.humidity}%
        `;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        forecastSection.appendChild(card);
    }
}