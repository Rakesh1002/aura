/**
 * Aura Premium Color Palette
 * Dark mode focused with Gold/Accent highlights.
 */

export const Colors = {
    dark: {
        background: '#0A0A0A', // Deep Black
        surface: '#121212', // Slightly lighter black for cards
        surfaceHighlight: '#1E1E1E', // For pressed states or active cards
        text: '#FFFFFF',
        textSecondary: '#A0A0A0',
        textMuted: '#505050',
        primary: '#D4AF37', // Gold
        primaryVariant: '#C5A028',
        secondary: '#E0E0E0', // Off-white for secondary actions
        accent: '#FF453A', // Subtle red for errors or alerts
        border: '#2A2A2A',
        success: '#51CF66',
        error: '#FF6B6B',
        warning: '#FFB84D',
        info: '#4DABF7',
        overlay: 'rgba(0, 0, 0, 0.7)',
    },
    // We primarily support dark mode, but keeping a light structure just in case,
    // though it maps to dark values for now to enforce the aesthetic.
    light: {
        background: '#0A0A0A',
        surface: '#121212',
        surfaceHighlight: '#1E1E1E',
        text: '#FFFFFF',
        textSecondary: '#A0A0A0',
        textMuted: '#505050',
        primary: '#D4AF37',
        primaryVariant: '#C5A028',
        secondary: '#E0E0E0',
        accent: '#FF453A',
        border: '#2A2A2A',
        success: '#51CF66',
        error: '#FF6B6B',
        warning: '#FFB84D',
        info: '#4DABF7',
        overlay: 'rgba(0, 0, 0, 0.7)',
    },
};
