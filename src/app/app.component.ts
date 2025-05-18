import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ListBooksComponent } from './shared/components/list-books/list-books.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,ListBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
