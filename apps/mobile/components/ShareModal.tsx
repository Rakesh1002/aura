import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, Share } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

interface ShareModalProps {
    visible: boolean;
    onClose: () => void;
    imageUri: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ visible, onClose, imageUri }) => {
    const handleShare = async () => {
        try {
            await Share.share({
                url: imageUri,
                message: 'Check out my Aura! #AuraApp',
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleInstagramStory = () => {
        // In a real app, this would use Linking to open Instagram Stories with the image
        // For now, we'll simulate it with a standard share
        handleShare();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backdrop} onPress={onClose} />
                <View style={styles.container}>
                    <View style={styles.handle} />
                    <Text style={[Typography.h3, styles.title]}>Share Your Aura</Text>

                    <View style={styles.previewContainer}>
                        <Image source={{ uri: imageUri }} style={styles.previewImage} />
                        <View style={styles.watermark}>
                            <Text style={styles.watermarkText}>Aura</Text>
                        </View>
                    </View>

                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.optionButton} onPress={handleInstagramStory}>
                            <View style={[styles.iconContainer, { backgroundColor: '#E1306C' }]}>
                                <Ionicons name="logo-instagram" size={24} color="white" />
                            </View>
                            <Text style={styles.optionText}>Stories</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton} onPress={handleShare}>
                            <View style={[styles.iconContainer, { backgroundColor: Colors.dark.primary }]}>
                                <Ionicons name="share-outline" size={24} color={Colors.dark.background} />
                            </View>
                            <Text style={styles.optionText}>More</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton} onPress={onClose}>
                            <View style={[styles.iconContainer, { backgroundColor: Colors.dark.surfaceHighlight }]}>
                                <Ionicons name="download-outline" size={24} color={Colors.dark.text} />
                            </View>
                            <Text style={styles.optionText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        backgroundColor: Colors.dark.surface,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        paddingBottom: 40,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: Colors.dark.surfaceHighlight,
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 24,
    },
    title: {
        color: Colors.dark.text,
        textAlign: 'center',
        marginBottom: 24,
    },
    previewContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    previewImage: {
        width: 150,
        height: 200,
        borderRadius: 16,
    },
    watermark: {
        position: 'absolute',
        bottom: 10,
        right: 10, // Adjust based on image width centering
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    watermarkText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionButton: {
        alignItems: 'center',
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    optionText: {
        color: Colors.dark.textSecondary,
        fontSize: 12,
    },
});
