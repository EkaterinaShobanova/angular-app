import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-numbers-generator',
  standalone: true, // Standalone Component
  templateUrl: './numbers-generator.component.html',
  styleUrls: ['./numbers-generator.component.css'],
    imports: [ReactiveFormsModule, NgIf, RouterLink], // Импорт нужных модулей
})
export class NumbersGeneratorComponent {
  public myForm: FormGroup;
  public randomNumber: number | null = null;

  constructor() {
    this.myForm = new FormGroup({
      minValue: new FormControl('', [Validators.required, Validators.min(0)]),
      maxValue: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  generate(): void {
    const min = this.myForm.get('minValue')?.value;
    const max = this.myForm.get('maxValue')?.value;

    if (min !== null && max !== null && min <= max) {
      this.randomNumber = this.generateRandomNumber(min, max);
    } else {
      alert('Убедитесь, что минимальное значение меньше или равно максимальному.');
      this.randomNumber = null;
    }
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}




