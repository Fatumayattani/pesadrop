import { MPesa } from 'mpesa-node';
import dotenv from 'dotenv';

dotenv.config();
const mpesa = new MPesa({
  apiKey: process.env.MPESA_API_KEY,
  publicKey: process.env.MPESA_PUBLIC_KEY
});

export class MpesaService {
  static async getTransactionHistory(phone) {
    return await mpesa.getTransactionHistory(phone);
  }
}

