export class Titulo {
    texto = "";
    
constructor(texto){
    this.texto = texto;
}

render(){
    const elementoParrafo = document.createElement('p');
    elementoParrafo.textContent = this.texto;
    return elementoParrafo;
}
}

