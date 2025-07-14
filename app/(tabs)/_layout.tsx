import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { gettabicon } from '../gettabicon';

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) =>
          gettabicon(route.name, color, size),
        headerRight: () => (
          <Pressable onPress={() => router.push('/learning')}>
            <Ionicons name="bar-chart" size={24} style={{ marginRight: 15 }} />
          </Pressable>
        ),
      })}
    >
      <Tabs.Screen name="import/index" options={{ title: 'Import' }} />
      <Tabs.Screen name="vocabulary/index" options={{ title: 'Vocabulary' }} />
      <Tabs.Screen name="kanji/index" options={{ title: 'Kanji' }} />
      <Tabs.Screen name="grammar/index" options={{ title: 'Grammar' }} />
      <Tabs.Screen name="listen/index" options={{ title: 'Listen' }} />
    </Tabs>
  );
}
