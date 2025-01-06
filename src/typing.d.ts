interface TelegramWebApp {
  MainButton: any;
  BackButton: any;
  sendData(data: string): void;
  ready(): void;
}

interface TelegramGlobal {
  WebApp: TelegramWebApp;
}

interface Window {
  Telegram: TelegramGlobal;
}
