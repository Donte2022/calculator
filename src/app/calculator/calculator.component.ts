import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  results: number | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCal(num1: number, operation: string, num2: number): void {

  if (isNaN(num1) || isNaN(num2)) {
    this.results = 0;
    return;
  }

  switch (operation) {
  case "+":
    this.results = num1 + num2;
    break;
  case "-":
    this.results = num1 - num2;
    break;
  case "*":
    this.results = num1 * num2;
    break;
  case "/":
    this.results = num1 / num2;
    break;
  default:
    console.error('unknown operation');
    return;
  }
}
}
