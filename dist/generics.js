"use strict";
const arr = ['Uno', 'Due']; //dichiarazione di un array normale
const arre = ['Tre', 'Quattro']; //dichiarazione con una generic
//funzione fatta in maniera normale
function creaArray(items) {
    return new Array().concat(items);
}
//stessa funzione fatta con le generic
function creaArray2(items) {
    return new Array().concat(items);
}
const arr1 = creaArray([1, 2, 3, 4]);
const arr2 = creaArray2([5, 6, 7, 8]);
arr1.push("stringa"); //nel primo caso riuscirei a mettere una stringa con i numeri
arr2.push("stringa"); //nel secondo caso no perchè lui capisce che tipo è attribuito a T
class Prova {
    lista = [];
    aggiungiItem(item) {
        this.lista.push(item);
    }
}
const listaStringhe = new Prova();
listaStringhe.aggiungiItem(2);
listaStringhe.aggiungiItem("Luca");
const listaStringhe2 = new Prova();
listaStringhe2.aggiungiItem(2);
listaStringhe2.aggiungiItem("Luca");
