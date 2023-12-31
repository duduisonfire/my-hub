import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private isOpen = false;

  private openMenu() {
    const elementClasses = document.getElementById('navbar-default')?.classList;
    if (this.isOpen) {
      elementClasses?.remove('hidden');
    } else {
      elementClasses?.add('hidden');
    }
  }

  buttonClick() {
    this.isOpen = !this.isOpen;
    this.openMenu();
  }
}
