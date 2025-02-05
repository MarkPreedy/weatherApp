# Rain-er-No?

## User Stories

## The Must Haves

**User Story:**
As a user, I want the website to be visually appealing and easy to navigate, so that I can quickly find the information I need.

**Acceptance Criteria:**
- The website has a clean and modern design.
- The website has a clear layout with distinct sections for the search tool and the forecast produced.

**Tasks:**
- Design the website layout with distinct sections for the search tool and the forecast produced.
- Apply CSS styles to create a clean and modern design.
- Ensure the website is easy to navigate.


**User Story:**
As a user, I want to see a 5-day weather forecast for my location, so that I can plan my activities accordingly.

**Acceptance Criteria:**
- The website displays the weather conditions for the next 5 days (including the current day) for the location searched.

**Tasks:**
- Set up the structure for displaying the 5-day forecast through a combination of HTML and JavaScript.
- Fetch 5-day weather forecast data from a weather API.
- Ensure the API functions to display the weather conditions for the next 5 days on the website.


**User Story:**
As a user I want the website to display accurate information so that I know the weather updates provided are reliable and can therefore inform my decision making for the day ahead.

**Acceptance Criteria:**
- Ensure the weather forecast displayed following the location search function is accurate and reliable.

**Tasks:**
- Ensure the weather data fetched from the API is accurate and up-to-date.
- Perform due diligence on the API to ensure the chosen API sources information from a credible source.


**User Story:**
As a user I want the website to load quickly, so that I can rely on the website providing me with information on the weather quickly and conveniently to fit into my daily life.

**Acceptance Criteria:**
- The website loads in under 3 seconds, as well as search results loading in under 3 seconds.

**Tasks:**
- Optimize code structure and file sizes to ensure the page loads within the required timeframe.
- Optimize code structure and file sizes to ensure the search function loads the weather forecast data within the required timeframe.
- Carry out testing on each loading time to ensure both functions meet the acceptance criteria.


**User Story:**
As a user, I want to be able to search for any location, so that I can know the current weather conditions wherever I choose.

**Acceptance Criteria:**
- The website allows a user to search any location they choose and returns the current weather conditions for that location.

**Tasks:**
- Set up the HTML structure for a search bar.
- Link the website with an API to connect the search bar on the website with fetching the current weather data from a weather API.
- Display the fetched weather conditions on the website.


**User Story:**
As a user who predominantly uses their mobile, I want the website to be responsive and work well on both desktop and mobile devices, so that I can access it from anywhere.

**Acceptance Criteria:**
- The website is fully responsive and adjusts to different screen sizes.
- The website is functional and easy to use on both desktop and mobile devices.

**Tasks:**
- Implement responsive design through a combination of CSS, Bootstrap and JavaScript.
- Test the website on different device sizes to ensure functionality and ease of use.


## The Should Haves

**User Story:**
As a potential user I would like to be able to see various weather statistics for the day so that I can understand the weather in greater detail to enable me to dress accordingly.

**Acceptance Criteria:**
- When fetching the weather data from the API, ensure various types of data are displayed such as wind speed, temperature, etc., not just the overall weather.

**Tasks:**
- Select an API which will provide various data for the weather of the day.
- Ensure the various data types load correctly into the site when called upon.**


## The Could Haves

**User Story:**
As a user, I want the website to automatically detect my location, so that I don't have to manually enter it.

**Acceptance Criteria:**
- The website uses geolocation to detect the user's location.
- The website fetches and displays weather data based on the detected location.
- The website asks the user permission to share their current location.

**Tasks:**
- Implement geolocation to detect the user's location upon the user granting permission to access the data.
- Use the detected location to fetch weather data from a weather API.
- Display the fetched weather data based on the detected location.


**User Story:**
As a user I would like to have access to an interactive map to select locations.

**Acceptance Criteria:**
- An interactive Google maps section has been integrated into the website.
- The Google map has a default location of Cornwall.
- When a location is selected on the map it inputs the location into the weather search bar for the user.

**Tasks:**
- Embed API map of Cornwall through Google maps to use on the web page.
- Build Javascript which links the map selection to generating an automatic input into the search bar.


**User Story:**
As a user I want to be able to find the day's weather so that I can make an informed choice on what to wear out for the day.

**Acceptance Criteria:**
- What to wear section allows the user to search for any location and provides information on the current weather.
- What to wear section also responds fluidly with a different suggestion based on the current weather information provided for the selected location.

**Tasks:**
- Add HTML structure to create a new section on the web page.
- Update links within the navbar to allow a page shortcut to the What to wear section.
- Add a search bar for any location and link to the API to provide the current weather.
- Use JavaScript to produce a clothing suggestion to the user which is based on the current weather conditions in the location they've searched.




# The WireFrame for the look of the website
Simple layout with easy to input location and a todays weather and a further 4 day forecast mainly for Cornish users hence the Name chosen as Rain-er-no?

### Mobile Wireframe MVP
![MVP Wireframe - Mobile Devices](https://github.com/user-attachments/assets/2de725fc-0ea7-41a6-848d-60aafc75ebfe)

### Tablet Wireframe MVP
![MVP Wireframe - Tablet Devices](https://github.com/user-attachments/assets/f78ee4a3-c085-45cf-93f0-e697d03eef7b)

### Desktop Wireframe MVP
![MVP Wireframe - Desktop Devices](https://github.com/user-attachments/assets/c28df94c-dd82-4525-8cbf-1b4081df02b0)

### Extended Mobile Wireframe
![Extended Wireframe - Mobile Devices](https://github.com/user-attachments/assets/fc42d016-09ea-4201-8079-7509875cfbbe)

### Extended Tablet Wireframe
![Extended Wireframe - Tablet Devices](https://github.com/user-attachments/assets/82513157-4116-4d69-948a-fca5a7cfec23)

### Extended Desktop Wireframe
![Extended Wireframe - Desktop Devices](https://github.com/user-attachments/assets/7b40e60f-b780-479c-b961-53a4026d3123)


# The background image is used to give a cornish vibe

![The cornish coastal vibe](assets/images/hero-image.jpg)
