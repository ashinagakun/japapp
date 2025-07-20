import { Tabs } from 'expo-router';
import { getTabIcon } from '../utils/gettabicon';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabIcon(route.name, color, size),
        tabBarActiveTintColor: '#FF4F8D',
        tabBarInactiveTintColor: '#8e8e93',
        headerShown: false,
      })}
    >
      <Tabs.Screen name="import" options={{ title: 'Import' }} />
      <Tabs.Screen name="vocabulary" options={{ title: 'Vocabulaire' }} />
      <Tabs.Screen name="kanji" options={{ title: 'Kanji' }} />
      <Tabs.Screen name="grammar" options={{ title: 'Grammaire' }} />
      <Tabs.Screen name="listen" options={{ title: 'Écoute' }} />
    </Tabs>
  );
}