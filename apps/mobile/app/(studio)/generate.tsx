import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { AspectRatioSelector, AspectRatio } from '@/components/AspectRatioSelector';
import { VIBES } from '@/constants/Vibes';

export default function GenerateScreen() {
    const { vibeId } = useLocalSearchParams();
    const router = useRouter();

    const selectedVibe = VIBES.find(v => v.id === vibeId);

    const [prompt, setPrompt] = useState(selectedVibe?.defaultPrompt || '');
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('4:5');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectedVibe) {
            setPrompt(selectedVibe.defaultPrompt);
        }
    }, [selectedVibe]);

    const handleGenerate = () => {
        setLoading(true);
        // Simulate generation delay
        setTimeout(() => {
            setLoading(false);
            // Navigate to Edit screen with params (in a real app, we'd pass the generated image URI)
            router.push({
                pathname: '/(studio)/edit',
                params: { vibeId, prompt, aspectRatio }
            });
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="close" size={24} color={Colors.dark.text} />
                </TouchableOpacity>
                <Text style={[Typography.h3, styles.title]}>Configure Generation</Text>
                <View style={{ width: 40 }} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.content}>
                    {/* Vibe Preview */}
                    {selectedVibe && (
                        <View style={styles.vibePreview}>
                            <Image source={{ uri: selectedVibe.image }} style={styles.vibeImage} />
                            <View style={styles.vibeInfo}>
                                <Text style={[Typography.h3, styles.vibeName]}>{selectedVibe.name}</Text>
                                <Text style={[Typography.caption, styles.vibeCategory]}>{selectedVibe.category}</Text>
                            </View>
                        </View>
                    )}

                    {/* Aspect Ratio */}
                    <AspectRatioSelector selected={aspectRatio} onSelect={setAspectRatio} />

                    {/* Prompt Input */}
                    <View style={styles.inputContainer}>
                        <View style={styles.inputHeader}>
                            <Text style={[Typography.caption, styles.label]}>PROMPT</Text>
                            <TouchableOpacity onPress={() => setPrompt('')}>
                                <Text style={styles.clearText}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.input}
                            multiline
                            placeholder="Describe what you want to see..."
                            placeholderTextColor={Colors.dark.textMuted}
                            value={prompt}
                            onChangeText={setPrompt}
                            textAlignVertical="top"
                        />
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <View style={styles.costContainer}>
                        <Ionicons name="flash" size={16} color={Colors.dark.primary} />
                        <Text style={styles.costText}>50 Credits</Text>
                    </View>
                    <Button
                        title={loading ? "Generating..." : "Generate"}
                        onPress={handleGenerate}
                        loading={loading}
                        size="large"
                    />
                </View>
            </KeyboardAvoidingView>
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.dark.surfaceHighlight,
    },
    backButton: {
        padding: 8,
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 20,
    },
    title: {
        color: Colors.dark.text,
    },
    content: {
        padding: 24,
    },
    vibePreview: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.dark.surfaceHighlight,
        padding: 12,
        borderRadius: 16,
        marginBottom: 24,
    },
    vibeImage: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 16,
    },
    vibeInfo: {
        flex: 1,
    },
    vibeName: {
        color: Colors.dark.text,
        marginBottom: 4,
    },
    vibeCategory: {
        color: Colors.dark.primary,
        fontWeight: '600',
        textTransform: 'uppercase',
        fontSize: 10,
    },
    inputContainer: {
        marginBottom: 24,
    },
    inputHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingHorizontal: 4,
    },
    label: {
        color: Colors.dark.textMuted,
    },
    clearText: {
        color: Colors.dark.textSecondary,
        fontSize: 12,
    },
    input: {
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 16,
        padding: 16,
        color: Colors.dark.text,
        minHeight: 120,
        fontSize: 16,
        lineHeight: 24,
    },
    footer: {
        padding: 24,
        borderTopWidth: 1,
        borderTopColor: Colors.dark.surfaceHighlight,
    },
    costContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        gap: 6,
    },
    costText: {
        color: Colors.dark.textSecondary,
        fontWeight: '600',
        fontSize: 12,
    },
});
