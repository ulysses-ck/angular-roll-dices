import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	diceLeft = '../assets/img/dice1.png';
	diceRight = '../assets/img/dice2.png';
	numOne: number = 1;
	numTwo: number = 2;

	rollDices(): void {
		this.numOne = Math.round(Math.random() * 5) + 1;
		this.numTwo = Math.round(Math.random() * 5) + 1;

		this.diceLeft = `../assets/img/dice${this.numOne}.png`;
		this.diceRight = `../assets/img/dice${this.numTwo}.png`;
	}
}
