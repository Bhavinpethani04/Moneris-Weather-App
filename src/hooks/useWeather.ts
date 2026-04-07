import { useWeatherStore } from "@/store/weatherStore";

export const useWeather = () => {
  const {
    getWeather,
    loading,
    error,
    currentWeather,
    markAsFavorite,
    favourites,
    removeFromFavorites,
    success,
    setSuccess,
    setError,
  } = useWeatherStore();
  return {
    getWeather,
    loading,
    error,
    currentWeather,
    markAsFavorite,
    favourites,
    removeFromFavorites,
    success,
    setSuccess,
    setError,
  };
};
