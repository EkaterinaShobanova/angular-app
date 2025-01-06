import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Интерфейс для функционала кнопок
interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
  enable(): void;
  disable(): void;
}

// Интерфейс для WebApp Telegram
interface TelegramWebApp {
  MainButton: TgButton;
  BackButton: TgButton;
  sendData(data: string): void;
  ready(): void;
}

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private window: Window;
  tg: TelegramWebApp | null = null;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView as Window;

    // Проверка существования Telegram API
    if (this.window?.Telegram?.WebApp) {
      this.tg = this.window.Telegram.WebApp;
    } else {
      console.warn('Telegram WebApp API is not available.');
    }
  }

  get MainButton(): TgButton | null {
    return this.tg?.MainButton || null;
  }

  get BackButton(): TgButton | null {
    return this.tg?.BackButton || null;
  }

  sendData(data: object) {
    if (this.tg) {
      this.tg.sendData(JSON.stringify(data));
    } else {
      console.error('Cannot send data: Telegram WebApp API is not initialized.');
    }
  }

  ready() {
    if (this.tg) {
      this.tg.ready();
    } else {
      console.error('Telegram WebApp API is not initialized.');
    }
  }
}
