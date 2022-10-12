const arr: string[]=['Uno','Due']   //dichiarazione di un array normale
const arre: Array<string> = ['Tre','Quattro'] //dichiarazione con una generic

//funzione fatta in maniera normale
function creaArray(items: any[]):any[]{
    return new Array().concat(items)
}
//stessa funzione fatta con le generic
function creaArray2<T>(items: T[]): T[]{
    return new Array().concat(items)
}

const arr1 = creaArray([1,2,3,4])
const arr2 = creaArray2([5,6,7,8])

arr1.push("stringa");  //nel primo caso riuscirei a mettere una stringa con i numeri
arr2.push("stringa") //nel secondo caso no perchè lui capisce che tipo è attribuito a T

class Prova<T>{
    private lista: T[]=[]

    aggiungiItem(item: T){
        this.lista.push(item)
    }
}

const listaStringhe = new Prova<string>()
listaStringhe.aggiungiItem(2)
listaStringhe.aggiungiItem("Luca")

const listaStringhe2 = new Prova<number>()
listaStringhe2.aggiungiItem(2)
listaStringhe2.aggiungiItem("Luca")
