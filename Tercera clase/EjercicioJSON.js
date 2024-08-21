const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

let Libro = {
    Titulo: "Amar es ganarlo todo incluso si no te queda nada",
    Autor: "Alberto Linero",
    Año: 2021
};

let LibroJSON = JSON.stringify(Libro);

localStorage.setItem("Libro", LibroJSON);

let LibroRecuperadoJSON = localStorage.getItem("Libro");
let LibroRecuperado = JSON.parse(LibroRecuperadoJSON);

console.log(LibroRecuperado); 