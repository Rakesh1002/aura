import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { GradientBackground } from '@/components/gradient-background';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface GenerationMode {
    id: string;
    title: string;
    description: string;
    icon: string;
    gradient: [string, string];
    route: string;
}

const GENERATION_MODES: GenerationMode[] = [
    {
        id: 'generate',
        title: 'Generate',
        description: 'Create stunning images from text descriptions',
        icon: 'sparkles',
        gradient: [Colors.pop.pink, Colors.pop.purple],
        route: '/(studio)/generate',
    },
    {
        id: 'edit',
        title: 'Edit',
        description: 'Modify and enhance your existing images',
        icon: 'slider.horizontal.3',
        gradient: [Colors.pop.blue, Colors.pop.purple],
        route: '/(studio)/edit',
    },
    {
        id: 'vibe',
        title: 'Vibe',
        description: 'Apply curated style presets to your photos',
        icon: 'paintbrush.fill',
        gradient: [Colors.pop.orange, Colors.pop.pink],
        route: '/(studio)/vibe',
    },
    {
        id: 'chat',
        title: 'AI Chat',
        description: 'Get creative guidance from AI assistant',
        icon: 'bubble.left.and.bubble.right.fill',
        gradient: [Colors.pop.lime, Colors.pop.blue],
        route: '/(studio)/chat',
    },
];

export default function GenerateScreen() {
    const router = useRouter();

    const handleModePress = (route: string) => {
        // Navigate to the specific generation mode
        router.push(route as any);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container} edges={['top']}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={[Typography.h1, styles.title]}>
                            Create Your{' '}
                            <LinearGradient
                                colors={[Colors.pop.pink, Colors.pop.blue, Colors.pop.purple]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientTextContainer}
                            >
                                <Text style={[Typography.h1, styles.gradientText]}>Aura</Text>
                            </LinearGradient>
                        </Text>
                        <Text style={[Typography.body, styles.subtitle]}>
                            Choose how you want to bring your vision to life
                        </Text>
                    </View>

                    {/* Generation Modes */}
                    <View style={styles.modesContainer}>
                        {GENERATION_MODES.map((mode) => (
                            <GlassCard
                                key={mode.id}
                                pressable
                                onPress={() => handleModePress(mode.route)}
                                style={styles.modeCard}
                            >
                                <LinearGradient
                                    colors={[mode.gradient[0], mode.gradient[1], 'transparent']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.modeGradient}
                                />

                                <View style={styles.modeContent}>
                                    <View style={styles.modeIconContainer}>
                                        <LinearGradient
                                            colors={[mode.gradient[0], mode.gradient[1]]}
                                            style={styles.iconGradient}
                                        >
                                            <IconSymbol name={mode.icon as any} size={32} color="#fff" />
                                        </LinearGradient>
                                    </View>

                                    <View style={styles.modeTextContainer}>
                                        <Text style={[Typography.h3, styles.modeTitle]}>
                                            {mode.title}
                                        </Text>
                                        <Text style={[Typography.bodySmall, styles.modeDescription]}>
                                            {mode.description}
                                        </Text>
                                    </View>

                                    <IconSymbol
                                        name="chevron.right"
                                        size={20}
                                        color={Colors.dark.textMuted}
                                    />
                                </View>
                            </GlassCard>
                        ))}
                    </View>

                    {/* Quick Tips */}
                    <View style={styles.tipsSection}>
                        <Text style={[Typography.h4, styles.tipsTitle]}>Quick Tips</Text>
                        <GlassCard style={styles.tipCard}>
                            <Text style={[Typography.bodySmall, styles.tipText]}>
                                💡 Be specific with your descriptions for better results
                            </Text>
                        </GlassCard>
                        <GlassCard style={styles.tipCard}>
                            <Text style={[Typography.bodySmall, styles.tipText]}>
                                🎨 Try different vibes to find your perfect style
                            </Text>
                        </GlassCard>
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 120,
    },
    header: {
        marginBottom: 32,
    },
    title: {
        color: Colors.dark.text,
        marginBottom: 12,
    },
    gradientTextContainer: {
        borderRadius: 8,
    },
    gradientText: {
        color: 'transparent',
    },
    subtitle: {
        color: Colors.dark.textSecondary,
    },
    modesContainer: {
        gap: 16,
        marginBottom: 32,
    },
    modeCardWrapper: {
        marginBottom: 0,
    },
    modeCard: {
        overflow: 'hidden',
    },
    modeGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
    },
    modeContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    modeIconContainer: {
        width: 56,
        height: 56,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modeTextContainer: {
        flex: 1,
    },
    modeTitle: {
        color: Colors.dark.text,
        marginBottom: 4,
    },
    modeDescription: {
        color: Colors.dark.textSecondary,
    },
    tipsSection: {
        gap: 12,
    },
    tipsTitle: {
        color: Colors.dark.text,
        marginBottom: 4,
    },
    tipCard: {
        padding: 16,
    },
    tipText: {
        color: Colors.dark.textSecondary,
    },
});
