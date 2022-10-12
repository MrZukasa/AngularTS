"use strict";
class X {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    scrivi() { }
    saluta() {
        console.log('Ciao');
    }
}
//classe astratta che si estende a 3 altre classi
class Dispositivo {
    nome;
    anno;
    constructor(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
}
class Telefono extends Dispositivo {
    accendi() {
        console.log("Acceso");
    }
    spegni() {
        console.log("Spento");
    }
}
class Smartphone extends Dispositivo {
    ip;
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("Lo smartphone si accende");
    }
    spegni() {
        console.log("Lo smartphone si spegne");
    }
    connetti() {
    }
}
class Computer extends Dispositivo {
    ip;
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("Il PC si accende");
    }
    spegni() {
        console.log("Il PC si spegne");
    }
    connetti() {
    }
}
