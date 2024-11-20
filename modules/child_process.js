const { spawn } = require('node:child_process');

// const ls = spawn('ls', ['-lah']);

// ls.stdout.on('data', (data)=>{
//     console.log(data.toString());
// });

// ls.stderr.on('data', (data)=>{
//     console.error(data.toString());
// });

// ls.on('close', (code)=>{
//     console.info(`Child process exited with code ${code}`);
// });


const htop = spawn('htop');

htop.stderr.on('data', (data)=>{
    console.error(data.toString());
});


htop.on('spawn',()=>{
    console.log('htop arriba');
    
});

htop.on('close',()=>{
    console.log('htop abajo');
});

htop.kill()


console.log(htop.pid);
