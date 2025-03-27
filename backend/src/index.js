import express from 'express';
import dotenv from 'dotenv';
import webhookRoutes from './routes/webhooks.js';
import ussdRoutes from './routes/ussd.js';

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/webhooks', webhookRoutes);
app.use('/ussd', ussdRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Pesadrop running on port ${PORT}`));
