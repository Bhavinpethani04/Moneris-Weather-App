import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useWeather } from "@/hooks/useWeather";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "expo-router";
import { useFocusEffect } from "expo-router";

export default function FavouriteListItem({ city }: { city: string }) {
  const {
    removeFromFavorites,
    getWeather,
    success,
    error,
    setSuccess,
    setError,
  } = useWeather();
  const { showToast } = useToast();
  const router = useRouter();

  // Remove city from favorites
  const onPressRemove = () => {
    removeFromFavorites(city);
    showToast("Removed from favorites", "success");
  };

  // Navigate to home tab if weather fetch is successful and show toast
  useFocusEffect(
    useCallback(() => {
      if (success) {
        showToast("Fetched weather successfully", "success");
        router.navigate("/(tabs)");
        setSuccess(false);
        setError(null);
      }
    }, [success]),
  );

  // Show toast if there is an error while fetching weather
  useFocusEffect(
    useCallback(() => {
      if (error) {
        showToast(error, "error");
        setSuccess(false);
        setError(null);
      }
    }, [error]),
  );

  // Fetch weather for the city
  const onPressCity = async () => {
    await getWeather(city);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => onPressCity()}>
      <Text style={styles.cityLabel}>{city}</Text>
      <TouchableOpacity onPress={() => onPressRemove()}>
        <MaterialIcons name="close" size={28} color={COLORS.error} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    width: "100%",
    backgroundColor: COLORS.white,
    marginBottom: 8,
    borderRadius: 16,
    padding: 14,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cityLabel: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "500",
  },
});
