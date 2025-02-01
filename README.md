# Diego App

## Descripción del Proyecto

El proyecto es una plataforma web para la creación y gestión de cuestionarios, similar a Google Forms. Permite a los usuarios diseñar formularios con preguntas abiertas y cerradas, administrar respuestas y evaluar resultados con reglas específicas.

### Características Principales

- Dashboard de Cuestionarios: Los usuarios pueden crear, modificar, eliminar, leer e imprimir cuestionarios.

- Gestión de Preguntas: Se soportan preguntas abiertas y cerradas, con reglas específicas para respuestas múltiples.

- Evaluación de Respuestas: En preguntas cerradas, el usuario debe seleccionar todas las respuestas correctas para obtener el puntaje.

- Almacenamiento de Datos: Se usa una estructura relacional que vincula cuestionarios, preguntas y respuestas.
  
### Levantar el proyecto

Proyecto creado con Nest como framework backend
TypeORM como ORM
Mysql como BD
Jest para testing

1. Crear un archivo .env
2. Copiar los datos de .env.example al .env
3. Crear una base de datos con el mismo nombre que pusiste en tu .env
4. Ejecutar el comando `npm run dev:start`
