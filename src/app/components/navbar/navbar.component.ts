import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @ViewChild('button') button: ElementRef<HTMLButtonElement>;
  @ViewChild('menu') menu: ElementRef<HTMLDivElement>;

  isHidden = true;

  constructor(
    private element: ElementRef<HTMLDivElement>,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: MouseEvent) => {
      if (!element.nativeElement.contains(e.target as Element)) {
        this.isHidden = true;
      }
    });
  }

  buttonClick() {
    this.isHidden = !this.isHidden;
  }
}
