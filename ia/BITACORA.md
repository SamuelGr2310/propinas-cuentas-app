# Bitácora de Trabajo con IA

## Registro de Decisiones y Correcciones

1. **Ajuste de longitud de funciones (`max-lines-per-function`):** Se dividieron bloques de pruebas y componentes UI (`BillInputsCard`, `BillSummaryCard`, `BillHistoryCard`, `TipCalculatorScreen`) para cumplir el límite de 50 líneas por función.
2. **Expresiones void en callbacks (`no-confusing-void-expression`):** Se usaron bloques con llaves `{ ... }` en manejadores de eventos en JSX para cumplir con las reglas estrictas de TypeScript/ESLint.
3. **Verificación de cobertura de pruebas:** Se validó con Jest una cobertura del 100% en la lógica de negocio y almacenamiento de historial.
