class Agenda {
    private compromissos: string[];

    constructor(compromissos: string[]) {
        this.compromissos = compromissos;
    }

    public adicionarCompromisso(compromisso: string) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado.`);
        console.log(this.compromissos);
    }
}

const compromisso = new Agenda(["Estudar às 10h"])
compromisso.adicionarCompromisso("Reunião às 14h")
compromisso.adicionarCompromisso("Reunião às 16h")