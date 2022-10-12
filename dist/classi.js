"use strict";
class Persona {
    nome;
    cognome;
    //Chiaramente non ha senso iniziallizzare i valori dentro la classe,
    //altrimenti tutte le istanze saranno uguali, per questo usiamo un costruttore
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    //aggiungiamo un metodo tanto per
    presentati() {
        console.log(`Ciao! Sono ${this.nome} ${this.cognome}`);
    }
    saluta(persona) {
        console.log(`Ciao carissimo! ${persona.nome} ${persona.cognome} molto piacere`);
    }
}
;
//ereditarietà
class Studente extends Persona {
    //costruttore super
    constructor(nome, cognome, materiaPreferita) {
        super(nome, cognome);
        //passo i parametrialla classe sopra
    }
}
;
const studente1 = new Studente('Luca', 'Rossi', 'Matematica');
//singleton
class Preside {
    nome;
    cognome;
    static instance;
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    static getInstance() {
        if (Preside.instance == null) {
            return this.instance;
        }
        this.instance = new Preside("Marco", "Verdi");
        return this.instance;
    }
    presenta() {
        console.log(`Buongiorno, sono il preside: ${this.nome} ${this.cognome}`);
    }
}
;
//*let persona: Persona
//*persona = new Persona
// oppure
//*const persona: Persona = new Persona()
//dichiarazione della classe
let persona1 = new Persona('Luca', 'Rossi');
let persona2 = new Persona('Marco', 'Neri');
let persona3 = new Persona('Anna', 'Verdi');
//richiamo il metodo
persona1.presentati();
persona2.saluta(persona1);
Preside.getInstance().presenta();
