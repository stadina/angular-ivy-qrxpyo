import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  template: `<h1>My Card {{cardName}} {{cardNumber}}%</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CardComponent  {
  @Input() cardName: string;
  @Input() cardNumber: number;
}