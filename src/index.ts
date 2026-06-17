import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  let letrasporlínea: string = "";

  while (cantidad > 0) {
    letrasporlínea = letrasporlínea + letra;
    cantidad = cantidad - 1;
  }

  return letrasporlínea;
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

let resultado: string = repetirLetra (caracter, tamaño);

while (tamaño > 0) {
  console.log (resultado);
  tamaño = tamaño - 1;
}