import groqGPTService from "./GroqGPTService";

class GPT {
    constructor(gptService) {
        this.gptService = gptService;
    }

    _getFormattedPromptForMovies(prompt) {
        return `Act like a movie recommendation system and suggest maximum five movies for query: ${prompt}. Give movies list in the format given in the following example: 'Trap', 'The Killer', 'Twisters', 'Twilight'. Do not add any text apart from movies names.`;
    }
    getChatCompletion(prompt) {
        return this.gptService.getChatCompletion(this._getFormattedPromptForMovies(prompt));
    }
}
const gpt = new GPT(groqGPTService);
export default gpt;