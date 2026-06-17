# Arte ASCII

Dibujá figuras geométricas en la consola usando caracteres y ciclos.

---

## Consigna base

Escribí un programa que dibuje un **cuadrado relleno** en la consola.

El programa tiene que:

1. Preguntar con qué carácter se va a dibujar el cuadrado.
2. Preguntar el tamaño del cuadrado.
3. Imprimir el cuadrado: `tamaño` filas, cada una con el carácter repetido `tamaño` veces.

La función `repetirLetra(letra: string, cantidad: number): string` recibe un carácter y un número, y devuelve ese carácter repetido esa cantidad de veces. Tenés que implementarla usando un ciclo `while`.

### Ejemplo

```
¿Con que caracter vas a dibujar el cuadrado? *
¿De qué tamaño? 4
****
****
****
****
```

```
¿Con que caracter vas a dibujar el cuadrado? #
¿De qué tamaño? 3
###
###
###
```

---

## Consigna manija

Escribí un programa en `src/manija.ts` que dibuje un **triángulo** en la consola.

El programa tiene que:

1. Preguntar con qué carácter se va a dibujar el triángulo.
2. Preguntar el tamaño del triángulo.
3. Preguntar el tipo de triángulo: `isoceles` o `rectangulo`.
4. Imprimir el triángulo correspondiente.

### Triángulo rectángulo

La fila `j` (empezando en 0) tiene `j + 1` caracteres, sin espacios.

```
¿Con que caracter vas a dibujar el triángulo? *
¿De qué tamaño? 4
¿Qué tipo de triángulo? (isoceles, rectangulo) rectangulo
*
**
***
****
```

```
¿Con que caracter vas a dibujar el triángulo? -
¿De qué tamaño? 3
¿Qué tipo de triángulo? (isoceles, rectangulo) rectangulo
-
--
---
```

### Triángulo isóceles

Cada fila `j` (empezando en 0) tiene `2*j + 1` caracteres centrados. Para centrarlo, cada fila lleva espacios a ambos lados.

La función `filaTrianguloIsoceles(letra: string, fila: number, tamaño: number): string` construye una fila del triángulo. Tenés que implementarla.

```
¿Con que caracter vas a dibujar el triángulo? *
¿De qué tamaño? 3
¿Qué tipo de triángulo? (isoceles, rectangulo) isoceles
   *   
  ***  
 ***** 
```

```
¿Con que caracter vas a dibujar el triángulo? #
¿De qué tamaño? 4
¿Qué tipo de triángulo? (isoceles, rectangulo) isoceles
    #    
   ###   
  #####  
 ####### 
```

---

## ¿Qué hay que editar?

Para la consigna base:

```
src/index.ts
```

Para la consigna manija:

```
src/manija.ts
```

El archivo `src/lib/consola.ts` ya está completo y no hace falta tocarlo.

---

## Primeros pasos

Antes de poder correr el programa, hay que instalar las dependencias del proyecto. Esto se hace **una sola vez** con:

```bash
npm install
```

---

## Cómo correr el programa

```bash
npm run start
```

Para correr la manija:

```bash
npx tsx src/manija.ts
```

---

## Tests

El proyecto incluye tests automáticos que se usan para la corrección:

```bash
npm run test-base    # tests de la consigna base
npm run test-manija  # tests de la consigna manija
npm test             # ambos
```

No hace falta entenderlos ni modificarlos. Son para verificar que el programa funciona correctamente.
