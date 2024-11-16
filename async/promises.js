const promesa = new Promise((resolve, reject) => {
    let x = true;
    console.log('iniciando funciones de la promesa...')
    setTimeout(() => {
        if (x) {
            resolve('La promesa se pudo cumplir correctamente');
        } else {
            reject('la promesa no se pudo cumplir correctamente');
        }    
    }, 4500);
})


//el parametro que pongamos en el then o catch es donde se almacena el valor retornado
//por la promesa. podemos pasar este valor a otro then(2) si lo retornamos en el then(1)
promesa
    //then(1)
    .then((result)=>{ // se ejeculta cuando la promesa retorna la funcion resolve
        console.log(result);
        return result; //se retorna para poder pasarlo al proximo then. 
    })
    //then(2)
    .then((result)=>{
        console.log(result + " texto adicional");
    })
    .catch((err)=>{
        console.log(`${err}`); //se ejecuta cuando la promesa retorna la funcion reject
    })
    .finally(()=>{
        setTimeout(() => {
            console.log("la promesa ha finalizado su ejecucion."); // se ejecuta independientemente del retorno de la promesa.
        }, 2000);
    })