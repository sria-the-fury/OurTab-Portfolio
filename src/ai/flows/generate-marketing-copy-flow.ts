'use server';
/**
 * @fileOverview A Genkit flow for generating marketing copy (descriptions, headlines, CTAs)
 * based on a provided app URL.
 *
 * - generateMarketingCopy - A function that handles the marketing copy generation process.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  appUrl: z.string().url().describe("The URL of the application for which to generate marketing copy."),
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  description: z.string().describe("A compelling app description."),
  headline: z.string().describe("A catchy headline for the app."),
  callToAction: z.string().describe("A clear and persuasive call-to-action."),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(
  input: GenerateMarketingCopyInput
): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const marketingCopyPrompt = ai.definePrompt({
  name: 'marketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in app promotion. Your task is to generate compelling marketing copy for an app.

Based on the following app URL, create a catchy headline, a concise app description, and a persuasive call-to-action.

App URL: {{{appUrl}}}`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await marketingCopyPrompt(input);
    return output!;
  }
);
