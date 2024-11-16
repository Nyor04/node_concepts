//Los callbacks en JavaScript son funciones que se pasan como argumentos a otras funciones 
// y se ejecutan después de que la función a la que se han pasado ha terminado su ejecución. 
// Es una forma de manejar código asincrónico, permitiendo que ciertas tareas se completen 
// antes de que otras se ejecuten.

function soy_asincrona(callback){
    setTimeout(() => {
        console.log("Este console log es asincrono!!");
        callback()
    }, 1000);
}

console.log("iniciando proceso!");
soy_asincrona(()=>{
    setTimeout(() => {
        console.log("Finalizando proceso!...");
    }, 1500);
})
