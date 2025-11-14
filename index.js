import express from "express";
import bodyParser from "body-parser";
import { handleTelegramWebhook } from "./src/telegram.js";

const app = express();
app.use(bodyParser.json());

// Telegram webhook endpoint
app.post("/webhook", handleTelegramWebhook);

app.get("/", (req, res) => {
  res.send("Telegram GAS Dispatcher is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
