import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
    coverage: {
      // Define o provedor nativo V8
      provider: 'v8',

      // Diretório onde os relatórios HTML e LCOV Serão salvos
      reportsDirectory: './coverage',

      //Padrão de arquivos incluidos na analise de cobertura
      include: ['src/**/*.ts'],

      //Arquivos e pastas que devem ser desconsiderados
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.spec.ts',
        'src/types/**',
        'src/server.ts',
        'src/migrations/**',
      ],

      //Definição de limites minimos obrigatorios (Quality Gate local)
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80
      }

    }
  },
});
