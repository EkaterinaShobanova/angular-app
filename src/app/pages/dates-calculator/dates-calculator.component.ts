import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule} from '@angular/common';
import { NgIf } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-dates-calculator',
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './dates-calculator.component.html',
  styleUrl: './dates-calculator.component.css'
})
export class DatesCalculatorComponent {
  public myForm: FormGroup;
  public daysQuantity: number | null = null;

  constructor() {
    this.myForm = new FormGroup({
      firstDate: new FormControl('', [Validators.required]),
      secondDate: new FormControl('', [Validators.required])
    });
  }

  count(): void {
    const min = this.myForm.get('firstDate')?.value;
    const max = this.myForm.get('secondDate')?.value;

    // Проверка на корректность дат
    if (min && max && new Date(min) <= new Date(max)) {
      this.daysQuantity = this.countDatesQuantity(new Date(min), new Date(max));
    } else {
      alert('Убедитесь, что верно ввели даты.');
      this.daysQuantity = null;
    }
  }

  private countDatesQuantity(min: Date, max: Date): number {
    // Разница в миллисекундах
    const timeDifference = max.getTime() - min.getTime();
    // Преобразуем в количество дней
    return timeDifference / (1000 * 3600 * 24);
  }
}
