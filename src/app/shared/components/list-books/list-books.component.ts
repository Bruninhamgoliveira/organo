import { Component, OnInit } from '@angular/core';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";
import { Book, GeneroLiterario } from '../livro/interfaces/book.interface';
import { books } from '../../../mock-books';

@Component({
  selector: 'app-list-books',
  imports: [GeneroLiterarioComponent],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit {
  public generos: GeneroLiterario[] = [];
  public livrosPorGenero: Map<string, Book[]> = new Map();


  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    books.forEach((livros: Book) => {
      const generoId = livros.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }
      this.livrosPorGenero.get(generoId)?.push(livros);
    })

    this.generos = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
    ]

    console.log(this.livrosPorGenero);
  }
}
