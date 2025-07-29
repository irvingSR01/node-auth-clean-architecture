# Orden de carpetas

## Presentation

Se trata de lo mas externo de los circulos que manejan en Clean Architecture. Aquello que tiene la comunicación mas cercana a los usuarios. Una de las ventajas es que puede cambiarse únicamente aquí el código, y la comunicacion con nuestra API no debería de verse afectada. Gracias a esto se vuelve seguro para modificar y poder ocupar las bases de datos, que necesitemos.

## Domain

Carpeta realmente importante. Aquí estarán las reglas que gobiernan nuestra aplicación y nuestra forma de trabajar. También se recomienda que este código no tenga dependencias externas, porque rompería la idea de que no se comuniquen hacia los círculos más alejados del centro.

## Infrastructure

Punto intermedio entre Domain y Presentation. Aquí estarán las implementaciones de los repositorios y los mappers, entiendo que más que nada sirve para poder "limpiar" de alguna forma la data.
