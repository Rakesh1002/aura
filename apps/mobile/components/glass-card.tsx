import React from 'react';
import { StyleSheet, View, ViewStyle, Pressable, PressableProps } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';

interface GlassCardProps extends Omit<PressableProps, 'style'> {
    children: React.ReactNode;
    style?: ViewStyle;
    pressable?: boolean;
    intensity?: number;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function GlassCard({
    children,
    style,
    pressable = false,
    intensity = 10,
    ...pressableProps
}: GlassCardProps) {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePressIn = () => {
        if (pressable) {
            scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
        }
    };

    const handlePressOut = () => {
        if (pressable) {
            scale.value = withSpring(1, { damping: 15, stiffness: 300 });
        }
    };

    const content = (
        <View style={[styles.card, style]}>
            <BlurView intensity={intensity} style={StyleSheet.absoluteFill} tint="dark" />
            <View style={styles.content}>{children}</View>
        </View>
    );

    if (pressable) {
        return (
            <AnimatedPressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={animatedStyle}
                {...pressableProps}
            >
                {content}
            </AnimatedPressable>
        );
    }

    return <View style={animatedStyle}>{content}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.dark.glass,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: Colors.dark.glassBorder,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    content: {
        padding: 20,
    },
});
