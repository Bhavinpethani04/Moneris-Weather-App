import axios from "axios";
import { WeatherApiResponse } from "@/types";

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_WEATHER_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { Accept: "application/json" },
});

export const weatherApi = {
  getCurrentWeather: async (city: string): Promise<WeatherApiResponse> => {
    const params = {
      apikey: API_KEY,
      location: city,
      units: "metric",
    };

    try {
      const { data } = await axiosInstance.get<WeatherApiResponse>(
        "/weather/realtime",
        { params },
      );
      return data;
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || "Failed to fetch weather";
      throw new Error(message);
    }
  },
};
