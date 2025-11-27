import { useState, useEffect } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface PermissionState {
    hasCameraPermission: boolean;
    hasMediaLibraryPermission: boolean;
    requestCameraPermission: () => Promise<boolean>;
    requestMediaLibraryPermission: () => Promise<boolean>;
}

export const usePermissions = (): PermissionState => {
    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);

    useEffect(() => {
        checkPermissions();
    }, []);

    const checkPermissions = async () => {
        const cameraStatus = await ImagePicker.getCameraPermissionsAsync();
        const mediaLibraryStatus = await ImagePicker.getMediaLibraryPermissionsAsync();

        setHasCameraPermission(cameraStatus.granted);
        setHasMediaLibraryPermission(mediaLibraryStatus.granted);
    };

    const requestCameraPermission = async (): Promise<boolean> => {
        const { status, canAskAgain } = await ImagePicker.getCameraPermissionsAsync();

        if (status === 'granted') {
            setHasCameraPermission(true);
            return true;
        }

        if (!canAskAgain) {
            Alert.alert(
                'Camera Permission Required',
                'Please enable camera access in your settings to take photos for your Identity Vault.',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Open Settings', onPress: () => Linking.openSettings() },
                ]
            );
            return false;
        }

        // Custom explanation before system dialog
        return new Promise((resolve) => {
            Alert.alert(
                'Camera Access',
                'Aura needs camera access to let you take photos for your Identity Vault.',
                [
                    { text: 'Cancel', style: 'cancel', onPress: () => resolve(false) },
                    {
                        text: 'Continue',
                        onPress: async () => {
                            const { status: newStatus } = await ImagePicker.requestCameraPermissionsAsync();
                            setHasCameraPermission(newStatus === 'granted');
                            resolve(newStatus === 'granted');
                        },
                    },
                ]
            );
        });
    };

    const requestMediaLibraryPermission = async (): Promise<boolean> => {
        const { status, canAskAgain } = await ImagePicker.getMediaLibraryPermissionsAsync();

        if (status === 'granted') {
            setHasMediaLibraryPermission(true);
            return true;
        }

        if (!canAskAgain) {
            Alert.alert(
                'Photo Library Permission Required',
                'Please enable photo library access in your settings to upload photos to your Identity Vault.',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Open Settings', onPress: () => Linking.openSettings() },
                ]
            );
            return false;
        }

        return new Promise((resolve) => {
            Alert.alert(
                'Photo Library Access',
                'Aura needs access to your photos to let you select reference images for your Identity Vault.',
                [
                    { text: 'Cancel', style: 'cancel', onPress: () => resolve(false) },
                    {
                        text: 'Continue',
                        onPress: async () => {
                            const { status: newStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                            setHasMediaLibraryPermission(newStatus === 'granted');
                            resolve(newStatus === 'granted');
                        },
                    },
                ]
            );
        });
    };

    return {
        hasCameraPermission,
        hasMediaLibraryPermission,
        requestCameraPermission,
        requestMediaLibraryPermission,
    };
};
