import { useMemo } from "react";
import { useWeatherStore } from "@/store/weatherStore";
import {
  extractCityName,
  getWeatherLabel,
  getWeatherIcon,
  getUVLevel,
} from "@/utils";

export function useWeatherData() {
  const { currentWeather } = useWeatherStore();

  const weatherData = useMemo(() => {
    if (!currentWeather) return null;

    const weatherCode = currentWeather.data.values.weatherCode;

    return {
      city: extractCityName(currentWeather.location.name).toUpperCase(),
      temperature: currentWeather.data.values.temperature,
      humidity: currentWeather.data.values.humidity,
      windSpeed: currentWeather.data.values.windSpeed,
      weatherLabel: getWeatherLabel(weatherCode),
      weatherIcon: getWeatherIcon(weatherCode),
      uvLevel: getUVLevel(currentWeather.data.values.uvIndex),
    };
  }, [currentWeather]);

  return { weatherData };
}
