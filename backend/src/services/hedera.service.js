import { HederaAgentKit } from 'hedera-agent-kit';
import dotenv from 'dotenv';

dotenv.config();
const hedera = new HederaAgentKit(
  process.env.HEDERA_ACCOUNT_ID,
  process.env.HEDERA_PRIVATE_KEY,
  process.env.HEDERA_NETWORK
);

export class HederaService {
  static async createLoyaltyToken() {
    return await hedera.createFungibleToken({
      name: "PESA-LT",
      symbol: "PESA",
      initialSupply: 1000000,
      decimals: 2
    });
  }

  static async airdropTokens(recipients) {
    return await hedera.airdropTokens({
      tokenId: process.env.TOKEN_ID,
      recipients
    });
  }
}
