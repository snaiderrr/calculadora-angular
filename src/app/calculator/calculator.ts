import { Component } from '@angular/core';
import { FormsModule } from '../../../node_modules/@angular/forms/index';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  numero1: number=0;
  numero2: number=0;
  resultado: number=0;

  calcularResultado(){
    console.log("Chamando o método para calcular o resultado!")
    this.resultado = this.numero1 + this.numero2;
  }

}
