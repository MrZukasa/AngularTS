## AngularTS

Angular e TS vanno di pari passo a quanto pare, quindi impariamo TS e vediamo come va 🥸.

Iniziamo da [QUI](https://www.youtube.com/watch?v=CZlEWUjOyNE&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6)

- Linguaggio tipizzato che quindi aggiunge i tipi di dati
- TS viene compilato quindi non può essere eseguito dal browser e da nodejs
- TS è fondamentalmente la base di Angular e NestJS, ma può essere anche usato con React, Next ecc...
- TS e Microsoft 🤮
- Una volta compilato diventa JS per il browser!

Insalliamo con `npm i -g typescript` e creiamo un file .ts dove inseriremo il nostro codice.

Il file .ts diventerà un file.js una volta compilato, quindi nella nostra pagina lo richiameremo nel classico modo, ossia `<script src="app.js"></script>`

Typescript server per evitare il conflitto tra tipi di dato, per esempio in TS una funzione somma dove non so che input arrivano può evitare il controllo delgli input (typeof a ==='number').

Se creo la funzione somma in TS dovrò definire i due parametri che passo come tipo di dato, nel mio caso `a: number` e `b: number`.

Una volta creato il mio script lo compilo con il comando `tsc nomefile.ts`

<hr>
In JS esistevano già i tipi, semplicemente non erano dichiarati, era una tipizzazione dinamica.

Possiamo assegnare il tipo con i due punti come visto sopra (type assignement) o possiamo omettere la tipizzazione con il type inference ossia quando TS capisce il tipo di variabile in base al valore che detiene (tipizzazione dinamica quindi).

I tipi possono essere number, string e boolean.

### Qui le cose si fanno più interessanti 🤓
- object
  ```Typescript
  let persona = {
    nome: string,
    cognome: string,
    eta: number,
    indirizzo: {
        via: string,
        civico:number,
        citta: string
    }
  }

  persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 45,
    indirizzo: {
        via: 'Ronco',
        civico: 3,
        citta: 'Recanati'
    }
  }
  ```
  Questa cosa da spazio ad un modo di lavorare comodo per quanto rguarda le funzioni per esempio
  ```Typescript
  function getData(data: {id: string, user: string, password: string}) {
    const id = data.id;
    console.log(data.user);
    }

  getData({id:1, user:'Silvio', password:'123456'})
  ```
  parametrizzare tutto dentro un oggetto e passare quello, molto meglio!

- array
  ```Typescript
  const data: string[] = ['1', '2', '3']
  const generico: any[] = ['stringa',true,[],{}]
  ```
- tuple (array a lunghezza fissa)
  ```Typescript
  const game: [number,number] =[1,2]
  const game2: [number,number,string] =[1,2,'3']
  ```
  la tupla è proprietaria di TS, nel senso che in JS non esiste
  <hr>
- Any
  ```typescript
  const nomi: [any,any] = ["no","mi"]
  ```
- Union
  ```typescript
  let prova: string | number | string[] = "prova"
  ```
  Ossia dico alla variabile prova che può essere una stringa o un numero o un array di stringhe!
- Custom Type
  ```typescript
  type Persona = {
    nome: string,
    cognome: string,
    eta: number
  }

  let persona: Persona

  persona ={
    nome: "Luca",
    cognome: "Rossi"
    eta: 31
  }
  ```
  quasi come fosse una classe in realtà
- Enum
  ```Typescript
  enum Ruolo {
    ADMIN,
    USER,
    GUEST
  }
  const persona = {
    nome: "Luca",
    cognome: "Rossi",
    ruolo: Ruolo.ADMIN //oppure 0
  }
  ```
  Posso anche specificare dentro la enum una stringa ad ogni valore, oppure un numero ad ogni valore.
  Esempio:
  ```Typescript
  enum Ruolo {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
  }
  // oppure
  enum Ruolo {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
  }
  ```
<hr>

### Funzioni e tipi di dati nei parametri di default 😊
```typescript
function somma(num1: number, num2:number){
    console.log(num1+num2)
}
somma(3,3)
```
Semplicemente possiamo dichiarare di che tipo saranno i nostri parametri.

Possiamo farlo anche per i parametri di default.
```Typescript
function somma(num1: number, num2 = 3){
    console.log(num1+num2)
}
somma(3)
```
Stesso discorso per il valore di return, se sommo due number lui capisce da solo che il valore di return sara sempre un numero, posso anche specificarlo.
```Typescript
function somma(num1: number, num2:number): number{
    return num1+num2;
}
somma(3,3)
```
in TS tornano le procedure con il :void!!

Caso in qui si metta un :any posso far restituire quello che voglio.

Posso anche assegnare una funzione come tipo di variabile
```typescript
function somma(num1: number, num2:number): number{
    return num1 + num2;
}
function sottrazione(num1: number, num2: number): number{
    return num1 - num2;
}
let prova: (x:number, y:number) => number
prova = sottrazione;
//oppure la assegno a un altra funzione
prova = somma;
```
Posso farlo anche per le funzioni di callback:
```typescript
function prova(x:number, cb ()=>void){}
prova(5,()=>{
    console.log("qualcosa");
})
```
<hr>

Per avere il compilatore reattivo ad ogni cambiamento mi basta lanciare il tsc in watch con `tsc app.ts --watch` o `tsc app.ts -w`.

Posso compilare un intero progetto con `tsc --init` per creare il config.json e poi faccio `tsc -w` per compilare tutti i file inclusi nel progetto.

Il file tsconfig.json posso modificarlo per includere o escludere della roba da compilare ad esempio:
```json
"exclude": [
    "./nomedelfile.ts"
]
```
caso in cui si usi nodejs, va specificato nell exclude di essere escluso.