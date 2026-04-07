import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWeather } from "@/hooks/useWeather";
import FavouriteListItem from "@/components/FavouriteListItem";
import { COLORS } from "@/constants/colors";
import Placeholder from "@/components/Placeholder";

export default function FavouriteList() {
  const { favourites } = useWeather();
  return (
    <SafeAreaView style={styles.container}>
      {/* Favourite Flat List */}
      <FlatList
        style={styles.list}
        data={favourites}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.headerText}>Favourites</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <FavouriteListItem city={item} />}
        ListEmptyComponent={() => <Placeholder text="No favourites yet" />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  list: {
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
  },
});
