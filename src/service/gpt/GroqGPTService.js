import Groq from 'groq-sdk';
import { GPTServiceInterface } from './GPTServiceInterface';

class GroqGPTService extends GPTServiceInterface {
    groq;
    constructor() {
        super();
        this.groq = new Groq({
            apiKey: atob(import.meta.env.VITE_GROQ_API_KEY),
            dangerouslyAllowBrowser: true,
        });
    }
    async getChatCompletion(prompt) {
        try {
            return this.groq.chat.completions.create({
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                model: 'llama3-70b-8192'
            });
        } catch (error) {
            console.error("Groq :: getChatCompletion :: error", error);
            throw error;
        }
    }

}

const groqGPTService = new GroqGPTService();
export default groqGPTService;