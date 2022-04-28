const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const { exec } = require('child_process');
const path = require('path');

// const querystring = require('querystring');

app.listen(port);

app.get("/api/run", (req, res) =>{
    let {macaddr} = req.query
    
    // const cmd = `echo "${macaddr}" | wc -c ; echo "${macaddr}"`
    const cmd = `wakeonlan ${macaddr} -p 7`
    exec(cmd, (error, stdout, stderr) => {
        res.json({
            cmd: `${cmd}`,
            stdout,
            stderr,
            error
        })
    })
    
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

console.log('todo list RESTful API server started on: ' + port);