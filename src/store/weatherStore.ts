import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { WeatherApiResponse } from "@/types";
import { weatherApi } from "@/services/weatherApi";
import * as SecureStore from "expo-secure-store";

type WeatherState = {
  currentWeather: WeatherApiResponse | null;
  loading: boolean;
  error: string | null;
  success: boolean;
  favourites: string[];
};

type WeatherActions = {
  getWeather: (city: string) => Promise<void>;
  markAsFavorite: (city: string) => void;
  removeFromFavorites: (city: string) => void;
  setSuccess: (success: boolean) => void;
  setError: (error: string | null) => void;
};

export const useWeatherStore = create<WeatherState & WeatherActions>()(
  persist(
    (set, get) => ({
      currentWeather: null,
      loading: false,
      error: null,
      success: false,
      favourites: [],

      getWeather: async (city: string) => {
        set({ loading: true, error: null, success: false });

        try {
          const data = await weatherApi.getCurrentWeather(city);
          set({
            currentWeather: data,
            loading: false,
            success: true,
            error: null,
          });
        } catch (err: any) {
          set({
            loading: false,
            error: err.message || "Failed to fetch weather",
          });
        }
      },

      setSuccess: (success: boolean) => set({ success }),
      setError: (error: string | null) => set({ error }),

      markAsFavorite: (city: string) =>
        set((state) => ({
          favourites: Array.from(
            new Set([...state.favourites.map((c) => c.trim()), city.trim()]),
          ),
        })),

      removeFromFavorites: (city: string) =>
        set((state) => ({
          favourites: state.favourites.filter(
            (c) => c.toLowerCase() !== city.toLowerCase(),
          ),
        })),
    }),
    {
      // for persisting favourites and currentWeather
      name: "weather-store",
      storage: createJSONStorage(() => {
        return {
          getItem: async (name) => await SecureStore.getItemAsync(name),
          setItem: async (name, value) =>
            await SecureStore.setItemAsync(name, value),
          removeItem: async (name) => await SecureStore.deleteItemAsync(name),
        };
      }),
      partialize: (state) => ({
        currentWeather: state.currentWeather,
        favourites: state.favourites,
      }),
    },
  ),
);
