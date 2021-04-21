const express = require('express');
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
const Lessons = require('./modules/module');
let Users = require('./modules/users')
const router = require('./routs/routs');
const url = 'mongodb+srv://Kamil:10tizovo@cluster0.jbqvj.mongodb.net/lessons?retryWrites=true&w=majority';
const localUrl ='mongodb://localhost:27017'
const PORT = process.env.PORT || 3000;

const app = express();

async function start(){
    await mongoose.connect(url,
    {useNewUrlParser:true,useUnifiedTopology: true})
    app.listen(PORT,()=>{
        console.log('Senpai i\'m connected');
    })
}
app.use(express.urlencoded({extended: true}))
app.use(router);
app.use('/static',express.static(__dirname+'/public'))
app.engine("hbs",expressHbs(
    {
        extname:'hbs',
        layoutsDir:'./views/layouts',
        defaultLayout:'main',
        partialsDir:__dirname+'/views/partials'
    }
))
app.set("view engine","hbs");
let class10p3 = new Lessons({
    class:'10-3',
    mon: ['Родной язык','Перемена','Проект. деят-ть','Перемена','Обществознание','Второй завтрак','Англ.яз','Перемена','Математика','Перемена','Математика','Обед','Прогулка','РИЛ','Перемена','РИЛ'],
    timeTable: [8,5,8,45,8,55,9,35,9,45,10,25,10,40,11,20,11,30,12,10,12,20,13,0,13,45,14,35,15,15,15,20,16,0]
}) ;

let andrew = new Users({
    userLogin:'andrew',
    userPassword:'123',
    classLet:'10-3'
})




start();