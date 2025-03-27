import Africastalking from 'africastalking';
import dotenv from 'dotenv';

dotenv.config();
const at = Africastalking({
  apiKey: process.env.AFRICASTALKING_API_KEY,
  username: process.env.AFRICASTALKING_USERNAME
});

export class SMSService {
  static async sendSMS(phone, message) {
    return await at.SMS.send({
      to: phone,
      message: message
    });
  }
}
