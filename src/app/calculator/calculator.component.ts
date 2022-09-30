import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  results: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onCal(num1: number, operation: string, num2: number): void {
  console.log("btn works")
    console.log(num1)
    console.log(num2)
    console.log(operation)
  }

  getText() {

  }

  getAdd(){
    console.log(+)

  }

  getSub() {

  }

  getMult() {

  }

  getDivide() {

  }

  logMessage(value:string) {
    console.log(value)
  }

  switch (operation) {
    case "+":
    break;
    case "-":
    break;
    case "*":
      break;
      case "/":
        break;

  }



}
