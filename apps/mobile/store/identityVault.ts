import { create } from 'zustand';

interface Photo {
  id: string;
  uri: string;
  qualityScore?: number; // 0-100
  issues?: string[]; // e.g., "Blurry", "Dark"
}

interface IdentityVaultState {
  photos: Photo[];
  isAnalyzed: boolean;
  addPhoto: (photo: Photo) => void;
  removePhoto: (id: string) => void;
  analyzePhotos: () => Promise<void>;
  reset: () => void;
}

export const useIdentityVault = create<IdentityVaultState>((set, get) => ({
  photos: [],
  isAnalyzed: false,
  addPhoto: (photo) => set((state) => ({ photos: [...state.photos, photo] })),
  removePhoto: (id) => set((state) => ({ photos: state.photos.filter((p) => p.id !== id) })),
  analyzePhotos: async () => {
    // Mock analysis process
    const { photos } = get();
    const analyzedPhotos = photos.map((p) => ({
      ...p,
      qualityScore: Math.floor(Math.random() * 30) + 70, // Mock score 70-100
      issues: Math.random() > 0.8 ? ['Lighting could be better'] : [],
    }));
    set({ photos: analyzedPhotos, isAnalyzed: true });
  },
  reset: () => set({ photos: [], isAnalyzed: false }),
}));
