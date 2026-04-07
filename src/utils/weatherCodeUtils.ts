import { WEATHER_CODE } from "@/constants/weatherCode";

export const getWeatherLabel = (code: number) => {
  return WEATHER_CODE[code] || "Unknown";
};
