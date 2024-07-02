import { Stack, useRouter } from "expo-router";
import { Provider } from "react-redux";
import store from "../store/store.js";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home"); // Navigates to /home route
  }, []);
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
