import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useToast } from "@/hooks/useToast";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

export default function Toast() {
  const { isToastVisible, toastMessage, toastType, hideToast } = useToast();

  const getIconName = (type: string) => {
    switch (type) {
      case "success":
        return "check-circle";
      case "error":
        return "x-circle";
      case "info":
        return "info";
      case "warning":
        return "alert-triangle";
      default:
        return "info";
    }
  };

  useEffect(() => {
    if (!isToastVisible) return;

    const timer = setTimeout(() => {
      hideToast();
    }, 3000); // auto‑hide after 3s

    return () => clearTimeout(timer);
  }, [isToastVisible, hideToast]);

  if (!isToastVisible) return null;

  return (
    <View style={[styles.toast, styles[toastType]]}>
      <View style={styles.iconView}>
        <Feather
          name={getIconName(toastType)}
          size={18}
          color={COLORS.white}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.text}>{toastMessage}</Text>
      </View>
      <TouchableOpacity onPress={hideToast}>
        <Feather name="x" size={18} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 120,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconView: {
    gap: 8,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  success: { backgroundColor: COLORS.success, color: COLORS.white },
  error: { backgroundColor: COLORS.error, color: COLORS.white },
  info: { backgroundColor: COLORS.info, color: COLORS.white },
  warning: { backgroundColor: COLORS.warning, color: COLORS.white },
  text: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "500",
    flexWrap: "wrap",
    width: "82%",
  },
});
