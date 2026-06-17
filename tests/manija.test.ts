import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.mock('readline-sync', () => ({
  default: { question: vi.fn() },
}));

describe('Arte ASCII - Triángulo', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.resetModules();
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  async function ejecutar(caracter: string, tamaño: string, tipo: string): Promise<void> {
    const rl = await import('readline-sync');
    vi.mocked(rl.default.question)
      .mockReturnValueOnce(caracter)
      .mockReturnValueOnce(tamaño)
      .mockReturnValueOnce(tipo);
    await import('../src/manija.ts');
  }

  it('dibuja un triángulo isóceles de * de tamaño 3', async () => {
    await ejecutar('*', '3', 'isoceles');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '   *   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '  ***  ');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, ' ***** ');
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  it('dibuja un triángulo isóceles de # de tamaño 4', async () => {
    await ejecutar('#', '4', 'isoceles');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '    #    ');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '   ###   ');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '  #####  ');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, ' ####### ');
    expect(consoleSpy).toHaveBeenCalledTimes(4);
  });

  it('dibuja un triángulo rectángulo de * de tamaño 4', async () => {
    await ejecutar('*', '4', 'rectangulo');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '*');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '**');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '***');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, '****');
    expect(consoleSpy).toHaveBeenCalledTimes(4);
  });

  it('dibuja un triángulo rectángulo de - de tamaño 3', async () => {
    await ejecutar('-', '3', 'rectangulo');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '-');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '--');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '---');
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });
});
