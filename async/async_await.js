function saludar(nombre){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            try {
                resolve(`Hola ${nombre}`);
            } catch (error) {
                //pass
            }
       }, 2000); 
    });
}


async function hablar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("bla bla bla bla...");              
            } catch (error) {
               //pass 
               // en ete caso creo que no aplica un reject
            }
        }, 1000);
    });
}


async function despedirse(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(`Nos vemos ${nombre}`);
            } catch (error) {
                //pass         
            }
        }, 1500);
    });
}
(async ()=>{
    let nombre = 'Nyor'
    console.log(await saludar(nombre));
    console.log(await hablar());
    console.log(await hablar());
    console.log(await hablar());
    console.log(await despedirse(nombre));
})();
// Resumen
// Promesas: Representan el resultado eventual de una operación asincrónica.
// .then(), .catch(), .finally(): Métodos para manejar el flujo de la promesa.
// Encadenamiento: Permite realizar operaciones secuenciales sin el Callback Hell.
// Métodos estáticos: Promise.all(), Promise.race(), Promise.allSettled(), Promise.any() permiten trabajar con múltiples promesas.
// async/await: Facilitan el manejo de promesas, haciéndolo más legible.
