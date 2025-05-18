import { Component, input } from '@angular/core';
import { Book } from './interfaces/book.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  
  public book = input.required<Book>();

  public changeFavorite(): void {
    this.book().favorito = !this.book().favorito;
  }
}
