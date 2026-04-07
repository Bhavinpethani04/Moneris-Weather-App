import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { useWeather } from "@/hooks/useWeather";
import { useToast } from "@/hooks/useToast";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";

export default function SearchInput() {
  const insets = useSafeAreaInsets();
  const [text, onChangeText] = useState("");
  const { getWeather, loading, error, success, setSuccess, setError } =
    useWeather();
  const { showToast } = useToast();

  // Show toast if weather fetch is successful
  useFocusEffect(
    useCallback(() => {
      if (success) {
        showToast("Fetched weather successfully", "success");
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
  const onPressSearch = async () => {
    if (!text) {
      showToast("Please enter a city", "warning");
      return;
    }
    await getWeather(text);
    onChangeText("");
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Title */}
      <Text style={styles.title}>Weather App</Text>

      {/* Search Bar */}
      <View style={styles.searchbar}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search for a city"
          placeholderTextColor={COLORS.darkGray}
        />
        {!loading && (
          <TouchableOpacity onPress={onPressSearch}>
            <Feather name="search" size={24} color={COLORS.black} />
          </TouchableOpacity>
        )}
        {loading && <ActivityIndicator />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: "28%",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    alignSelf: "flex-start",
  },

  searchbar: {
    height: 56,
    width: "100%",
    backgroundColor: COLORS.white,
    marginTop: 24,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: COLORS.black,
  },
});
