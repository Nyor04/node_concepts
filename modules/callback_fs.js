const fs = require('fs');

 function write(path, content, callback){
    fs.writeFile(path,content,(err)=>{
        if (err) {
            console.error(err);
        } else {
            console.log("file successfuly created");
            callback();
            //pass, if no errors that means the file is created or writed.
        }
    });
}

 function read(path,callback){
    fs.readFile(path,(err,data)=>{
        if (err) {
            console.error(err);
        } else {
            console.log(data.toString());
            callback();
        }
    });
    
}


 function unalive_file(path, callback){
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('file deleted');
            callback();
        }
      });
}

console.log("proceso iniciado...");
write(__dirname + '/archivoTemporal.txt',"yokairy <3",function(){
    read(__dirname + '/archivoTemporal.txt',function(){
        unalive_file(__dirname + '/archivoTemporal.txt',function(){
            console.log("Proceso terminado...");
        });
    });
});