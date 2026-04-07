import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";
import { useWeatherData } from "@/hooks/useWeatherData";
import { useWeather } from "@/hooks/useWeather";
import { useToast } from "@/hooks/useToast";
import Temperature from "@/components/Temperature";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Placeholder from "@/components/Placeholder";
import { isCityFavourite } from "@/utils";

const ICON_BADGE_SIZE = 100;

export default function WeatherCard() {
  const { weatherData } = useWeatherData();
  const { markAsFavorite, favourites } = useWeather();
  const { showToast } = useToast();

  if (!weatherData) return <Placeholder text="No weather data available" />;

  const {
    city,
    temperature,
    humidity,
    windSpeed,
    weatherLabel,
    weatherIcon,
    uvLevel,
  } = weatherData;

  const isFavourite = isCityFavourite(city, favourites);

  const onPressAddToFavorite = () => {
    markAsFavorite(city);
    showToast("Added to favorites", "success");
  };

  return (
    <View style={styles.container}>
      <View style={styles.weatherCard}>
        <View style={styles.cityLabelContainer}>
          <View style={styles.cityLabelDot}></View>
          <Text style={styles.cityLabel}>{city}</Text>
        </View>
        <View style={styles.cityTemperatureContainer}>
          <View>
            <Temperature value={temperature} />
            <Text style={styles.weatherLabel}>{weatherLabel}</Text>
          </View>
          <View>
            <View style={styles.weatherIconView}>
              <Feather
                name={weatherIcon as any}
                size={60}
                color={COLORS.weatherIconColor}
              />
            </View>
          </View>
        </View>

        <View style={styles.separatorLine}></View>

        <View style={styles.otherInfoContainer}>
          <View style={styles.otherInfoItem}>
            <Text style={styles.otherInfoLabel}>HUMIDITY</Text>
            <Text style={styles.otherInfoValue}>{humidity}%</Text>
          </View>
          <View style={styles.otherInfoItem}>
            <Text style={styles.otherInfoLabel}>WIND</Text>
            <Text style={styles.otherInfoValue}>{windSpeed} km/h</Text>
          </View>
          <View style={styles.otherInfoItem}>
            <Text style={styles.otherInfoLabel}>UV INDEX</Text>
            <Text style={styles.otherInfoValue}>{uvLevel}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addToFavoriteButton}
          onPress={() => onPressAddToFavorite()}
          disabled={isFavourite}
        >
          {!isFavourite ? (
            <>
              <Feather name="star" size={16} color={COLORS.weatherIconColor} />
              <Text style={styles.addToFavoriteButtonText}>
                Mark as Favorite
              </Text>
            </>
          ) : (
            <>
              <MaterialIcons
                name="star"
                size={18}
                color={COLORS.weatherIconColor}
              />
              <Text style={styles.addToFavoriteButtonText}>
                This city is favorited.
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    width: "90%",
    elevation: 8,
  },
  cityTemperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cityLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },
  cityLabelDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.weatherCardCityLabel,
    marginRight: 4,
  },
  cityLabel: {
    fontSize: 18,
    color: COLORS.weatherCardCityLabel,
  },
  weatherLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.weatherCardCityLabel,
  },
  weatherIconView: {
    marginTop: 20,
    marginRight: 10,
    width: ICON_BADGE_SIZE,
    height: ICON_BADGE_SIZE,
    borderRadius: 18,
    backgroundColor: COLORS.weatherIconViewBg,
    alignItems: "center",
    justifyContent: "center",
  },
  separatorLine: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.lightGray,
    marginVertical: 16,
  },
  otherInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  otherInfoItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  otherInfoLabel: {
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.weatherCardCityLabel,
  },
  otherInfoValue: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.black,
  },
  addToFavoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.weatherIconViewBg,
    borderRadius: 8,
    padding: 12,
    width: "100%",
    marginTop: 16,
    gap: 8,
  },
  addToFavoriteButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.weatherIconColor,
  },
});
