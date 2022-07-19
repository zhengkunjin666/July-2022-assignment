// const http=require('http');
// const hostname='127.0.0.2';
// const port=4000;
// const serve=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     // res.end('Hello World!\n');
//     // res.end('Hello Jax\n');
//     res.end('Hello Jay\n');
// });

// serve.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${[port]}/`);
// });


const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello Word!');
});
app.listen(4000,()=>{
    console.log('Example app listening on port 4000!');
})