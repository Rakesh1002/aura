import { FileSystem } from 'expo-file-system';

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || '';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

type ModelType = 'flash' | 'pro';

const MODELS = {
  flash: 'gemini-2.5-flash-image', // "nano-banana"
  pro: 'gemini-3-pro-image-preview', // "nano-banana-pro"
};

interface GenerateImageParams {
  prompt: string;
  referenceImages?: string[]; // Array of base64 strings
  imageToEdit?: string; // Base64 string of the image to modify
  aspectRatio?: '1:1' | '4:5' | '16:9' | '9:16';
  modelType?: ModelType;
  systemInstruction?: string;
}

export const GeminiService = {
  /**
   * Generates an image using the specified Gemini model.
   */
  generateImage: async ({
    prompt,
    referenceImages = [],
    imageToEdit,
    aspectRatio = '1:1',
    modelType = 'flash',
    systemInstruction
  }: GenerateImageParams) => {
    const model = MODELS[modelType];
    const url = `${BASE_URL}/${model}:generateContent?key=${GEMINI_API_KEY}`;

    // Construct the parts array
    const parts: any[] = [{ text: prompt }];
    
    // Add reference images (Identity)
    referenceImages.forEach((base64) => {
      const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
      parts.push({
        inline_data: {
          mime_type: 'image/jpeg',
          data: cleanBase64,
        },
      });
    });

    // Add Image to Edit (if any)
    // If editing, this usually goes into the parts as well, often with specific instruction in prompt.
    if (imageToEdit) {
        const cleanBase64 = imageToEdit.replace(/^data:image\/\w+;base64,/, '');
        parts.push({
            inline_data: {
                mime_type: 'image/jpeg',
                data: cleanBase64,
            }
        });
    }

    const payload: any = {
      contents: [{ parts }],
      generationConfig: {
        responseModalities: ['IMAGE'],
      }
    };

    // Add System Instruction if provided (usually works for text models, but check if image models support it)
    // For image models, it's often safer to prepend to the prompt if system_instruction isn't explicitly supported for the image endpoint.
    // However, Gemini 1.5 Pro supports it. Let's try explicit field first, or fall back to prompt injection if needed.
    // Given "Banana Pro" is a new model, we'll assume it supports the standard `system_instruction` field.
    if (systemInstruction) {
        payload.system_instruction = {
            parts: [{ text: systemInstruction }]
        };
    }

    // Specific config for Pro model (Banana Pro)
    if (modelType === 'pro') {
      payload.generationConfig.responseModalities = ['TEXT', 'IMAGE']; // Enable reasoning + image
      payload.generationConfig.imageConfig = {
         aspectRatio: aspectRatio,
         imageSize: '1K' // Default to 1K for now, can be 2K/4K
      };
    } else {
        // Flash model config
         payload.generationConfig.responseModalities = ['IMAGE'];
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API Error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      
      // Parse response. 
      const parts = data?.candidates?.[0]?.content?.parts || [];
      
      let generatedImageBase64 = null;
      let reasoningText = null;

      for (const part of parts) {
        if (part.inline_data) {
          generatedImageBase64 = part.inline_data.data;
        } else if (part.text) {
          reasoningText = part.text;
        }
      }
      
      if (!generatedImageBase64) {
        console.log('Full Response:', JSON.stringify(data, null, 2));
        throw new Error('No image generated. Check logs for details.');
      }

      return {
        image: generatedImageBase64,
        reasoning: reasoningText
      };
    } catch (error) {
      console.error('Gemini Service Error:', error);
      throw error;
    }
  },
};
