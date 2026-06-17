import readlineSync from 'readline-sync';

/**
 * Le hace una pregunta al usuario y devuelve su respuesta como texto.
 *
 * @param pregunta - El texto que se muestra al usuario.
 * @returns La respuesta ingresada por el usuario (sin espacios al inicio o al final).
 * @example
 * const nombre = preguntar('¿Cómo te llamás? ');
 * console.log(`¡Hola, ${nombre}!`);
 */
export function preguntar(pregunta: string): string {
  return readlineSync.question(pregunta).trim();
}
