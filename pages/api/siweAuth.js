import { SiweMessage } from 'siwe';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature } = req.body;
  try {
    const siweMessage = new SiweMessage(message);
    await siweMessage.validate(signature);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(400).json({ ok: false });
  }
}