import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { Button } from '@/components/ui/Button';
import { useIdentityVault } from '@/store/identityVault';
import { usePermissions } from '@/hooks/usePermissions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

export default function OnboardingScreen() {
  const router = useRouter();
  const { photos, addPhoto, analyzePhotos, isAnalyzed } = useIdentityVault();
  const [step, setStep] = useState(0); // 0: Intro, 1: Upload, 2: Analysis
  const [loading, setLoading] = useState(false);
  const { requestMediaLibraryPermission } = usePermissions();

  const pickImage = async () => {
    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.8,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      result.assets.forEach((asset) => {
        addPhoto({
          id: asset.assetId || Math.random().toString(),
          uri: asset.uri,
        });
      });
    }
  };

  const handleNext = async () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      if (photos.length < 3) {
        Alert.alert('More Photos Needed', 'Please upload at least 3 photos to build your Identity Vault.');
        return;
      }
      setLoading(true);
      await analyzePhotos();
      setLoading(false);
      setStep(2);
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {step === 0 && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.stepContainer}
          >
            <Text style={[Typography.h1, styles.title]}>Welcome to Aura</Text>
            <Text style={[Typography.body, styles.subtitle]}>
              Your personal AI photographer. Let's build your Identity Vault.
            </Text>
            <View style={styles.heroImagePlaceholder}>
              <Ionicons name="camera-outline" size={80} color={Colors.dark.primary} />
            </View>
          </Animated.View>
        )}

        {step === 1 && (
          <Animated.View
            entering={SlideInRight}
            exiting={SlideOutLeft}
            style={styles.stepContainer}
          >
            <Text style={[Typography.h2, styles.title]}>Build Your Vault</Text>
            <Text style={[Typography.body, styles.subtitle]}>
              Upload 10-15 varied photos of yourself. Close-ups, full body, different angles.
            </Text>

            <ScrollView horizontal style={styles.photoList} contentContainerStyle={styles.photoListContent}>
              <Button
                title="+"
                onPress={pickImage}
                variant="secondary"
                style={styles.addPhotoButton}
              />
              {photos.map((photo) => (
                <Image key={photo.id} source={{ uri: photo.uri }} style={styles.photoThumbnail} />
              ))}
            </ScrollView>
            <Text style={[Typography.caption, styles.counter]}>{photos.length} photos selected</Text>
          </Animated.View>
        )}

        {step === 2 && (
          <Animated.View
            entering={FadeIn}
            style={styles.stepContainer}
          >
            <Text style={[Typography.h2, styles.title]}>Analysis Complete</Text>
            <Text style={[Typography.body, styles.subtitle]}>
              We've analyzed your photos and built your unique facial vector.
            </Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={[Typography.h3, { color: Colors.dark.success }]}>100%</Text>
                <Text style={Typography.caption}>Face Quality</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[Typography.h3, { color: Colors.dark.success }]}>Ready</Text>
                <Text style={Typography.caption}>Vector Status</Text>
              </View>
            </View>
          </Animated.View>
        )}
      </View>

      <View style={styles.footer}>
        <Button
          title={step === 2 ? "Enter Studio" : "Continue"}
          onPress={handleNext}
          loading={loading}
          size="large"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  stepContainer: {
    alignItems: 'center',
  },
  title: {
    color: Colors.dark.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.dark.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  heroImagePlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Colors.dark.surfaceHighlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  photoList: {
    maxHeight: 120,
    marginBottom: 24,
  },
  photoListContent: {
    alignItems: 'center',
  },
  addPhotoButton: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  photoThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  counter: {
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 32,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: Colors.dark.surfaceHighlight,
    padding: 16,
    borderRadius: 12,
    minWidth: 100,
  },
  footer: {
    padding: 24,
  },
});
