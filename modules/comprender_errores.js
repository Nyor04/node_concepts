try {
    // Código que lanza un error
    let result = someUndefinedFunction();
  } catch (error) {
    // Leer propiedades del error
    console.error('Nombre del Error:', error.name); // Ejemplo: "ReferenceError"
    console.error('Mensaje del Error:', error.message); // Ejemplo: "someUndefinedFunction is not defined"
    console.error('Stack del Error:', error.stack); // Muestra el seguimiento de la pila de llamadas
  }