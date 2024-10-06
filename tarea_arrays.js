// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Sacamos el primer elemento del array, que es el nombre del cliente
    const nombreCliente = pedido.shift();
    
    // Añadimos "bebida" al inicio del array
    pedido.unshift("bebida");
    
    // Añadimos el nombre del cliente al final del array
    pedido.push(nombreCliente);
    
    // Retornamos el array modificado
    return pedido;
}
const miPedido = ["Tamara", "asado", "ensalada"];
const pedidoProcesado = procesarPedido(miPedido);
console.log(pedidoProcesado); 


// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    
    // Iteramos sobre el array
    for (let i = 0; i < numeros.length; i++) {
        // Verificamos si el número es par
        if (numeros[i] % 2 === 0) {
            suma += numeros[i]; // Sumamos el número par a la suma
        }
    }
    
    return suma; // Retornamos la suma de los pares
}
const MIArray = [1, 2, 3, 4, 5, 6];
const resul = sumarPares(MIArray);
console.log(resul); 

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    // Iteramos sobre el array de palabras
    for (let i = 0; i < palabras.length; i++) {
        // Verificamos si la palabra actual no termina con "a"
        if (!palabras[i].endsWith("a")) {
            return false; // Retornamos false si encontramos una palabra que no termina en "a"
        }
    }
    return true; // Si todas las palabras terminan en "a", retornamos true
}
const miArray = ["casa", "mesa", "silla"];
const resultado1 = palabrasTerminanConA(miArray);
console.log(resultado1);

const otroArray = ["casa", "mesa", "sillón"];
const resultado2 = palabrasTerminanConA(otroArray);
console.log(resultado2); 

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
        // Buscamos el índice de la palabra
        const indice = words.indexOf(word);
    
        // Si la palabra no se encuentra, devolvemos un array vacío
        if (indice === -1) {
            return [];
        }
        // Retornamos un nuevo array con las palabras después del índice encontrado
        return words.slice(indice + 1);
}
const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
       // Iteramos sobre las filas de la matriz
       for (let i = 0; i < matrix.length; i++) {
        // Iteramos sobre las columnas de cada fila
        for (let j = 0; j < matrix[i].length; j++) {
            // Verificamos si encontramos "JavaScript"
            if (matrix[i][j] === "JavaScript") {
                return [i, j]; // Retornamos la posición encontrada
            }
        }
    }
    return [-1, -1]; // Si no encontramos "JavaScript", retornamos [-1, -1]
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
        // Inicializamos las variables para los índices y valores
        let minIndex = 0;
        let maxIndex = 0;
    
        // Recorremos el array de libros
        for (let i = 1; i < books.length; i++) {
            // Actualizamos el índice del libro con menos páginas
            if (books[i] < books[minIndex]) {
                minIndex = i;
            }
            // Actualizamos el índice del libro con más páginas
            if (books[i] > books[maxIndex]) {
                maxIndex = i;
            }
        }
        
        // Devolvemos un array con los índices del libro con menos y más páginas
        return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};