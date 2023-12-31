import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
