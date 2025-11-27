import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence,
    Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

interface GradientBackgroundProps {
    children?: React.ReactNode;
}

export function GradientBackground({ children }: GradientBackgroundProps) {
    // Animated values for floating orbs
    const orb1Translate = useSharedValue(0);
    const orb2Translate = useSharedValue(0);
    const orb3Translate = useSharedValue(0);

    useEffect(() => {
        // Orb 1 animation
        orb1Translate.value = withRepeat(
            withSequence(
                withTiming(30, { duration: 8000, easing: Easing.inOut(Easing.ease) }),
                withTiming(-20, { duration: 8000, easing: Easing.inOut(Easing.ease) }),
                withTiming(20, { duration: 8000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 8000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
        );

        // Orb 2 animation (offset timing)
        orb2Translate.value = withRepeat(
            withSequence(
                withTiming(-25, { duration: 10000, easing: Easing.inOut(Easing.ease) }),
                withTiming(25, { duration: 10000, easing: Easing.inOut(Easing.ease) }),
                withTiming(-15, { duration: 10000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 10000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
        );

        // Orb 3 animation
        orb3Translate.value = withRepeat(
            withSequence(
                withTiming(20, { duration: 12000, easing: Easing.inOut(Easing.ease) }),
                withTiming(-30, { duration: 12000, easing: Easing.inOut(Easing.ease) }),
                withTiming(15, { duration: 12000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 12000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
        );
    }, []);

    const orb1Style = useAnimatedStyle(() => ({
        transform: [
            { translateX: orb1Translate.value },
            { translateY: orb1Translate.value * 0.8 },
        ],
    }));

    const orb2Style = useAnimatedStyle(() => ({
        transform: [
            { translateX: orb2Translate.value },
            { translateY: orb2Translate.value * -0.6 },
        ],
    }));

    const orb3Style = useAnimatedStyle(() => ({
        transform: [
            { translateX: orb3Translate.value * -0.7 },
            { translateY: orb3Translate.value },
        ],
    }));

    return (
        <View style={styles.container}>
            {/* Base gradient background */}
            <LinearGradient
                colors={[Colors.dark.background, '#0a0a0a', Colors.dark.background]}
                locations={[0, 0.5, 1]}
                style={StyleSheet.absoluteFill}
            />

            {/* Floating orbs */}
            <Animated.View style={[styles.orb, styles.orb1, orb1Style]}>
                <LinearGradient
                    colors={[Colors.pop.pink, 'transparent']}
                    style={styles.orbGradient}
                />
            </Animated.View>

            <Animated.View style={[styles.orb, styles.orb2, orb2Style]}>
                <LinearGradient
                    colors={[Colors.pop.blue, 'transparent']}
                    style={styles.orbGradient}
                />
            </Animated.View>

            <Animated.View style={[styles.orb, styles.orb3, orb3Style]}>
                <LinearGradient
                    colors={[Colors.pop.purple, 'transparent']}
                    style={styles.orbGradient}
                />
            </Animated.View>

            {/* Content */}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    orb: {
        position: 'absolute',
        borderRadius: 9999,
        opacity: 0.15,
    },
    orbGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 9999,
    },
    orb1: {
        width: 300,
        height: 300,
        top: '10%',
        left: '5%',
    },
    orb2: {
        width: 250,
        height: 250,
        top: '50%',
        right: '5%',
    },
    orb3: {
        width: 200,
        height: 200,
        bottom: '15%',
        left: '20%',
    },
});
