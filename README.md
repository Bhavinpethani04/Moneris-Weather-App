## Get started

1. Install dependencies
   npm install

2. run the app
   npm run ios //for ios
   npm run android //for android

3. Add environment variables
   - EXPO_PUBLIC_WEATHER_API_KEY=<your-api-key> (There is multiple free keys available in .env file use any of them)
   - EXPO_PUBLIC_WEATHER_API_URL=https://api.tomorrow.io/v4

4. Search for a city and add it to favorites
5. Navigate to favourites tab and see the city you added
6. Click on the city and see the weather data
7. Remove the city from favorites

Architecture used:
   - have used zustand for state management (lightweight and easy to use, faster than redux)
   - Expo router for navigation
   - Expo secure store for persisting favourites and currentWeather
   - Axios for making API calls
   - Expo vector icons for icons
   - Hooks for better code organization
   - Typescript for type safety
   - Expo tabs for tab navigation
