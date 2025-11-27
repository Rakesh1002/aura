/**
 * Aura Typography System
 * Modern, clean, and readable.
 */

import { TextStyle } from 'react-native';

export const Typography = {
    h1: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        letterSpacing: -0.5,
    } as TextStyle,
    h2: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
        letterSpacing: -0.3,
    } as TextStyle,
    h3: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 28,
    } as TextStyle,
    body: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    } as TextStyle,
    bodySmall: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    } as TextStyle,
    caption: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: '#A0A0A0',
    } as TextStyle,
    button: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.5,
    } as TextStyle,
};
