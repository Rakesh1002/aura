import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientBackground } from '@/components/gradient-background';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';

const ASPECT_RATIOS = [
    { id: '1:1', label: 'Square', icon: 'square' },
    { id: '4:5', label: 'Portrait', icon: 'rectangle.portrait' },
    { id: '16:9', label: 'Landscape', icon: 'rectangle' },
];

export default function StudioGenerateScreen() {
    const router = useRouter();
    const [prompt, setPrompt] = useState('');
    const [selectedRatio, setSelectedRatio] = useState('4:5');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            router.push('/(studio)/edit');
        }, 2000);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <IconSymbol name="chevron.left" size={24} color={Colors.dark.text} />
                    </TouchableOpacity>
                    <Text style={[Typography.h3, styles.title]}>Generate</Text>
                    <View style={{ width: 40 }} />
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <ScrollView contentContainerStyle={styles.content}>
                        <GlassCard style={styles.inputCard}>
                            <Text style={[Typography.caption, styles.label]}>PROMPT</Text>
                            <TextInput
                                style={styles.input}
                                multiline
                                placeholder="Describe what you want to create..."
                                placeholderTextColor={Colors.dark.textMuted}
                                value={prompt}
                                onChangeText={setPrompt}
                                textAlignVertical="top"
                            />
                        </GlassCard>

                        <View style={styles.section}>
                            <Text style={[Typography.caption, styles.label]}>ASPECT RATIO</Text>
                            <View style={styles.ratioGrid}>
                                {ASPECT_RATIOS.map((ratio) => (
                                    <TouchableOpacity
                                        key={ratio.id}
                                        onPress={() => setSelectedRatio(ratio.id)}
                                        style={styles.ratioWrapper}
                                    >
                                        <GlassCard
                                            style={[
                                                styles.ratioCard,
                                                selectedRatio === ratio.id && styles.selectedRatioCard
                                            ]}
                                        >
                                            <IconSymbol
                                                name={ratio.icon as any}
                                                size={24}
                                                color={selectedRatio === ratio.id ? Colors.pop.pink : Colors.dark.textSecondary}
                                            />
                                            <Text style={[
                                                Typography.bodySmall,
                                                styles.ratioLabel,
                                                selectedRatio === ratio.id && styles.selectedRatioLabel
                                            ]}>
                                                {ratio.label}
                                            </Text>
                                        </GlassCard>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.footer}>
                        <TouchableOpacity onPress={handleGenerate} disabled={isGenerating}>
                            <LinearGradient
                                colors={isGenerating ? [Colors.dark.surfaceHighlight, Colors.dark.surfaceHighlight] : [Colors.pop.pink, Colors.pop.purple]}
                                style={styles.generateButton}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                {isGenerating ? (
                                    <Text style={[Typography.button, styles.buttonText]}>Generating...</Text>
                                ) : (
                                    <>
                                        <IconSymbol name="sparkles" size={20} color="white" />
                                        <Text style={[Typography.button, styles.buttonText]}>Generate</Text>
                                    </>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
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
        gap: 24,
    },
    inputCard: {
        padding: 16,
        minHeight: 160,
    },
    label: {
        color: Colors.dark.textSecondary,
        marginBottom: 12,
        fontWeight: '600',
    },
    input: {
        flex: 1,
        color: Colors.dark.text,
        fontSize: 16,
        lineHeight: 24,
    },
    section: {
        gap: 12,
    },
    ratioGrid: {
        flexDirection: 'row',
        gap: 12,
    },
    ratioWrapper: {
        flex: 1,
    },
    ratioCard: {
        alignItems: 'center',
        padding: 16,
        gap: 8,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    selectedRatioCard: {
        borderColor: Colors.pop.pink,
        backgroundColor: 'rgba(255, 45, 146, 0.1)',
    },
    ratioLabel: {
        color: Colors.dark.textSecondary,
    },
    selectedRatioLabel: {
        color: Colors.pop.pink,
        fontWeight: '600',
    },
    footer: {
        padding: 20,
        paddingBottom: Platform.OS === 'ios' ? 0 : 20,
    },
    generateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 16,
        borderRadius: 16,
    },
    buttonText: {
        color: 'white',
    },
});
