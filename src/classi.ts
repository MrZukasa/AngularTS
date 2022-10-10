class Persona {
    nome: string
    cognome: string

//Chiaramente non ha senso iniziallizzare i valori dentro la classe,
//altrimenti tutte le istanze saranno uguali, per questo usiamo un costruttore
    constructor(nome: string, cognome: string) {
        this.nome = nome
        this.cognome = cognome
    }
//aggiungiamo un metodo tanto per
    presentati(): void {
        console.log(`Ciao! Sono ${this.nome} ${this.cognome}`)
    }

    saluta(persona: Persona): void{ //definizione del tipo di parametro che passiamo
        console.log(`Ciao carissimo! ${persona.nome} ${persona.cognome} molto piacere`)
    }
};

//ereditarietà
class Studente extends Persona {
    //costruttore super
    constructor(nome: string, cognome: string, materiaPreferita: string) {
        super(nome, cognome);
        //passo i parametrialla classe sopra
    }
};

const studente1: Studente = new Studente('Luca','Rossi','Matematica');

//singleton
class Preside {
    private static instance: Preside;
    private constructor(private nome: string, private cognome: string) {}
    static getInstance(){
        if (Preside.instance == null){
            return this.instance
        }
        this.instance = new Preside("Marco","Verdi");
        return this.instance
    }
    presenta(){
        console.log(`Buongiorno, sono il preside: ${this.nome} ${this.cognome}`)
    }
};

//*let persona: Persona
//*persona = new Persona
// oppure
//*const persona: Persona = new Persona()

//dichiarazione della classe
let persona1: Persona = new Persona('Luca','Rossi')
let persona2: Persona = new Persona('Marco','Neri')
let persona3: Persona = new Persona('Anna','Verdi')

//richiamo il metodo
persona1.presentati();
persona2.saluta(persona1);
Preside.getInstance().presenta();

