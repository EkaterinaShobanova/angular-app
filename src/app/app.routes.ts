import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgeCalculatorComponent } from './pages/age-calculator/age-calculator.component';
import { NumbersGeneratorComponent } from './pages/numbers-generator/numbers-generator.component';
import {ZodiacCalculatorComponent} from './pages/zodiac-calculator/zodiac-calculator.component';
import {DatesCalculatorComponent} from './pages/dates-calculator/dates-calculator.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'age-calculator', component: AgeCalculatorComponent },
  { path: 'numbers-generator', component: NumbersGeneratorComponent },
  { path: 'zodiac-calculator', component: ZodiacCalculatorComponent},
  { path: 'dates-calculator', component: DatesCalculatorComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'},

];
