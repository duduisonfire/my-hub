import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() img = '';
  @Input() title = '';
  @Input() description = '';
  @Input() link = '';
  @Input() isExternal = false;
}
