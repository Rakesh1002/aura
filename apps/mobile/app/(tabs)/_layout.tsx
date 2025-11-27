import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.primary,
        tabBarInactiveTintColor: Colors.dark.textSecondary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: Colors.dark.surfaceHighlight,
            borderTopColor: Colors.dark.border,
          },
          default: {
            backgroundColor: Colors.dark.surfaceHighlight,
            borderTopColor: Colors.dark.border,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Vibes',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
    </Tabs>
  );
}
