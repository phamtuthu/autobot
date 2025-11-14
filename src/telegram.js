import { sendMessage } from "./helpers.js";
import { dispatchAction } from "./dispatcher.js";

export async function handleTelegramWebhook(req, res) {
  const msg = req.body.message;
  if (!msg) return res.sendStatus(200);

  const chatId = msg.chat.id;
  const text = msg.text?.trim();

  if (!text.startsWith("/")) 
    return res.sendStatus(200);

  const command = text.slice(1);

  await sendMessage(chatId, `⏳ Đang chạy lệnh: ${command}...`);

  const result = await dispatchAction(command);

  await sendMessage(chatId, result);

  res.sendStatus(200);
}
