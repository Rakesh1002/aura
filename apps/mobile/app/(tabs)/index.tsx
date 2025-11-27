import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { useCreations } from '@/store/creations';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'travel', label: 'Travel' },
  { id: 'dating', label: 'Dating' },
  { id: 'professional', label: 'Professional' },
];

export default function HomeScreen() {
  const { creations } = useCreations();
  const [activeFilter, setActiveFilter] = useState('all');
  const router = useRouter();

  const filteredCreations = activeFilter === 'all'
    ? creations
    : creations.filter(c => c.vibeId === activeFilter);

  const handleCreationPress = (id: string) => {
    // In a real app, this would go to a details/full-screen view
    // For now, let's go to edit to simulate "refining" a creation
    router.push('/(studio)/edit');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[Typography.h1, styles.title]}>My Aura</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Image source={{ uri: 'https://picsum.photos/seed/me/100/100' }} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContent}>
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterChip,
                activeFilter === filter.id && styles.activeFilterChip,
              ]}
              onPress={() => setActiveFilter(filter.id)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter.id && styles.activeFilterText,
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredCreations}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gallery}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCreationPress(item.id)}
            activeOpacity={0.9}
          >
            <Image source={{ uri: item.uri }} style={styles.cardImage} />
            <View style={styles.cardOverlay}>
              <Text style={styles.cardPrompt} numberOfLines={1}>{item.prompt}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="images-outline" size={48} color={Colors.dark.textMuted} />
            <Text style={[Typography.body, styles.emptyText]}>
              No creations yet. Visit the Studio to start.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    marginBottom: 16,
  },
  title: {
    color: Colors.dark.text,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterContent: {
    paddingHorizontal: 24,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.dark.surfaceHighlight,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeFilterChip: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)', // Gold with opacity
    borderColor: Colors.dark.primary,
  },
  filterText: {
    color: Colors.dark.textSecondary,
    fontWeight: '500',
  },
  activeFilterText: {
    color: Colors.dark.primary,
  },
  gallery: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  card: {
    flex: 1 / 2,
    aspectRatio: 0.8,
    margin: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: Colors.dark.surfaceHighlight,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  cardPrompt: {
    color: Colors.dark.text,
    fontSize: 12,
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    color: Colors.dark.textMuted,
    marginTop: 16,
  },
});
