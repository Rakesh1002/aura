import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageBackground, View, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { LinearGradient } from 'expo-linear-gradient';

interface VibeCardProps {
    title: string;
    description?: string;
    imageSource: { uri: string } | number;
    onPress: () => void;
    price?: string;
    style?: ViewStyle;
}

export const VibeCard: React.FC<VibeCardProps> = ({
    title,
    description,
    imageSource,
    onPress,
    price,
    style,
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container, style]}>
            <ImageBackground
                source={imageSource}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.gradient}
                >
                    <View style={styles.content}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.title, Typography.h3]}>{title}</Text>
                            {description && (
                                <Text style={[styles.description, Typography.caption]} numberOfLines={2}>
                                    {description}
                                </Text>
                            )}
                        </View>
                        {price && (
                            <View style={styles.priceTag}>
                                <Text style={[styles.priceText, Typography.bodySmall]}>{price}</Text>
                            </View>
                        )}
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 160,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: Colors.dark.surfaceHighlight,
        marginRight: 12,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageStyle: {
        borderRadius: 16,
    },
    gradient: {
        height: '100%',
        justifyContent: 'flex-end',
        padding: 12,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        color: Colors.dark.text,
        marginBottom: 4,
    },
    description: {
        color: Colors.dark.textSecondary,
    },
    priceTag: {
        backgroundColor: Colors.dark.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    priceText: {
        color: Colors.dark.background,
        fontWeight: 'bold',
    },
});
