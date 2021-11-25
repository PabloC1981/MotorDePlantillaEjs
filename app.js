import express from 'express';
const app = express();
const server = app.listen(8080,()=>{
    console.log("listening on 8080");
})
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

let usuarios = []; //Esto NO es una buena practica!!!!!
app.get('/',(req,res)=>{
    let renderObject={
        users:usuarios
    }
    res.render('form.ejs',renderObject);
})

app.get('/datos',(req,res)=>{
    let {min,max,nivel,titulo} = req.query;
    res.render('medidor',{
        min:min,
        max:max,
        value:nivel,
        title:titulo
    })
})

app.post('/personas',(req,res)=>{
    let user ={
        name:req.body.name,
        last_name:req.body.last_name,
        age:req.body.age
    }
    console.log(usuarios); 
    usuarios.push(user);
    
    res.send({message:'registered'})
})