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

Per agevolarci nel debug possiamo anche abilitare il file di sourcemap, basta scommentare la parte relativa del file `tsconfig.json`.

Per strutturare il progetto in maniera più normale è utile scommentare la voce `"rootDir": ""` e magari aggiungere la cartella che si è creata, cosi facendo compilerà e controllerà che i file siano sempre dentro la cartella specificata.

Solitamente la cartella di compilazione e diversa da quella di distribute, per specificare queste differenze si usa la voce `"outDir":"./dist"`.
Cosi facendo si mantiene la struttura delle cartelle e si hanno i file JS direttamente nella cartella che ospiterà la distribute.

<hr>

### Classi in TS 🌰
Questa parte di codice si trova in [classi.ts](./src/classi.ts).

I modificatori `Private`, `Protected` e `Public` funzionano come in ogni linguaggio Microsoft e sono stati aggiunti anche qui.

Public => lo chiamo da ovunque

Private => lo chiamo solo dalla stessa classe

Protected => lo chiamo anche dalla classe ereditaria

In TS è possibile dichiarare le proprietà di una classe direttamente nel costruttore, proprietà più addirittura il modificatore:
```Typescript
class Persona{
  contrrutor(private nome: string, private cognome: string){}
}
```
>In Angular si usa un botto questa roba!!

Esiste anche il modificatore `readonly`.

Con `Static` posso chiamare un metodo o una proprietà senza chiamare la classe che lo contiente.

Si aggiunge il concetto di `Abstract` ossia una classe che non è istanziabile ma è ereditabile.

Il `singleton` identifica una classe per la quale è possibile dichiararne una singola istanza, vedere esempio nel codice.

<hr>

### Interfacce 🌃
Tutte le info sulle interfacce sono presenti in [interface.ts](src/interface.ts).

Nelle interfacce i metodi e le proprietà sono tutti astratti e solitamente si usano per essere implementate nelle classi.

Posso implementare più interfacce nella stessa classe.
Posso estendere più interfacce nella stessa interfaccia o classe.

<hr>

### Generics 🦃

Conquesto strumento posso creare componenti riutilizzabili (?) roba che viene usata in Angular.

Esempio di codice in [Generics](src/generics.ts)
Posso creare anche generics di diversi tipi usando le union ad esempio
`function funzione<T extends number | string>`.

<hr>

### Decorators 🛺
Sono funzioni che si applicano all'interno di una classe con il carattere @ prima del nome per richiamarla.
per esempio:
```typescript
function Logger(constructor: any){
  console.log(constructor)
}

@Logger
class Prova{
  construcotr(){
    console.log('Oggetto di prova')
  }
}
```
cosi facendo scriverò nella console il codice contenuto nella classe Prova anche senza averne creato un istanza.

>Nel senso scriverà in console proprio il codice sorgente

Posso usare anche i Decorators in factories ossia un Decorator che richiama una funzione al suo interno in maniera che passi come parametro del Decorator stesso, cosi da poterlo customizzare per ogni utilizzo.
Esempio in [Decorator](src/decorator.ts).

I Decorators di Angular chiaramente funzionano con i Template, esempio nel sorgente [App](src/app.ts) e in index.html.

<hr>

### Import File 🛕
Per importare altri file in TS si fa come in [Functions](src/functions.ts)

>banalmente export e import stile react