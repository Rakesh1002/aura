import React from 'react';
import { StyleSheet, Modal, TouchableOpacity, ScrollView, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useStore } from '@/store/useStore';

interface PaywallProps {
  visible: boolean;
  onClose: () => void;
  reason?: string;
}

export function Paywall({ visible, onClose, reason = "Unlock Professional Features" }: PaywallProps) {
  const { purchasePackage, isPro } = useStore();

  // Mock Packages for UI Demo
  const mockPackages = [
    {
      identifier: 'monthly_pro',
      product: {
        title: 'Pro Monthly',
        priceString: '$9.99',
        description: 'Unlimited Master generations & Identity Vault.'
      }
    },
    {
      identifier: 'credits_pack_small',
      product: {
        title: '50 Credits',
        priceString: '$4.99',
        description: 'Pay as you go. Good for 50 Pro generations.'
      }
    }
  ];

  const handlePurchase = async (pack: any) => {
      // In real app: await purchasePackage(pack);
      // For demo:
      alert(`Simulating purchase of ${pack.product.title}`);
      onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView intensity={80} tint="dark" style={styles.container}>
        <ThemedView style={styles.card}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <IconSymbol name="xmark.circle.fill" size={30} color="#888" />
            </TouchableOpacity>

            <IconSymbol name="crown.fill" size={60} color="#FFD700" style={styles.icon} />
            <ThemedText type="title" style={styles.title}>Upgrade to Aura Pro</ThemedText>
            <ThemedText style={styles.subtitle}>{reason}</ThemedText>

            <View style={styles.features}>
                <FeatureRow text="Remove Watermarks" />
                <FeatureRow text="4K Master Resolution" />
                <FeatureRow text="Unlimited Identity Vault" />
                <FeatureRow text="Priority Reasoning Engine" />
            </View>

            <ScrollView style={styles.packages}>
                {mockPackages.map((pack) => (
                    <TouchableOpacity 
                        key={pack.identifier} 
                        style={styles.packageButton}
                        onPress={() => handlePurchase(pack)}
                    >
                        <View>
                            <ThemedText type="subtitle" style={styles.packTitle}>{pack.product.title}</ThemedText>
                            <ThemedText style={styles.packDesc}>{pack.product.description}</ThemedText>
                        </View>
                        <ThemedText type="subtitle" style={styles.price}>{pack.product.priceString}</ThemedText>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <ThemedText style={styles.disclaimer}>
                Recurring billing. Cancel anytime via App Store settings.
            </ThemedText>
        </ThemedView>
      </BlurView>
    </Modal>
  );
}

function FeatureRow({ text }: { text: string }) {
    return (
        <View style={styles.featureRow}>
            <IconSymbol name="checkmark.circle.fill" size={20} color="#4CAF50" />
            <ThemedText style={styles.featureText}>{text}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#1a1a1a', // Hardcoded dark for contrast
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  closeButton: {
      position: 'absolute',
      top: 15,
      right: 15,
      zIndex: 10,
  },
  icon: {
      marginBottom: 20,
  },
  title: {
      textAlign: 'center',
      marginBottom: 10,
  },
  subtitle: {
      textAlign: 'center',
      marginBottom: 30,
      opacity: 0.7,
  },
  features: {
      width: '100%',
      marginBottom: 30,
      gap: 12,
  },
  featureRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
  },
  featureText: {
      fontSize: 16,
  },
  packages: {
      width: '100%',
      maxHeight: 200,
  },
  packageButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: 16,
      borderRadius: 12,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'rgba(255,215,0,0.3)',
  },
  packTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
  },
  packDesc: {
      fontSize: 12,
      opacity: 0.7,
      maxWidth: 180,
  },
  price: {
      color: '#FFD700',
  },
  disclaimer: {
      fontSize: 10,
      opacity: 0.5,
      marginTop: 20,
      textAlign: 'center',
  },
});

