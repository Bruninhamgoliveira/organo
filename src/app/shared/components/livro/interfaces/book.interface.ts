export interface Book {
    titulo: string;
    favorito: boolean;
    autoria: string;
    imagem: string;
    genero:GeneroLiterario;
}

export interface GeneroLiterario{
    id: string;
    value: string;
    livros:Book[]
}
