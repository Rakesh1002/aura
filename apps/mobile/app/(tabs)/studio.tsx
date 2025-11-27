import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { VibeCard } from '@/components/VibeCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { VIBES, CATEGORIES } from '@/constants/Vibes';

export default function StudioScreen() {
  const router = useRouter();

  const handleVibePress = (vibeId: string) => {
    router.push({
      pathname: '/(studio)/generate',
      params: { vibeId }
    });
  };

  const handleCustomPress = () => {
    router.push('/(studio)/generate');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[Typography.h1, styles.title]}>Studio</Text>
        <View style={styles.creditsContainer}>
          <Ionicons name="flash" size={16} color={Colors.dark.primary} />
          <Text style={styles.creditsText}>250</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Custom Creation Banner */}
        <TouchableOpacity style={styles.customBanner} onPress={handleCustomPress} activeOpacity={0.9}>
          <View style={styles.customBannerContent}>
            <View style={styles.customIcon}>
              <Ionicons name="options" size={24} color={Colors.dark.background} />
            </View>
            <View>
              <Text style={[Typography.h3, { color: Colors.dark.text }]}>Custom Creation</Text>
              <Text style={[Typography.caption, { color: Colors.dark.textSecondary }]}>
                Design your own vibe from scratch
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color={Colors.dark.textMuted} />
        </TouchableOpacity>

        {CATEGORIES.filter(c => c !== 'All').map((category) => {
          const categoryVibes = VIBES.filter(v => v.category === category);
          if (categoryVibes.length === 0) return null;

          return (
            <View key={category} style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={[Typography.h2, styles.sectionTitle]}>{category}</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsContainer}>
                {categoryVibes.map((vibe) => (
                  <VibeCard
                    key={vibe.id}
                    title={vibe.name}
                    description={vibe.description}
                    image={vibe.image}
                    price={`$${vibe.price}`}
                    onPress={() => handleVibePress(vibe.id)}
                  />
                ))}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
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
    marginBottom: 24,
  },
  title: {
    color: Colors.dark.text,
  },
  creditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  creditsText: {
    color: Colors.dark.primary,
    fontWeight: '600',
  },
  content: {
    paddingBottom: 100,
  },
  customBanner: {
    marginHorizontal: 24,
    marginBottom: 32,
    backgroundColor: Colors.dark.surfaceHighlight,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.dark.surface,
  },
  customBannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  customIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.dark.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    color: Colors.dark.text,
  },
  seeAll: {
    color: Colors.dark.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  cardsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
});
