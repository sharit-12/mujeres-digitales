const libros = {
    titulo: "El Nombre de la Rosa",
    autor: "Umberto ECO",
    año: 2016
};


fetch("https://api.example.com/orden", {
    method: "POST",
    headers: {
        "content-Type": "application/json"
    },
    boby: JSON.stringify(datos)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

const frutas = {
    nombre: "manzana",
    color: "rojo"
}