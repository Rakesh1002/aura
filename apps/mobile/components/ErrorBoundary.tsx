import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log to crash reporting service (e.g., Sentry, Firebase Crashlytics)
        console.error('Error caught by boundary:', error, errorInfo);
        // TODO: Send to analytics/crash reporting
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={64} color={Colors.dark.error} />
                    </View>
                    <Text style={[Typography.h2, styles.title]}>Oops! Something went wrong</Text>
                    <Text style={[Typography.body, styles.message]}>
                        We're sorry for the inconvenience. The app encountered an unexpected error.
                    </Text>
                    {__DEV__ && this.state.error && (
                        <View style={styles.errorDetails}>
                            <Text style={styles.errorText}>{this.state.error.toString()}</Text>
                        </View>
                    )}
                    <TouchableOpacity style={styles.button} onPress={this.handleReset}>
                        <Text style={styles.buttonText}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    iconContainer: {
        marginBottom: 24,
    },
    title: {
        color: Colors.dark.text,
        marginBottom: 12,
        textAlign: 'center',
    },
    message: {
        color: Colors.dark.textSecondary,
        textAlign: 'center',
        marginBottom: 32,
    },
    errorDetails: {
        backgroundColor: Colors.dark.surfaceHighlight,
        padding: 16,
        borderRadius: 8,
        marginBottom: 24,
        maxWidth: '100%',
    },
    errorText: {
        color: Colors.dark.error,
        fontSize: 12,
        fontFamily: 'monospace',
    },
    button: {
        backgroundColor: Colors.dark.primary,
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 24,
    },
    buttonText: {
        color: Colors.dark.background,
        fontWeight: '600',
        fontSize: 16,
    },
});
