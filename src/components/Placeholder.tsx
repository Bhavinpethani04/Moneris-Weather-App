import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export default function Placeholder({ text = "No data available" }) {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  placeholder: {
    backgroundColor: COLORS.placeholderBg,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.placeholderText,
  },
});
