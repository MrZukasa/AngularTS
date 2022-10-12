"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(messaggio) {
    return function (constructor) {
        console.log(messaggio);
        console.log(constructor);
    };
}
let Prova = class Prova {
    constructor() {
        console.log('Classe di Prova');
    }
};
Prova = __decorate([
    Logger('Istanza per la classe Prova')
], Prova);
let Qwerty = class Qwerty {
    constructor() {
        console.log('Classe di Qwerty');
    }
};
Qwerty = __decorate([
    Logger('Istanza per la classe Qwerty')
], Qwerty);
