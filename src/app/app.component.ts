import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsGridComponent } from './products/products-grid/products-grid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular-curso';
}
