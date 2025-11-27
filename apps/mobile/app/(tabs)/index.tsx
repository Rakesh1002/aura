import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { GradientBackground } from '@/components/gradient-background';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { useCreations } from '@/store/creations';
import { IconSymbol } from '@/components/ui/icon-symbol';

type TabType = 'creations' | 'vault';

const VIBE_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'travel', label: 'Travel' },
  { id: 'dating', label: 'Dating' },
  { id: 'professional', label: 'Professional' },
];

export default function LibraryScreen() {
  const { creations } = useCreations();
  const [activeTab, setActiveTab] = useState<TabType>('creations');
  const [activeFilter, setActiveFilter] = useState('all');
  const router = useRouter();

  const filteredCreations = activeFilter === 'all'
    ? creations
    : creations.filter(c => c.vibeId === activeFilter);

  const handleCreationPress = (id: string) => {
    // Navigate to creation detail/edit
    console.log('View creation:', id);
  };

  const handleQuickCreate = () => {
    router.push('/(studio)/generate');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[Typography.h1, styles.title]}>Library</Text>
            <Text style={[Typography.bodySmall, styles.subtitle]}>
              {activeTab === 'creations' ? 'Your AI creations' : 'Your uploaded photos'}
            </Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={handleQuickCreate} style={styles.quickCreateButton}>
              <LinearGradient
                colors={[Colors.pop.pink, Colors.pop.purple]}
                style={styles.quickCreateGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <IconSymbol name="plus" size={20} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={{ uri: 'https://picsum.photos/seed/me/100/100' }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <GlassCard style={styles.tabCard}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'creations' && styles.activeTab]}
              onPress={() => setActiveTab('creations')}
            >
              {activeTab === 'creations' && (
                <LinearGradient
                  colors={[Colors.pop.pink, Colors.pop.purple]}
                  style={StyleSheet.absoluteFill}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              )}
              <IconSymbol
                name="sparkles"
                size={18}
                color={activeTab === 'creations' ? '#fff' : Colors.dark.textMuted}
              />
              <Text style={[
                Typography.button,
                styles.tabText,
                activeTab === 'creations' && styles.activeTabText
              ]}>
                Creations
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, activeTab === 'vault' && styles.activeTab]}
              onPress={() => setActiveTab('vault')}
            >
              {activeTab === 'vault' && (
                <LinearGradient
                  colors={[Colors.pop.blue, Colors.pop.purple]}
                  style={StyleSheet.absoluteFill}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              )}
              <IconSymbol
                name="photo.stack.fill"
                size={18}
                color={activeTab === 'vault' ? '#fff' : Colors.dark.textMuted}
              />
              <Text style={[
                Typography.button,
                styles.tabText,
                activeTab === 'vault' && styles.activeTabText
              ]}>
                Vault
              </Text>
            </TouchableOpacity>
          </GlassCard>
        </View>

        {/* Filters (only for creations) */}
        {activeTab === 'creations' && (
          <View style={styles.filterContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterContent}
            >
              {VIBE_FILTERS.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  style={[
                    styles.filterChip,
                    activeFilter === filter.id && styles.activeFilterChip,
                  ]}
                  onPress={() => setActiveFilter(filter.id)}
                >
                  {activeFilter === filter.id && (
                    <LinearGradient
                      colors={[Colors.pop.pink, Colors.pop.purple]}
                      style={StyleSheet.absoluteFill}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  )}
                  <Text
                    style={[
                      Typography.bodySmall,
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
        )}

        {/* Content */}
        {activeTab === 'creations' ? (
          <FlatList
            data={filteredCreations}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.gallery}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => handleCreationPress(item.id)}
                activeOpacity={0.9}
              >
                <Image source={{ uri: item.uri }} style={styles.cardImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.cardOverlay}
                >
                  <Text style={[Typography.caption, styles.cardPrompt]} numberOfLines={2}>
                    {item.prompt}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <IconSymbol name="sparkles" size={48} color={Colors.dark.textMuted} />
                <Text style={[Typography.body, styles.emptyText]}>
                  No creations yet
                </Text>
                <Text style={[Typography.bodySmall, styles.emptySubtext]}>
                  Visit Generate to start creating
                </Text>
              </View>
            }
          />
        ) : (
          <View style={styles.vaultContent}>
            <View style={styles.emptyState}>
              <IconSymbol name="photo.stack.fill" size={48} color={Colors.dark.textMuted} />
              <Text style={[Typography.body, styles.emptyText]}>
                No photos in vault
              </Text>
              <Text style={[Typography.bodySmall, styles.emptySubtext]}>
                Upload photos to get started
              </Text>
              <TouchableOpacity style={styles.uploadButton}>
                <LinearGradient
                  colors={[Colors.pop.pink, Colors.pop.purple]}
                  style={styles.uploadButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <IconSymbol name="plus" size={20} color="#fff" />
                  <Text style={[Typography.button, styles.uploadButtonText]}>
                    Upload Photos
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 16,
    marginBottom: 20,
  },
  title: {
    color: Colors.dark.text,
    marginBottom: 4,
  },
  subtitle: {
    color: Colors.dark.textSecondary,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quickCreateButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  quickCreateGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.dark.primary,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  tabContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  tabCard: {
    flexDirection: 'row',
    padding: 4,
    gap: 4,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  activeTab: {
    // Gradient applied via LinearGradient
  },
  tabText: {
    color: Colors.dark.textMuted,
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.dark.surfaceHighlight,
    borderWidth: 1,
    borderColor: Colors.dark.border,
    overflow: 'hidden',
  },
  activeFilterChip: {
    borderColor: 'transparent',
  },
  filterText: {
    color: Colors.dark.textSecondary,
    fontWeight: '600',
  },
  activeFilterText: {
    color: '#fff',
  },
  gallery: {
    paddingHorizontal: 12,
    paddingBottom: 120,
  },
  card: {
    flex: 1 / 2,
    aspectRatio: 0.75,
    margin: 8,
    borderRadius: 20,
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
  },
  cardPrompt: {
    color: Colors.dark.text,
    fontWeight: '500',
  },
  vaultContent: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  emptyText: {
    color: Colors.dark.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    color: Colors.dark.textSecondary,
    textAlign: 'center',
  },
  uploadButton: {
    marginTop: 24,
    borderRadius: 100,
    overflow: 'hidden',
  },
  uploadButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  uploadButtonText: {
    color: '#fff',
  },
});
