import {Titulo} from "./utils.js";

const textos = ["Texto número 1", "Texto número 2", "Texto número 3"];
const contenedor = document.querySelector('#contenedor');

for (const texto of textos) {
    const miTitulo= new Titulo(texto);
    const elementoRenderizado = miTitulo.render();

    contenedor.appendChild(elementoRenderizado);
}