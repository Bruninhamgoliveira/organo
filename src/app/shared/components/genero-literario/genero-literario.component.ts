import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { CommonModule } from '@angular/common';
import { GeneroLiterario } from '../livro/interfaces/book.interface';

@Component({
  selector: 'app-genero-literario',
  imports: [CommonModule, LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  public genero = input.required<GeneroLiterario>();
}
