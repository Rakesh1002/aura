import { create } from 'zustand';
import Purchases, { PurchasesPackage, PurchasesOffering } from 'react-native-purchases';
import { Platform } from 'react-native';

// Mock keys for dev - in production these would be in .env
const API_KEYS = {
  ios: 'appl_your_revenuecat_public_key',
  android: 'goog_your_revenuecat_public_key',
};

interface StoreState {
  isPro: boolean;
  credits: number;
  offerings: PurchasesOffering | null;
  initialize: () => Promise<void>;
  purchasePackage: (pack: PurchasesPackage) => Promise<void>;
  restorePurchases: () => Promise<void>;
  consumeCredit: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  isPro: false,
  credits: 3, // Give 3 free credits for demo
  offerings: null,

  initialize: async () => {
    if (Platform.OS === 'ios') {
      Purchases.configure({ apiKey: API_KEYS.ios });
    } else if (Platform.OS === 'android') {
      Purchases.configure({ apiKey: API_KEYS.android });
    }

    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current) {
        set({ offerings: offerings.current });
      }
      
      // Check initial status
      const customerInfo = await Purchases.getCustomerInfo();
      const isPro = customerInfo.entitlements.active['pro_access'] !== undefined; // 'pro_access' is the identifier in RevenueCat
      set({ isPro });
    } catch (e) {
      console.log('Store initialization failed (expected in dev without real keys)', e);
    }
  },

  purchasePackage: async (pack: PurchasesPackage) => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(pack);
      const isPro = customerInfo.entitlements.active['pro_access'] !== undefined;
      set({ isPro });
      
      // If it's a credit pack (consumable), logic would go here to add credits backend-side via webhooks
      // For this demo, we'll simulate adding credits locally if it's not a sub
      if (pack.product.productType === 'consumable') {
          set(state => ({ credits: state.credits + 10 }));
      }

    } catch (e: any) {
      if (!e.userCancelled) {
        console.error(e);
        throw new Error('Purchase failed');
      }
    }
  },

  restorePurchases: async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();
      const isPro = customerInfo.entitlements.active['pro_access'] !== undefined;
      set({ isPro });
    } catch (e) {
      console.error(e);
    }
  },
  
  consumeCredit: () => set(state => ({ credits: Math.max(0, state.credits - 1) }))
}));

