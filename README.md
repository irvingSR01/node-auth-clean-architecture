# Orden de carpetas

## Presentation

Se trata de lo mas externo de los circulos que manejan en Clean Architecture. Se trata de lo que tiene comunicacion mas cercana a los usuarios. Esto es algo que puede cambiarse unicamente aqui, y la comunicacion con nuestra API no debería de verse afectada. Esto lo vuelve seguro para modificar y poder ocupar las bases de datos, por ejemplo, que necesitemos.

## Domain

Carpeta realmente importante. Aquí estarán las reglas que gobiernan nuestra aplicación y nuestra forma de trabajar. También se recomienda que este código no tenga dependencias externas, porque rompería la idea de que no se comuniquen con otros lados.

## Infrastructure

Punto intermedio entre Domain y Presentation. Aquí estarán las implementaciones de los repositorios y los mappers, entiendo que más que nada sirve para poder "limpiar" de alguna forma la data.