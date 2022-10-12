interface Prova{
    nome: string
    saluta(): void
}

interface Qwerty{
    scrivi(): void
}
class X implements Prova, Qwerty{
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    scrivi(): void {}
    saluta(): void{
        console.log('Ciao');
    }
}

//classe astratta che si estende a 3 altre classi
abstract class Dispositivo{
    constructor(protected nome: string, protected anno: number){}
    abstract accendi(): void;
    abstract spegni(): void;
}

interface Internet{
    ip:string;
    connetti():void
}

class Telefono extends Dispositivo{
    accendi(): void {
        console.log("Acceso")
    }
    spegni(): void {
        console.log("Spento")
    }
}

class Smartphone extends Dispositivo implements Internet{
    ip: string
    constructor(nome: string, anno:number, ip:string){
        super(nome, anno);
        this.ip = ip
    }
    accendi(): void {
        console.log("Lo smartphone si accende")
    }
    spegni(): void {
        console.log("Lo smartphone si spegne")
    }
    connetti(): void {

    }
}

class Computer extends Dispositivo implements Internet{
    ip: string
    constructor(nome: string, anno:number, ip:string){
        super(nome, anno);
        this.ip = ip
    }
    accendi(): void {
        console.log("Il PC si accende")
    }
    spegni(): void {
        console.log("Il PC si spegne")
    }
    connetti(): void {

    }
}