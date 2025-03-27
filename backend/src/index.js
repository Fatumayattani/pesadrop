import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import webhookRoutes from './routes/webhooks.js';
import ussdRoutes from './routes/ussd.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/webhooks', webhookRoutes);
app.use('/ussd', ussdRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Pesadrop backend running on port ${PORT}`));
