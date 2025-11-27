import { create } from 'zustand';

export interface Creation {
    id: string;
    uri: string;
    prompt: string;
    vibeId: string;
    createdAt: number;
}

interface CreationsState {
    creations: Creation[];
    addCreation: (creation: Creation) => void;
    deleteCreation: (id: string) => void;
}

export const useCreations = create<CreationsState>((set) => ({
    creations: [
        // Mock initial data
        {
            id: '1',
            uri: 'https://picsum.photos/seed/1/400/500', // Placeholder
            prompt: 'Me at a Paris Cafe',
            vibeId: 'travel',
            createdAt: Date.now(),
        },
        {
            id: '2',
            uri: 'https://picsum.photos/seed/2/400/500',
            prompt: 'Professional Headshot',
            vibeId: 'professional',
            createdAt: Date.now() - 86400000,
        },
    ],
    addCreation: (creation) => set((state) => ({ creations: [creation, ...state.creations] })),
    deleteCreation: (id) => set((state) => ({ creations: state.creations.filter((c) => c.id !== id) })),
}));
