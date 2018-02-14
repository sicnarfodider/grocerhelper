const express =  require('express');
const PORT = process.env.port || 9000;
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>App Is Here</h1>')
});

app.listen(PORT, ()=> {
    console.log('App running on PORT: '+ PORT);
});
