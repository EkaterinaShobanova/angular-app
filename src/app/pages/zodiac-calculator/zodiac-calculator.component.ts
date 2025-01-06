import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import flatpickr from 'flatpickr';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-zodiac-calculator',
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './zodiac-calculator.component.html',
  styleUrls: ['./zodiac-calculator.component.css'],
})

export class ZodiacCalculatorComponent {
  // Инициализация формы
  birthdayForm: FormGroup;
  horoscopeSign: string | null = null;

  constructor() {
    // Инициализация формы с FormControl для ввода даты
    this.birthdayForm = new FormGroup({
      birthdayDate: new FormControl('', Validators.required) // обязательное поле
    });
  }

  calculateHoroscope(): void {
    const birthdayString = this.birthdayForm.get('birthdayDate')?.value; // Получаем значение даты
    console.log('Дата из input:', birthdayString);

    if (!birthdayString) {
      this.horoscopeSign = 'Ошибка: Неверная дата';
      return;
    }

    const parts = birthdayString.split('-'); // Формат YYYY-MM-DD
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Месяцы начинаются с 0 в JavaScript
    const day = parseInt(parts[2], 10);

    const birthday = new Date(year, month, day);
    console.log('Созданная дата:', birthday);

    if (
      isNaN(birthday.getTime()) ||
      birthday.getDate() !== day ||
      birthday.getMonth() !== month ||
      birthday.getFullYear() !== year
    ) {
      this.horoscopeSign = 'Ошибка: Неверная дата';
      return;
    }

    this.horoscopeSign = this.getZodiacSign(birthday);
  }

  // Метод для определения знака гороскопа по дате рождения
  getZodiacSign(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяц + 1 для корректной работы

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Овен';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Телец';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Близнецы';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Рак';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Лев';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Дева';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Весы';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Скорпион';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Стрелец';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Козерог';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Водолей';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Рыбы';

    return 'Ошибка: Неверная дата';
  }
}
