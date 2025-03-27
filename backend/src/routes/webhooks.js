import express from 'express';
import { AIService } from '../services/ai.service.js';
import { HederaService } from '../services/hedera.service.js';

const router = express.Router();

router.post('/mpesa-webhook', async (req, res) => {
  const { phone, amount } = req.body;

  const history = await MpesaService.getTransactionHistory(phone);
  const reward = await AIService.calculateReward(history);

  await HederaService.airdropTokens([{ accountId: phone, amount: reward.tokens }]);

  res.status(200).send('Reward sent!');
});

export default router;
