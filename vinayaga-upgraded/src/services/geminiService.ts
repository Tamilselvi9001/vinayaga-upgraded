/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { ProductDetails } from "../types";

// Initialize the Gemini API client
// Note: process.env.GEMINI_API_KEY is automatically injected by the environment
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

const SYSTEM_INSTRUCTION = `You are a product detail assistant for an industrial equipment website.

When a user sends a product name and SKU, respond ONLY with a valid JSON object. No markdown, no backticks, no explanation, no extra text. Just raw JSON.

Format:
{
  "name": "product name",
  "sku": "#SKU-001",
  "category": "category name",
  "grade": "Industrial Grade",
  "rating": 4,
  "description": "2-3 sentence product description relevant to product type.",
  "specs": {
    "Key1": "Value1",
    "Key2": "Value2",
    "Key3": "Value3",
    "Key4": "Value4",
    "Key5": "Value5"
  },
  "whatsapp_message": "Hi, I am interested in [product name] (SKU: #SKU-001). Please share more details and pricing."
}

Rules:
- For UPS Systems: specs = Power Output, Battery Type, Backup Time, Efficiency, Warranty
- For Batteries: specs = Capacity, Voltage, Cycle Life, Chemistry, Warranty
- For RO Systems: specs = Flow Rate, Filter Stages, TDS Reduction, Tank Capacity, Warranty
- For CCTV Systems: specs = Resolution, Night Vision, Storage, Connectivity, Warranty
- For Solar Panels: specs = Wattage, Efficiency, Cell Type, Dimensions, Warranty
- Rating must be 3, 4, or 5 (integer)
- Always generate realistic industrial-grade specifications`;

export async function fetchProductDetails(name: string, sku: string): Promise<Partial<ProductDetails>> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Product: ${name}, SKU: ${sku}`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            sku: { type: Type.STRING },
            category: { type: Type.STRING },
            grade: { type: Type.STRING },
            rating: { type: Type.INTEGER },
            description: { type: Type.STRING },
            specs: {
              type: Type.OBJECT,
              properties: {
                "Power Output": { type: Type.STRING },
                "Battery Type": { type: Type.STRING },
                "Backup Time": { type: Type.STRING },
                "Efficiency": { type: Type.STRING },
                "Warranty": { type: Type.STRING },
                "Capacity": { type: Type.STRING },
                "Voltage": { type: Type.STRING },
                "Cycle Life": { type: Type.STRING },
                "Chemistry": { type: Type.STRING },
                "Flow Rate": { type: Type.STRING },
                "Filter Stages": { type: Type.STRING },
                "TDS Reduction": { type: Type.STRING },
                "Tank Capacity": { type: Type.STRING },
                "Resolution": { type: Type.STRING },
                "Night Vision": { type: Type.STRING },
                "Storage": { type: Type.STRING },
                "Connectivity": { type: Type.STRING },
                "Wattage": { type: Type.STRING },
                "Cell Type": { type: Type.STRING },
                "Dimensions": { type: Type.STRING },
              }
            },
            whatsapp_message: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text || '{}';
    const json = JSON.parse(text);
    
    // Convert specs object to a more manageable format or keep as is
    // The current ProductDetails types expects Record<string, string> for specs
    return json;
  } catch (error) {
    console.error("Error fetching product details from Gemini:", error);
    throw error;
  }
}
