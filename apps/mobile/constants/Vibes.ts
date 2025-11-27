export interface Vibe {
    id: string;
    name: string;
    description: string;
    category: 'Professional' | 'Creative' | 'Travel' | 'Lifestyle';
    image: string;
    defaultPrompt: string;
    price: number;
}

export const VIBES: Vibe[] = [
    // Professional
    {
        id: 'headshot-pro',
        name: 'Corporate Headshot',
        description: 'Polished, professional studio lighting suitable for LinkedIn.',
        category: 'Professional',
        image: 'https://picsum.photos/seed/headshot/400/500',
        defaultPrompt: 'Professional corporate headshot, studio lighting, neutral background, wearing a suit, confident expression, high quality, 8k',
        price: 50,
    },
    {
        id: 'tech-founder',
        name: 'Tech Founder',
        description: 'Modern, approachable look in a startup office setting.',
        category: 'Professional',
        image: 'https://picsum.photos/seed/tech/400/500',
        defaultPrompt: 'Tech founder portrait, modern office background, casual blazer, natural lighting, approachable smile, depth of field',
        price: 50,
    },

    // Travel
    {
        id: 'paris-cafe',
        name: 'Parisian Cafe',
        description: 'Enjoying a coffee at a chic sidewalk cafe in Paris.',
        category: 'Travel',
        image: 'https://picsum.photos/seed/paris/400/500',
        defaultPrompt: 'Sitting at a Parisian cafe, holding a coffee cup, Eiffel Tower in distant background, golden hour lighting, chic outfit, cinematic',
        price: 100,
    },
    {
        id: 'bali-beach',
        name: 'Bali Sunset',
        description: 'Relaxed vibe on a pristine tropical beach at sunset.',
        category: 'Travel',
        image: 'https://picsum.photos/seed/bali/400/500',
        defaultPrompt: 'Standing on a beach in Bali at sunset, tropical palm trees, ocean waves, linen outfit, warm glow, soft lighting',
        price: 100,
    },

    // Creative
    {
        id: 'cyberpunk',
        name: 'Cyberpunk City',
        description: 'Futuristic neon-lit city aesthetic.',
        category: 'Creative',
        image: 'https://picsum.photos/seed/cyber/400/500',
        defaultPrompt: 'Cyberpunk style portrait, neon lights, rainy futuristic city background, blue and pink hues, high contrast, digital art style',
        price: 75,
    },
    {
        id: 'oil-painting',
        name: 'Classic Oil Painting',
        description: 'Timeless portrait in the style of the old masters.',
        category: 'Creative',
        image: 'https://picsum.photos/seed/oil/400/500',
        defaultPrompt: 'Oil painting style portrait, textured brushstrokes, classical composition, dramatic lighting, rembrandt style',
        price: 75,
    },

    // Lifestyle
    {
        id: 'gym-fitness',
        name: 'Fitness Motivation',
        description: 'High-energy workout shot in a modern gym.',
        category: 'Lifestyle',
        image: 'https://picsum.photos/seed/gym/400/500',
        defaultPrompt: 'Fitness portrait in a modern gym, athletic wear, workout gear, energetic atmosphere, bright lighting, dynamic angle',
        price: 50,
    },
    {
        id: 'cozy-reading',
        name: 'Cozy Sunday',
        description: 'Relaxed reading nook with soft lighting.',
        category: 'Lifestyle',
        image: 'https://picsum.photos/seed/book/400/500',
        defaultPrompt: 'Cozy indoor portrait, reading a book by a window, oversized sweater, warm tea, soft morning light, hygge atmosphere',
        price: 50,
    },
];

export const CATEGORIES = ['All', 'Professional', 'Travel', 'Creative', 'Lifestyle'];
