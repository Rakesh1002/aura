import React, { useState } from 'react';
import { View, StyleSheet, Image, PanResponder, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { Ionicons } from '@expo/vector-icons';

interface CompareScreenProps {
    beforeImage: string;
    afterImage: string;
    onClose: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const CompareScreen: React.FC<CompareScreenProps> = ({ beforeImage, afterImage, onClose }) => {
    const [sliderPosition, setSliderPosition] = useState(SCREEN_WIDTH / 2);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            const newPos = gestureState.moveX;
            if (newPos > 0 && newPos < SCREEN_WIDTH) {
                setSliderPosition(newPos);
            }
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Ionicons name="close" size={24} color={Colors.dark.text} />
                </TouchableOpacity>
                <Text style={[Typography.h3, styles.title]}>Transformation</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.imageContainer}>
                {/* After Image (Background) */}
                <Image source={{ uri: afterImage }} style={styles.image} />

                {/* Before Image (Foreground, clipped) */}
                <View style={[styles.beforeContainer, { width: sliderPosition }]}>
                    <Image source={{ uri: beforeImage }} style={styles.image} />
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Before</Text>
                    </View>
                </View>

                {/* After Label */}
                <View style={[styles.labelContainer, styles.afterLabel]}>
                    <Text style={styles.label}>After</Text>
                </View>

                {/* Slider Handle */}
                <View
                    style={[styles.slider, { left: sliderPosition }]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.sliderLine} />
                    <View style={styles.sliderHandle}>
                        <Ionicons name="code-outline" size={20} color={Colors.dark.background} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    closeButton: {
        padding: 8,
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 20,
    },
    title: {
        color: Colors.dark.text,
    },
    imageContainer: {
        flex: 1,
        position: 'relative',
    },
    image: {
        width: SCREEN_WIDTH,
        height: '100%',
        resizeMode: 'cover',
    },
    beforeContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        overflow: 'hidden',
        borderRightWidth: 1,
        borderColor: Colors.dark.text,
    },
    slider: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 40,
        marginLeft: -20, // Center the handle
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    sliderLine: {
        width: 2,
        height: '100%',
        backgroundColor: Colors.dark.text,
    },
    sliderHandle: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.dark.text,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    labelContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    afterLabel: {
        left: undefined,
        right: 20,
    },
    label: {
        color: Colors.dark.text,
        fontWeight: '600',
    },
});
