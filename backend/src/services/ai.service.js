import { LangChain } from 'langchain';

const chain = new LangChain({
  model: 'ai4d/swahili-gpt',
  temperature: 0.7
});

export class AIService {
  static async calculateReward(transactionHistory) {
    const prompt = `
    Historia ya manunuzi:
    ${JSON.stringify(transactionHistory)}

    Tuzo inapaswa kuwa kiasi gani? (Jibu kwa JSON):
    {
      "tokens": number,
      "message": string
    }`;

    return await chain.invoke(prompt);
  }
}
