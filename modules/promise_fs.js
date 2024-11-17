const fs = require('fs/promises')

async function write(path,content){
    try {
        await fs.writeFile(path,content);
        console.log('file created')
    } catch (error) {
        console.error(`Error handling request: ${error}`);
    }
}

async function read(path){
    try {
        const data = await fs.readFile(path,'utf-8');
        console.log(data);
    } catch (error) {
        console.error(`Error handling request: ${error}`);
    }
}

async function unalive_file(path){
    setTimeout(async () => {
        try {
            await fs.unlink(path);
            console.log("file deleted");
        } catch (error) {
            console.error(`Error handling request: ${error}`);
        }
    }, 1500);
}


(async ()=>{
    await write(__dirname + '/tempfile.txt','yoakiry<3');
    await read(__dirname + '/tempfile.txt');
    await unalive_file(__dirname + '/tempfile.txt');
})();