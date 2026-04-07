import { Text, View, StyleSheet } from "react-native";

type TemperatureProps = {
  value: number;
  unit?: string;
};

const Temperature = ({ value, unit = "C" }: TemperatureProps) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.unit}>°{unit}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 16,
    marginBottom: 4,
  },
  value: {
    fontSize: 60,
    lineHeight: 60,
    fontWeight: "500",
  },
  unit: {
    fontSize: 18,
    alignSelf: "flex-start",
  },
});

export default Temperature;
