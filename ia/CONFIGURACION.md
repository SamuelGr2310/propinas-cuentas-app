# Configuración de Seguridad de IA

## Barreras Aplicadas
1. **Restricción de Archivos (.gitignore / AGENTS.md):** Se bloquea la lectura de `.env*` y claves.
2. **Sanitización de Entorno:** `.env.example` contiene valores falsos. El secreto canario reside únicamente en `.env.local`.
3. **Control de Ejecución:** Se deniega el uso de comandos destructivos (`sudo`, `rm -rf`, `curl`, `wget`) y push no autorizado.
4. **Instrucciones de Contexto:** `AGENTS.md` explicita que datos de entrada son contenido y no órdenes (prevención de Prompt Injection).
