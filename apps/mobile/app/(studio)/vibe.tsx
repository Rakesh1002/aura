import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { GradientBackground } from '@/components/gradient-background';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';

const VIBES = [
    { id: '1', name: 'Cinematic', image: 'https://picsum.photos/seed/cine/200/200' },
    { id: '2', name: 'Anime', image: 'https://picsum.photos/seed/anime/200/200' },
    { id: '3', name: 'Digital Art', image: 'https://picsum.photos/seed/art/200/200' },
    { id: '4', name: 'Photorealistic', image: 'https://picsum.photos/seed/photo/200/200' },
    { id: '5', name: 'Oil Painting', image: 'https://picsum.photos/seed/oil/200/200' },
    { id: '6', name: 'Cyberpunk', image: 'https://picsum.photos/seed/cyber/200/200' },
];

export default function VibeScreen() {
    const router = useRouter();

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <IconSymbol name="chevron.left" size={24} color={Colors.dark.text} />
                    </TouchableOpacity>
                    <Text style={[Typography.h3, styles.title]}>Choose Vibe</Text>
                    <View style={{ width: 40 }} />
                </View>

                <ScrollView contentContainerStyle={styles.content}>
                    <View style={styles.grid}>
                        {VIBES.map((vibe) => (
                            <TouchableOpacity key={vibe.id} style={styles.cardWrapper}>
                                <GlassCard style={styles.card} pressable>
                                    <Image source={{ uri: vibe.image }} style={styles.image} />
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                                        style={styles.overlay}
                                    >
                                        <Text style={[Typography.bodySmall, styles.vibeName]}>{vibe.name}</Text>
                                    </LinearGradient>
                                </GlassCard>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 20,
    },
    title: {
        color: Colors.dark.text,
    },
    content: {
        padding: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },
    cardWrapper: {
        width: '47%',
    },
    card: {
        padding: 0,
        aspectRatio: 1,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
    },
    vibeName: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
});
