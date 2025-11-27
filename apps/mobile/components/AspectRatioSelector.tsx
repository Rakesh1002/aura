import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';

export type AspectRatio = '1:1' | '4:5' | '9:16' | '16:9';

interface AspectRatioSelectorProps {
    selected: AspectRatio;
    onSelect: (ratio: AspectRatio) => void;
}

const RATIOS: { id: AspectRatio; label: string; width: number; height: number }[] = [
    { id: '1:1', label: 'Square', width: 24, height: 24 },
    { id: '4:5', label: 'Portrait', width: 20, height: 25 },
    { id: '9:16', label: 'Story', width: 14, height: 25 },
    { id: '16:9', label: 'Landscape', width: 25, height: 14 },
];

export const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ selected, onSelect }) => {
    return (
        <View style={styles.container}>
            <Text style={[Typography.caption, styles.label]}>ASPECT RATIO</Text>
            <View style={styles.options}>
                {RATIOS.map((ratio) => (
                    <TouchableOpacity
                        key={ratio.id}
                        style={[
                            styles.option,
                            selected === ratio.id && styles.selectedOption,
                        ]}
                        onPress={() => onSelect(ratio.id)}
                    >
                        <View style={[
                            styles.icon,
                            { width: ratio.width, height: ratio.height },
                            selected === ratio.id ? styles.selectedIcon : styles.unselectedIcon
                        ]} />
                        <Text style={[
                            styles.optionLabel,
                            selected === ratio.id && styles.selectedOptionLabel,
                        ]}>
                            {ratio.id}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        color: Colors.dark.textMuted,
        marginBottom: 12,
        marginLeft: 4,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 16,
        padding: 4,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 12,
    },
    selectedOption: {
        backgroundColor: Colors.dark.surface,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    icon: {
        borderWidth: 1.5,
        marginBottom: 6,
        borderRadius: 2,
    },
    selectedIcon: {
        borderColor: Colors.dark.primary,
    },
    unselectedIcon: {
        borderColor: Colors.dark.textMuted,
    },
    optionLabel: {
        fontSize: 10,
        fontWeight: '600',
        color: Colors.dark.textMuted,
    },
    selectedOptionLabel: {
        color: Colors.dark.text,
    },
});
