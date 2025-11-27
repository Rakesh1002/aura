/**
 * Aura Typography System
 * Modern, bold, and impactful design matching web aesthetic
 */

import { TextStyle } from 'react-native';

export const Typography = {
    // Display - Extra large, hero text
    display: {
        fontSize: 48,
        fontWeight: '800',
        lineHeight: 56,
        letterSpacing: -1,
    } as TextStyle,

    // Headings
    h1: {
        fontSize: 36,
        fontWeight: '700',
        lineHeight: 44,
        letterSpacing: -0.5,
    } as TextStyle,

    h2: {
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 36,
        letterSpacing: -0.3,
    } as TextStyle,

    h3: {
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 30,
        letterSpacing: -0.2,
    } as TextStyle,

    h4: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 26,
    } as TextStyle,

    // Body text
    body: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    } as TextStyle,

    bodyLarge: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 28,
    } as TextStyle,

    bodySmall: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    } as TextStyle,

    // Utility
    caption: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        letterSpacing: 0.2,
    } as TextStyle,

    overline: {
        fontSize: 11,
        fontWeight: '600',
        lineHeight: 16,
        letterSpacing: 1,
        textTransform: 'uppercase',
    } as TextStyle,

    // Interactive
    button: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.5,
    } as TextStyle,

    buttonLarge: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 28,
        letterSpacing: 0.5,
    } as TextStyle,

    link: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        textDecorationLine: 'underline',
    } as TextStyle,
};
