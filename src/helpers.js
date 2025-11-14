import axios from "axios";
import { TG_API } from "./config.js";

export async function sendMessage(chatId, text) {
  return axios.post(`${TG_API}/sendMessage`, {
    chat_id: chatId,
    text
  });
}
