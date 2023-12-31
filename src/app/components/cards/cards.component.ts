import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() img = '';
  @Input() title = '';
  @Input() description = '';
  @Input() link = '';
}
