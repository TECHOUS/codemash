const {exec} = require('child_process');

exec('pwd', (err, stdout, stderr)=>{
    if(err){
        return;
    }
    console.log(`stdout: ${stdout}`);
})
