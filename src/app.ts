function creaElemento(template:string, idElemento:string, nome:string){
	return (constructor: any)=>{
        const div = document.getElementById(idElemento)
        const classe = new constructor(nome)   //creo un istanza della classe che richiama questo costruttore
		if (div){
			div.innerHTML = template
			div.querySelector('h1')!.textContent=classe.nome
		}
    }
}

@creaElemento('<h1></h1>','contenuto','Bomber')
class Umano{
    constructor(public nome:string){
		console.log('Oggetto di classe Uno')
	}
}