// 1. Crear un objeto que represente un libro
const libro = {
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    año: 1925
  };
  
  // 2. Convertir el objeto en una cadena JSON
  const libroJSON = JSON.stringify(libro);
  
  // Guardar la cadena JSON en el Local Storage
  localStorage.setItem("libro", libroJSON);
  
  // 3. Recuperar el objeto del Local Storage y mostrarlo en la consola
  const libroGuardado = localStorage.getItem("libro");
  const libroParseado = JSON.parse(libroGuardado);
  
  console.log("Libro guardado en Local Storage:", libroParseado);
  