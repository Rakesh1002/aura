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
        tabBarInactiveTintColor: Colors.dark.textMuted,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            borderTopColor: Colors.dark.border,
            borderTopWidth: 1,
            paddingTop: 8,
            paddingBottom: 24,
            height: 88,
          },
          default: {
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            borderTopColor: Colors.dark.border,
            borderTopWidth: 1,
            paddingTop: 8,
            paddingBottom: 8,
            height: 64,
          },
        }),
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="photo.stack.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="generate"
        options={{
          title: 'Generate',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wand.and.stars" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="gearshape.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
