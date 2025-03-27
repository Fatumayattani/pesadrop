import express from 'express';
import { HederaService } from '../services/hedera.service.js';

const router = express.Router();

router.post('/ussd', async (req, res) => {
  const { phoneNumber, text } = req.body;
  let response;

  if (text === '') {
    response = `CON Welcome to Pesadrop:
    1. Check Balance`;
  } else if (text === '1') {
    const balance = await HederaService.getTokenBalance(phoneNumber);
    response = `END Your balance: ${balance} PESA-LT`;
  }

  res.set('Content-Type: text/plain');
  res.send(response);
});

export default router;
