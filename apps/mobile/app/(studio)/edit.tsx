import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function EditScreen() {
    const router = useRouter();
    const [activeTool, setActiveTool] = useState('filter');

    // Mock image
    const imageUri = 'https://picsum.photos/seed/edit/400/800';

    const TOOLS = [
        { id: 'filter', icon: 'paintbrush.fill', label: 'Filter' },
        { id: 'adjust', icon: 'slider.horizontal.3', label: 'Adjust' },
        { id: 'crop', icon: 'crop', label: 'Crop' },
        { id: 'text', icon: 'textformat', label: 'Text' },
    ];

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: imageUri }} style={styles.imageBackground}>
                <LinearGradient
                    colors={['rgba(0,0,0,0.4)', 'transparent', 'rgba(0,0,0,0.8)']}
                    style={StyleSheet.absoluteFill}
                />

                <SafeAreaView style={styles.safeArea}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
                            <IconSymbol name="chevron.left" size={24} color="white" />
                        </TouchableOpacity>

                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.iconButton}>
                                <IconSymbol name="arrow.uturn.backward" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton}>
                                <Text style={[Typography.button, styles.saveText]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Tools Area */}
                    <View style={styles.toolsContainer}>
                        <GlassCard style={styles.toolsCard}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.toolsList}>
                                {TOOLS.map((tool) => (
                                    <TouchableOpacity
                                        key={tool.id}
                                        onPress={() => setActiveTool(tool.id)}
                                        style={styles.toolItem}
                                    >
                                        <View style={[
                                            styles.toolIconWrapper,
                                            activeTool === tool.id && styles.activeToolIcon
                                        ]}>
                                            <IconSymbol
                                                name={tool.icon as any}
                                                size={24}
                                                color={activeTool === tool.id ? Colors.pop.pink : 'white'}
                                            />
                                        </View>
                                        <Text style={[
                                            Typography.caption,
                                            styles.toolLabel,
                                            activeTool === tool.id && styles.activeToolLabel
                                        ]}>
                                            {tool.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </GlassCard>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
    },
    saveButton: {
        backgroundColor: Colors.pop.pink,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
    },
    saveText: {
        color: 'white',
        fontSize: 14,
    },
    toolsContainer: {
        padding: 20,
    },
    toolsCard: {
        padding: 0,
        borderRadius: 24,
    },
    toolsList: {
        padding: 16,
        gap: 24,
    },
    toolItem: {
        alignItems: 'center',
        gap: 8,
    },
    toolIconWrapper: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    activeToolIcon: {
        backgroundColor: 'rgba(255, 45, 146, 0.2)',
        borderWidth: 1,
        borderColor: Colors.pop.pink,
    },
    toolLabel: {
        color: Colors.dark.textSecondary,
    },
    activeToolLabel: {
        color: 'white',
        fontWeight: '600',
    },
});
