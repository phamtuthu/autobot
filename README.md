# Telegram → Railway → Google Apps Script Dispatcher

Hệ thống cho phép gửi command từ Telegram để gọi đến nhiều Apps Script Project khác nhau.

## Kiến trúc
Telegram → Railway (Node.js) → Apps Script Web App → Railway → Telegram

## Tính năng
- Map nhiều GScript theo từng command
- Railway chỉ làm nhiệm vụ route, không xử lý logic
- Trả log xử lý ngay trên Telegram
- Không timeout, không 502

## Cách triển khai

### 1. Thêm Environment Variables trên Railway
- TELEGRAM_TOKEN = your bot token
- GAS_SECRET = custom secret key

### 2. Deploy Telegram Webhook
