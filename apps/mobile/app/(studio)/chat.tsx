import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { GradientBackground } from '@/components/gradient-background';
import { GlassCard } from '@/components/glass-card';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

export default function ChatScreen() {
    const router = useRouter();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Hi! I'm your creative assistant. What would you like to create today?", sender: 'ai' },
    ]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
        setMessages(prev => [...prev, newMsg]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: "That sounds like a great idea! Let me help you visualize that.",
                sender: 'ai'
            }]);
        }, 1000);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <IconSymbol name="chevron.left" size={24} color={Colors.dark.text} />
                    </TouchableOpacity>
                    <Text style={[Typography.h3, styles.title]}>AI Chat</Text>
                    <View style={{ width: 40 }} />
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.keyboardView}
                >
                    <ScrollView
                        contentContainerStyle={styles.chatContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {messages.map((msg) => (
                            <View
                                key={msg.id}
                                style={[
                                    styles.messageBubble,
                                    msg.sender === 'user' ? styles.userBubble : styles.aiBubble
                                ]}
                            >
                                {msg.sender === 'ai' && (
                                    <LinearGradient
                                        colors={[Colors.pop.lime, Colors.pop.blue]}
                                        style={styles.aiAvatar}
                                    >
                                        <IconSymbol name="sparkles" size={12} color="white" />
                                    </LinearGradient>
                                )}
                                <GlassCard style={[styles.bubbleCard, msg.sender === 'user' && styles.userBubbleCard]}>
                                    <Text style={styles.messageText}>{msg.text}</Text>
                                </GlassCard>
                            </View>
                        ))}
                    </ScrollView>

                    <View style={styles.inputContainer}>
                        <GlassCard style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="Type a message..."
                                placeholderTextColor={Colors.dark.textMuted}
                                value={input}
                                onChangeText={setInput}
                            />
                            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                                <LinearGradient
                                    colors={[Colors.pop.pink, Colors.pop.purple]}
                                    style={styles.sendGradient}
                                >
                                    <IconSymbol name="arrow.up" size={20} color="white" />
                                </LinearGradient>
                            </TouchableOpacity>
                        </GlassCard>
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
    keyboardView: {
        flex: 1,
    },
    chatContent: {
        padding: 20,
        gap: 16,
    },
    messageBubble: {
        flexDirection: 'row',
        gap: 8,
        maxWidth: '80%',
    },
    userBubble: {
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
    },
    aiBubble: {
        alignSelf: 'flex-start',
    },
    aiAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    bubbleCard: {
        padding: 12,
        borderRadius: 16,
        borderTopLeftRadius: 4,
    },
    userBubbleCard: {
        backgroundColor: 'rgba(255, 45, 146, 0.2)',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 4,
        borderColor: 'rgba(255, 45, 146, 0.3)',
    },
    messageText: {
        color: Colors.dark.text,
        fontSize: 16,
    },
    inputContainer: {
        padding: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 16,
        borderRadius: 30,
    },
    input: {
        flex: 1,
        color: Colors.dark.text,
        fontSize: 16,
        height: 40,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    sendGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
