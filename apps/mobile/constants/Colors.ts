/**
 * Aura Pop Color Palette
 * Vibrant, premium design system matching web app aesthetic
 */

export const Colors = {
    // Pop Color Palette - Primary vibrant colors
    pop: {
        pink: '#ff2d92',
        blue: '#00d4ff',
        purple: '#a855f7',
        orange: '#ff6b35',
        lime: '#b8ff57',
        yellow: '#ffd23f',
        coral: '#ff6b6b',
    },

    // Gradients for visual impact
    gradients: {
        primary: ['#ff2d92', '#a855f7'], // Pink to Purple
        cool: ['#00d4ff', '#a855f7'], // Blue to Purple
        warm: ['#ff6b35', '#ff2d92', '#ffd23f'], // Orange to Pink to Yellow
        lime: ['#b8ff57', '#00d4ff'], // Lime to Blue
    },

    dark: {
        // Backgrounds
        background: '#0d0015', // Deep rich dark
        backgroundAlt: '#0a0a0a', // Slightly lighter
        surface: '#1a1a1a', // Card backgrounds
        surfaceHighlight: '#252525', // Elevated surfaces

        // Text
        text: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.7)',
        textMuted: 'rgba(255, 255, 255, 0.4)',

        // Primary actions - using pop pink
        primary: '#ff2d92',
        primaryVariant: '#e01a7a',

        // Secondary
        secondary: '#00d4ff',
        secondaryVariant: '#00b8e0',

        // Accent
        accent: '#a855f7',
        accentVariant: '#9333ea',

        // Borders & Dividers
        border: 'rgba(255, 255, 255, 0.08)',
        borderHighlight: 'rgba(255, 255, 255, 0.15)',

        // Status colors
        success: '#51CF66',
        error: '#ff6b6b',
        warning: '#ffd23f',
        info: '#00d4ff',

        // Overlays
        overlay: 'rgba(0, 0, 0, 0.7)',
        overlayLight: 'rgba(0, 0, 0, 0.5)',

        // Glass-morphism
        glass: 'rgba(255, 255, 255, 0.03)',
        glassBorder: 'rgba(255, 255, 255, 0.08)',
    },

    // Light mode (maps to dark for now - dark-first design)
    light: {
        background: '#0d0015',
        backgroundAlt: '#0a0a0a',
        surface: '#1a1a1a',
        surfaceHighlight: '#252525',
        text: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.7)',
        textMuted: 'rgba(255, 255, 255, 0.4)',
        primary: '#ff2d92',
        primaryVariant: '#e01a7a',
        secondary: '#00d4ff',
        secondaryVariant: '#00b8e0',
        accent: '#a855f7',
        accentVariant: '#9333ea',
        border: 'rgba(255, 255, 255, 0.08)',
        borderHighlight: 'rgba(255, 255, 255, 0.15)',
        success: '#51CF66',
        error: '#ff6b6b',
        warning: '#ffd23f',
        info: '#00d4ff',
        overlay: 'rgba(0, 0, 0, 0.7)',
        overlayLight: 'rgba(0, 0, 0, 0.5)',
        glass: 'rgba(255, 255, 255, 0.03)',
        glassBorder: 'rgba(255, 255, 255, 0.08)',
    },
};
