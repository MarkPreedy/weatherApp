let apiKey = 'cf109d70333ba3d4ec8abecc4033afbf';

document.getElementById('search-button').addEventListener('click', handleButtonClick);
document.getElementById('location-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log("test");
        handleButtonClick();
    }
});

document.getElementById('location-input').addEventListener('focus', function() {
    this.value = '';
});


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
    const todayWeather = data.list[0];
    const todayWeatherSection = document.getElementById('today-weather');
    todayWeatherSection.innerHTML = ''; // Clear previous results

    const todayCard = document.createElement('div');
    todayCard.className = 'card mx-3 my-3 shadow';
    todayCard.style.width = '18rem';

    const todayImg = document.createElement('img');
    todayImg.className = 'card-img-top mx-auto d-flex justify-content-center align-items-center'; // Center image
    todayImg.src = `assets/images/${todayWeather.weather[0].main.toLowerCase()}.png`;
    todayImg.alt = `cartoon ${todayWeather.weather[0].main.toLowerCase()}`;
    todayImg.width = 288; // Set fixed width (18rem * 16px)
    todayImg.height = 162; // Set fixed height (adjust as needed)

    const todayCardBody = document.createElement('div');
    todayCardBody.className = 'card-body';

    const todayCardTitle = document.createElement('h5');
    todayCardTitle.className = 'card-title';
    todayCardTitle.textContent = `Today: ${todayWeather.weather[0].main}`;

    const todayCardText = document.createElement('p');
    todayCardText.className = 'card-text';
    todayCardText.innerHTML = `
        Temperature: ${todayWeather.main.temp}°C<br>
        Wind Speed: ${todayWeather.wind.speed} m/s<br>
        Humidity: ${todayWeather.main.humidity}%
    `;

    todayCardBody.appendChild(todayCardTitle);
    todayCardBody.appendChild(todayCardText);
    todayCard.appendChild(todayImg);
    todayCard.appendChild(todayCardBody);
    todayWeatherSection.appendChild(todayCard);

    const forecastSection = document.getElementById('forecast-section');
    forecastSection.innerHTML = ''; // Clear previous results

    for (let i = 1; i < 5; i++) {
        const day = data.list[i*7];
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center'; // Responsive classes

        const cardInner = document.createElement('div');
        cardInner.className = 'card mx-3 my-3 shadow';
        cardInner.style.width = '18rem';

        const img = document.createElement('img');
        img.className = 'card-img-top mx-auto d-flex justify-content-center align-items-center'; // Center image
        img.src = `assets/images/${day.weather[0].main.toLowerCase()}.png`;
        img.alt = `cartoon ${day.weather[0].main.toLowerCase()}`;
        img.width = 288; // Set fixed width (18rem * 16px)
        img.height = 162; // Set fixed height (adjust as needed)
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
        cardInner.appendChild(img);
        cardInner.appendChild(cardBody);
        card.appendChild(cardInner);
        forecastSection.appendChild(card);
    }
}
handleButtonClick();