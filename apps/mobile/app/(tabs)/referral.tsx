import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, Alert, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';

export default function ReferralScreen() {
    const referralCode = "RAKESH-2024";

    const copyToClipboard = () => {
        Clipboard.setString(referralCode);
        Alert.alert('Copied!', 'Referral code copied to clipboard.');
    };

    const shareLink = () => {
        // Implement share logic
        Alert.alert('Share', 'Sharing referral link...');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="gift-outline" size={48} color={Colors.dark.primary} />
                    </View>
                    <Text style={[Typography.h1, styles.title]}>Give 50, Get 50</Text>
                    <Text style={[Typography.body, styles.subtitle]}>
                        Invite your friends to Aura. They get 50 credits to start, and you get 50 credits when they make their first creation.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={[Typography.caption, styles.cardLabel]}>YOUR REFERRAL CODE</Text>
                    <TouchableOpacity style={styles.codeContainer} onPress={copyToClipboard}>
                        <Text style={styles.code}>{referralCode}</Text>
                        <Ionicons name="copy-outline" size={20} color={Colors.dark.primary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={[Typography.h2, styles.statValue]}>0</Text>
                        <Text style={[Typography.caption, styles.statLabel]}>Friends Invited</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statItem}>
                        <Text style={[Typography.h2, styles.statValue]}>0</Text>
                        <Text style={[Typography.caption, styles.statLabel]}>Credits Earned</Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Button title="Invite Friends" onPress={shareLink} size="large" />
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        color: Colors.dark.text,
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.dark.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
    },
    card: {
        width: '100%',
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 16,
        padding: 20,
        marginBottom: 32,
    },
    cardLabel: {
        marginBottom: 12,
        color: Colors.dark.textMuted,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.dark.border,
        borderStyle: 'dashed',
    },
    code: {
        ...Typography.h3,
        color: Colors.dark.primary,
        letterSpacing: 1,
    },
    statsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        color: Colors.dark.text,
        marginBottom: 4,
    },
    statLabel: {
        color: Colors.dark.textSecondary,
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: Colors.dark.border,
    },
    footer: {
        padding: 24,
    },
});
