function saludar(nombre, callback_a){
    console.log(`Hola ${nombre}, espero que te encuentres Bien`);
    setTimeout(() => {
        callback_a();
    }, 1500);
}
function hablar(callback_b){
    setTimeout(function () {
        console.log("bla bla bla bla...");
        callback_b();
    },1500);
}


function despedirse(nombre, callback_c){
    setTimeout(() => {
        console.log(`nos vemos ${nombre}!`);
        callback_c();
    }, 1000);
}


//la multiple identacion de callbacks se le conoce como callback hell. conforme
//se va utilizando el codigo se vuelve menos legible
console.log("Iniciando proceso");
saludar('nyor',function(){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                hablar(function(){
                    hablar(function(){
                        despedirse('nyor', function(){
                            console.log('Terminando proceso');
                        }); //oké 
                    }); // Second idention, its good.
                }); 
            });// other?
        });// oh hell nah, look that dawg go bruh 
    });// at this point i might have lose my mental health
}); // finally, freedom.