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
