import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COLORS.activeTabColor }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />
      {/* Favourites Tab */}
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="star" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
