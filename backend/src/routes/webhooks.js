import express from 'express';
import { MpesaService } from '../services/mpesa.service.js';
import { AIService } from '../services/ai.service.js';
import { HederaService } from '../services/hedera.service.js';
import { SMSService } from '../services/sms.service.js';

const router = express.Router();

router.post('/mpesa-webhook', async (req, res) => {
  const { phone, amount } = req.body;

  try {
    // Fetch transaction history from M-Pesa
    const history = await MpesaService.getTransactionHistory(phone);

    // AI analyzes history and decides rewards
    const reward = await AIService.calculateReward(history);

    // Airdrop loyalty tokens to the user's Hedera account
    await HederaService.airdropTokens([{ accountId: phone, amount: reward.tokens }]);

    // Send an SMS notification about the reward
    await SMSService.sendSMS(phone, `You have received ${reward.tokens} PESA-LT tokens!`);

    res.status(200).json({ message: 'Reward sent successfully!' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
