import { View, Text, StyleSheet } from "react-native";
import { SearchInput } from "@/components";
import { WeatherCard } from "@/components";
import { COLORS } from "@/constants/colors";

export default function Tab() {
  return (
    <View style={styles.container}>
      {/* Search Component */}
      <SearchInput />

      {/* Weather Card */}
      <WeatherCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
});
