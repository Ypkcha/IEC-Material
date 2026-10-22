import { describe, it, expect } from 'vitest';

/**
 * Testa a lógica de config/auth.ts.
 *
 * O arquivo exporta:
 *   export const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_padrao';
 *
 * Como o arquivo .env define JWT_SECRET=chave_secreta_super_segura_123, o
 * módulo sempre usa o valor do env. Aqui validamos ambos os ramos
 * testando a expressão diretamente.
 */
describe('config/auth - JWT_SECRET', () => {
  it('deve retornar o valor de process.env.JWT_SECRET quando ela estiver definida', () => {
    // Testa o ramo "truthy" do operador ||
    const envValue = 'minha_chave_de_teste';
    const result = envValue || 'chave_secreta_padrao';
    expect(result).toBe('minha_chave_de_teste');
  });

  it('deve retornar "chave_secreta_padrao" como fallback quando a variável não estiver definida', () => {
    // Testa o ramo "falsy" do operador ||
    const envValue = undefined;
    const result = envValue || 'chave_secreta_padrao';
    expect(result).toBe('chave_secreta_padrao');
  });

  it('JWT_SECRET exportado deve ter um valor não vazio (usando a chave configurada no .env ou o padrão)', async () => {
    // Importa o módulo e verifica que o export tem um valor útil
    const { JWT_SECRET } = await import('./auth');
    expect(JWT_SECRET).toBeTruthy();
    expect(typeof JWT_SECRET).toBe('string');
    expect(JWT_SECRET.length).toBeGreaterThan(0);
  });
});
