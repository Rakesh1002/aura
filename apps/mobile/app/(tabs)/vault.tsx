import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { useIdentityVault } from '@/store/identityVault';
import { usePermissions } from '@/hooks/usePermissions';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

export default function VaultScreen() {
    const { photos, removePhoto, addPhoto } = useIdentityVault();
    const { requestMediaLibraryPermission } = usePermissions();

    const handleAddPhoto = async () => {
        const hasPermission = await requestMediaLibraryPermission();
        if (!hasPermission) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.8,
            allowsMultipleSelection: true,
        });

        if (!result.canceled) {
            result.assets.forEach((asset) => {
                addPhoto({
                    id: asset.assetId || Math.random().toString(),
                    uri: asset.uri,
                });
            });
        }
    };

    const handleDelete = (id: string) => {
        Alert.alert(
            'Delete Photo',
            'Are you sure you want to remove this photo from your Vault?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => removePhoto(id) },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[Typography.h1, styles.title]}>Identity Vault</Text>
                <TouchableOpacity onPress={handleAddPhoto} style={styles.addButton}>
                    <Ionicons name="add" size={24} color={Colors.dark.background} />
                </TouchableOpacity>
            </View>

            <Text style={[Typography.body, styles.subtitle]}>
                Manage your reference photos. Keep your vault updated for better results.
            </Text>

            <FlatList
                data={photos}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                    <View style={styles.photoContainer}>
                        <Image source={{ uri: item.uri }} style={styles.photo} />
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => handleDelete(item.id)}
                        >
                            <Ionicons name="close-circle" size={24} color={Colors.dark.accent} />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={[Typography.body, { color: Colors.dark.textMuted }]}>
                            No photos in vault. Add some to get started.
                        </Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 8,
    },
    title: {
        color: Colors.dark.text,
    },
    subtitle: {
        color: Colors.dark.textSecondary,
        marginBottom: 24,
    },
    addButton: {
        backgroundColor: Colors.dark.primary,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        paddingBottom: 20,
    },
    photoContainer: {
        flex: 1 / 3,
        aspectRatio: 1,
        margin: 4,
        position: 'relative',
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    deleteButton: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: Colors.dark.background,
        borderRadius: 12,
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 40,
    },
});
