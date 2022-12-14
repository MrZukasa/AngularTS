"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function creaElemento(template, idElemento, nome) {
    return (constructor) => {
        const div = document.getElementById(idElemento);
        const classe = new constructor(nome); //creo un istanza della classe che richiama questo costruttore
        if (div) {
            div.innerHTML = template;
            div.querySelector('h1').textContent = classe.nome;
        }
    };
}
let Umano = class Umano {
    nome;
    constructor(nome) {
        this.nome = nome;
        console.log('Oggetto di classe Uno');
    }
};
Umano = __decorate([
    creaElemento('<h1></h1>', 'contenuto', 'Bomber')
], Umano);
