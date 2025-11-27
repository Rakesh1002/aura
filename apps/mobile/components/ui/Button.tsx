import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    style,
    textStyle,
    icon,
}) => {
    const getBackgroundColor = () => {
        if (disabled) return Colors.dark.surfaceHighlight;
        switch (variant) {
            case 'primary':
                return Colors.dark.primary;
            case 'secondary':
                return Colors.dark.surfaceHighlight;
            case 'outline':
            case 'ghost':
                return 'transparent';
            default:
                return Colors.dark.primary;
        }
    };

    const getTextColor = () => {
        if (disabled) return Colors.dark.textMuted;
        switch (variant) {
            case 'primary':
                return Colors.dark.background; // Dark text on gold button
            case 'secondary':
                return Colors.dark.text;
            case 'outline':
                return Colors.dark.primary;
            case 'ghost':
                return Colors.dark.textSecondary;
            default:
                return Colors.dark.background;
        }
    };

    const getBorder = () => {
        if (variant === 'outline') {
            return {
                borderWidth: 1,
                borderColor: disabled ? Colors.dark.textMuted : Colors.dark.primary,
            };
        }
        return {};
    };

    const getHeight = () => {
        switch (size) {
            case 'small': return 36;
            case 'large': return 56;
            default: return 48;
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                styles.container,
                {
                    backgroundColor: getBackgroundColor(),
                    height: getHeight(),
                    ...getBorder(),
                },
                style,
            ]}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <>
                    {icon && icon}
                    <Text
                        style={[
                            styles.text,
                            Typography.button,
                            { color: getTextColor(), marginLeft: icon ? 8 : 0 },
                            textStyle,
                        ]}
                    >
                        {title}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    text: {
        textAlign: 'center',
    },
});
