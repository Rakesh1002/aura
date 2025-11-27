import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Colors } from '@/constants/Colors';

interface SkeletonLoaderProps {
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    style?: any;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    width = '100%',
    height = 20,
    borderRadius = 4,
    style,
}) => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [opacity]);

    return (
        <Animated.View
            style={[
                styles.skeleton,
                {
                    width,
                    height,
                    borderRadius,
                    opacity,
                },
                style,
            ]}
        />
    );
};

export const SkeletonCard: React.FC = () => (
    <View style={styles.card}>
        <SkeletonLoader height={200} borderRadius={16} style={{ marginBottom: 12 }} />
        <SkeletonLoader height={20} width="80%" style={{ marginBottom: 8 }} />
        <SkeletonLoader height={16} width="60%" />
    </View>
);

export const SkeletonList: React.FC<{ count?: number }> = ({ count = 3 }) => (
    <View style={styles.list}>
        {Array.from({ length: count }).map((_, index) => (
            <View key={index} style={styles.listItem}>
                <SkeletonLoader width={60} height={60} borderRadius={12} />
                <View style={styles.listItemContent}>
                    <SkeletonLoader height={16} width="70%" style={{ marginBottom: 8 }} />
                    <SkeletonLoader height={14} width="50%" />
                </View>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: Colors.dark.surfaceHighlight,
    },
    card: {
        padding: 16,
        marginBottom: 16,
    },
    list: {
        padding: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    listItemContent: {
        flex: 1,
        marginLeft: 12,
    },
});
