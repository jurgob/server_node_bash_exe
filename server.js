const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const { exec } = require('child_process');

// const querystring = require('querystring');

app.listen(port);

app.get("/api/run", (req, res) =>{
    // let {cmd} = req.query

    const cmd = `echo "hello bash" ; touch /tmp/cazzo`
    exec(cmd, (error, stdout, stderr) => {
        res.json({
            cmd: `${cmd}`,
            stdout,
            stderr,
            error
        })
    })
    
})

console.log('todo list RESTful API server started on: ' + port);