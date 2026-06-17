import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.mock('readline-sync', () => ({
  default: { question: vi.fn() },
}));

describe('Arte ASCII - Cuadrado', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.resetModules();
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  async function ejecutar(caracter: string, tamaño: string): Promise<void> {
    const rl = await import('readline-sync');
    vi.mocked(rl.default.question)
      .mockReturnValueOnce(caracter)
      .mockReturnValueOnce(tamaño);
    await import('../src/index.ts');
  }

  it('dibuja un cuadrado de * de tamaño 3', async () => {
    await ejecutar('*', '3');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '***');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '***');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '***');
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  it('dibuja un cuadrado de # de tamaño 1', async () => {
    await ejecutar('#', '1');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '#');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('dibuja un cuadrado de - de tamaño 4', async () => {
    await ejecutar('-', '4');
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '----');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '----');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '----');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, '----');
    expect(consoleSpy).toHaveBeenCalledTimes(4);
  });

  it('dibuja un cuadrado de @ de tamaño 5', async () => {
    await ejecutar('@', '5');
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    for (let i = 1; i <= 5; i++) {
      expect(consoleSpy).toHaveBeenNthCalledWith(i, '@@@@@');
    }
  });
});
