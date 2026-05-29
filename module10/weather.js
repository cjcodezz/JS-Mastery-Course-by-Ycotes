// Module 10: Weather App
// This file demonstrates async weather lookup logic and placeholder API data.

// Simulate a weather API call with a promise.
export async function fetchWeather(city) {
  if (!city || !city.trim()) {
    throw new Error('City name is required.');
  }

  // Simulate network delay using Promise and setTimeout.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city: city.trim(),
        temperature: 24,
        condition: 'Sunny',
        humidity: 55,
      });
    }, 600);
  });
}

// Format weather information for display.
export function formatWeather(data) {
  return `Weather in ${data.city}: ${data.temperature}°C, ${data.condition}, humidity ${data.humidity}%`;
}
