import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  let letrasporlínea2: string = "";

  while (cantidad > 0) {
    letrasporlínea2 = letrasporlínea2 + letra;
    cantidad = cantidad - 1;
  }

  return letrasporlínea2;
  
  // COMPLETAR o importar desde index.ts
}

function filaTrianguloIsoceles(letra: string, fila: number, tamaño: number): string {
  // COMPLETAR
  /* fila n: 2*n+1 asteriscos, con espacios a izquierda a derecha 
  Pueden asumir que el tamaño es impar, así el triángulo queda centrado. */
  let cantidadletras = 2 * fila + 1;
  let cantidadespacios = tamaño - fila;

  let espacios = repetirLetra ("", cantidadespacios);
  let letras = repetirLetra (letra, cantidadletras);

  return espacios + letras + espacios;
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el triángulo? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
let tipo: string = preguntar('¿Qué tipo de triángulo? isoceles/rectangulo: ');

// COMPLETAR

if (tipo === "rectangulo") {
  while (tamaño > 0) {
    let fila = repetirLetra (caracter, (0 + 1));
    console.log (fila);
    tamaño = tamaño - 1;
  }
}
else if (tipo === "isoceles") {
  while (tamaño > 0) {
    let fila = filaTrianguloIsoceles (caracter, 0, tamaño);
    console.log (fila);
    tamaño = tamaño - 1;
  }
}
else {
  console.log ("Ingresá un tipo de triángulo válido.");
}