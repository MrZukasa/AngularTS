function Logger(messaggio: string){
    return function(constructor: any){
        console.log(messaggio)
        console.log(constructor)
    }
}

@Logger('Istanza per la classe Prova')
class Prova{
    constructor(){
        console.log('Classe di Prova')
    }
}
@Logger('Istanza per la classe Qwerty')
class Qwerty{
    constructor(){
        console.log('Classe di Qwerty')
    }
}