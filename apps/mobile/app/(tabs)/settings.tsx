import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { GradientBackground } from '@/components/gradient-background';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface SettingItem {
    id: string;
    title: string;
    icon: string;
    type: 'toggle' | 'link' | 'action';
    value?: boolean;
    onPress?: () => void;
}

export default function SettingsScreen() {
    const router = useRouter();
    const [settings, setSettings] = React.useState({
        notifications: true,
        hdQuality: false,
        autoSave: true,
        hapticFeedback: true,
    });

    const handleToggle = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const openLink = (url: string) => {
        Linking.openURL(url);
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
                        <Text style={[Typography.h1, styles.title]}>Settings</Text>
                    </View>

                    {/* Profile Section */}
                    <GlassCard style={styles.profileCard}>
                        <View style={styles.profileContent}>
                            <Image
                                source={{ uri: 'https://picsum.photos/seed/user/200/200' }}
                                style={styles.avatar}
                            />
                            <View style={styles.profileInfo}>
                                <Text style={[Typography.h3, styles.profileName]}>User Name</Text>
                                <Text style={[Typography.bodySmall, styles.profileEmail]}>
                                    user@example.com
                                </Text>
                                <View style={styles.subscriptionBadge}>
                                    <Text style={[Typography.caption, styles.subscriptionText]}>
                                        ✨ Premium
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <IconSymbol name="pencil" size={20} color={Colors.dark.textSecondary} />
                            </TouchableOpacity>
                        </View>
                    </GlassCard>

                    {/* App Settings */}
                    <View style={styles.section}>
                        <Text style={[Typography.h4, styles.sectionTitle]}>App Settings</Text>

                        <GlassCard style={styles.settingsCard}>
                            <SettingRow
                                icon="bell.fill"
                                title="Notifications"
                                value={settings.notifications}
                                onToggle={() => handleToggle('notifications')}
                            />
                            <View style={styles.divider} />
                            <SettingRow
                                icon="sparkles"
                                title="HD Quality"
                                value={settings.hdQuality}
                                onToggle={() => handleToggle('hdQuality')}
                            />
                            <View style={styles.divider} />
                            <SettingRow
                                icon="square.and.arrow.down.fill"
                                title="Auto-save to Vault"
                                value={settings.autoSave}
                                onToggle={() => handleToggle('autoSave')}
                            />
                            <View style={styles.divider} />
                            <SettingRow
                                icon="hand.tap.fill"
                                title="Haptic Feedback"
                                value={settings.hapticFeedback}
                                onToggle={() => handleToggle('hapticFeedback')}
                            />
                        </GlassCard>
                    </View>

                    {/* App Info */}
                    <View style={styles.section}>
                        <Text style={[Typography.h4, styles.sectionTitle]}>App Info</Text>

                        <GlassCard style={styles.settingsCard}>
                            <LinkRow
                                icon="doc.text.fill"
                                title="Privacy Policy"
                                onPress={() => openLink('https://aura.app/privacy')}
                            />
                            <View style={styles.divider} />
                            <LinkRow
                                icon="doc.plaintext.fill"
                                title="Terms of Service"
                                onPress={() => openLink('https://aura.app/terms')}
                            />
                            <View style={styles.divider} />
                            <LinkRow
                                icon="star.fill"
                                title="Rate Aura"
                                onPress={() => console.log('Rate app')}
                            />
                            <View style={styles.divider} />
                            <LinkRow
                                icon="gift.fill"
                                title="Referral Program"
                                onPress={() => console.log('Referral')}
                            />
                        </GlassCard>
                    </View>

                    {/* Version */}
                    <Text style={[Typography.caption, styles.version]}>
                        Version 1.0.0
                    </Text>

                    {/* Account Actions */}
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.logoutButton}>
                            <Text style={[Typography.button, styles.logoutText]}>Log Out</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteButton}>
                            <Text style={[Typography.bodySmall, styles.deleteText]}>
                                Delete Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}

function SettingRow({
    icon,
    title,
    value,
    onToggle,
}: {
    icon: string;
    title: string;
    value: boolean;
    onToggle: () => void;
}) {
    return (
        <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
                <IconSymbol name={icon as any} size={20} color={Colors.dark.textSecondary} />
                <Text style={[Typography.body, styles.settingTitle]}>{title}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={onToggle}
                trackColor={{ false: Colors.dark.border, true: Colors.dark.primary }}
                thumbColor="#fff"
            />
        </View>
    );
}

function LinkRow({
    icon,
    title,
    onPress,
}: {
    icon: string;
    title: string;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity style={styles.settingRow} onPress={onPress}>
            <View style={styles.settingLeft}>
                <IconSymbol name={icon as any} size={20} color={Colors.dark.textSecondary} />
                <Text style={[Typography.body, styles.settingTitle]}>{title}</Text>
            </View>
            <IconSymbol name="chevron.right" size={16} color={Colors.dark.textMuted} />
        </TouchableOpacity>
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
        marginBottom: 24,
    },
    title: {
        color: Colors.dark.text,
    },
    profileCard: {
        marginBottom: 32,
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: Colors.dark.primary,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        color: Colors.dark.text,
        marginBottom: 4,
    },
    profileEmail: {
        color: Colors.dark.textSecondary,
        marginBottom: 8,
    },
    subscriptionBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 45, 146, 0.15)',
        borderWidth: 1,
        borderColor: Colors.dark.primary,
    },
    subscriptionText: {
        color: Colors.dark.primary,
        fontWeight: '600',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        color: Colors.dark.text,
        marginBottom: 12,
    },
    settingsCard: {
        padding: 0,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    settingTitle: {
        color: Colors.dark.text,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.dark.border,
        marginLeft: 52,
    },
    version: {
        color: Colors.dark.textMuted,
        textAlign: 'center',
        marginBottom: 24,
    },
    logoutButton: {
        backgroundColor: Colors.dark.surfaceHighlight,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.dark.border,
    },
    logoutText: {
        color: Colors.dark.text,
    },
    deleteButton: {
        paddingVertical: 12,
        alignItems: 'center',
    },
    deleteText: {
        color: Colors.dark.error,
    },
});
