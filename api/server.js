//Dependencies:
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('weolcome to livebidding');
})

app.listen(1000,()=>{
    console.log("server listening on port 3000");
})