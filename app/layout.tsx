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
      <Tabs.Screen name="(tabs)/import/index" options={{ title: 'Import' }} />
      <Tabs.Screen name="(tabs)/vocabulary/index" options={{ title: 'Vocabulaire' }} />
      <Tabs.Screen name="(tabs)/kanji/index" options={{ title: 'Kanji' }} />
      <Tabs.Screen name="(tabs)/grammar/index" options={{ title: 'Grammaire' }} />
      <Tabs.Screen name="(tabs)/listen/index" options={{ title: 'Écoute' }} />
    </Tabs>
  );
}