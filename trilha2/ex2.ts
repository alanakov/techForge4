class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    public lerLivro() {
        this.lido = true;
        console.log(`O livro ${this.titulo} foi marcado como lido`)
    }
}

const livro1 = new Livro('Psicose', 'Robert Bloch', 240, false);
livro1.lerLivro();