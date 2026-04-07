import { Stack } from "expo-router";
import { Toast } from "@/components";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      {/* Toast Component */}
      <Toast />
    </>
  );
}
