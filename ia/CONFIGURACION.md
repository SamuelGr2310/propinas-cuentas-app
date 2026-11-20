# Configuración de Seguridad y Calidad de IA

## Barreras y Reglas Aplicadas

1. **Primer commit con reglas:** `AGENTS.md`, `CLAUDE.md`, `.claude/settings.json`, `.gitignore` y `.env.example` establecidos antes del código de aplicación.
2. **Protección de secretos:** `.env.local` excluido de Git; `.env.example` con valores ficticios.
3. **Límites de código (`eslint.config.mjs`):** TypeScript estricto (`strict: true`, `noUncheckedIndexedAccess: true`), complejidad $\le 10$, funciones $\le 50$ líneas, profundidad $\le 3$, prohibición de `any`, `@ts-ignore`, `@ts-nocheck` y `console` sin control.
4. **Calidad automatizada (`npm run check`):** Ejecuta `typecheck`, `lint`, `format:check` y `test` con cobertura mínima del 80%.
