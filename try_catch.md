

# Manejo de Errores en Node.js

Con Node.js podemos manejar los errores de una manera muy óptima, pero primero debemos entender cómo Node maneja los errores por defecto. Cuando sucede un error en Node, por defecto, terminará todo el proceso de nuestro código para avisar que ha ocurrido un error, lo cual puede ser fatal para nuestros proyectos.

Los errores además se notifican por hilos. Si un error sucede en el hilo principal del event loop, es decir, el evento queue, el error se avisará desde este mismo hilo. Sin embargo, si un error ocurre en otro hilo, como el de las funciones asíncronas, el error se avisará desde aquel hilo sin dejar mostrar el error del hilo principal.

Nosotros podemos manejar este flujo de errores para que Node no se detenga al momento de que ocurra uno y lo podamos manejar según nuestros deseos. Para esto, usamos `try` y `catch`. 

- **`try`**: Es el bloque de código que ejecuta la función que puede o no fallar.
- **`catch`**: Es la función que atrapa el error y nos permite especificar qué hacer con él.

## Ejemplos de Código

### Ejemplo 1: Manejo Básico de Errores con `try` y `catch`

```javascript
try {
  // Código que puede fallar
  const data = fs.readFileSync('/path/to/file.txt', 'utf8');
  console.log(data);
} catch (error) {
  // Manejo del error
  console.error('Ha ocurrido un error al leer el archivo:', error.message);
}
```

### Ejemplo 2: Manejo de Errores Asíncronos

```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    // Código asíncrono que puede fallar
    const data = await fs.readFile('/path/to/file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    // Manejo del error
    console.error('Error al leer el archivo de manera asíncrona:', error.message);
  }
}

readFile();
```

### Ejemplo 3: Manejo de Errores en Promesas

```javascript
const fetch = require('node-fetch');

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // Manejo del error en la promesa
    console.error('Error al hacer la solicitud:', error.message);
  });
```

---

Los bloques Try y Catch deben ser colocados teniendo en consideracion el funcionamiento del codigo que estamos ejecutando, es decir, es sincrono o asincrono? de esto depende que se detecte el error de manera correcta.