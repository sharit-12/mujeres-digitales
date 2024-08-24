function Npares(arreglo) {
    return arreglo.filter (n => n % 2 === 0);
}

let n = [1,2,3,4,5,6,7,8,9,10];
let Npares = obtenerNpares (n);

console.log (Npares);