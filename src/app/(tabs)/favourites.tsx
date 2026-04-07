import { View, Text, StyleSheet } from "react-native";
import { FavouriteList } from "@/components";
import { COLORS } from "@/constants/colors";

export default function Tab() {
  return (
    <View style={styles.container}>
      {/* Favourite List */}
      <FavouriteList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
  },
});
