const { Router } = require('express');
const { create } = require('express-handlebars');
const Lessons = require('../modules/module');
const Users = require('../modules/users');
let now = new Date();
let dow = now.getDay()-1;
let currentday;
let isPassWrg = false;
let isUserUnfined = false;
let dayObj = [];

let isUserJoined = false;



let classes = ['10-1','10-2','10-3','10-4','10-5']


let router = Router()

router.get('/', (req, res) => {
    res.render('index',{
        classes
    });
});
router.get('/class/:id', (req, res) => {
    Lessons.find({ class: req.params.id }, (e, cb) => {
        if (e) throw e;
        if (cb.length) {

            
            if(dow == 0) currentday = cb[0].mon;
            else if(dow == 1) currentday = cb[0].tue;
            else if(dow == 2) currentday = cb[0].wed;
            else if(dow == 3) currentday = cb[0].thr;
            else if(dow == 4) currentday = cb[0].fri;
            else if(dow == 5) currentday = cb[0].sat;

            let LessonsCleared = currentday.slice(0, currentday.length)

            for (let i = 0; i < LessonsCleared.length; i++) {
                if (LessonsCleared[i] === 'Второй завтрак'||LessonsCleared[i] === 'Прогулка' || LessonsCleared[i] === 'Перемена' || LessonsCleared[i] === "Обед") {
                    LessonsCleared.splice(i, 1);
                    i--;
                }
            }

            res.render('timeTable', {
                yourClass: req.params.id,
                yourLessons: LessonsCleared,
                timeTable: cb[0].timeTable,
                LessonsFull: currentday
            })
        }
        else res.send('Class unexpected')
    });
})
router.get('/create',(req,res)=>{
    res.redirect('/create/10-1/1')
})

router.get('/create/10-:class/:id',(req,res)=>{
    res.render('createTT',{
        dayObj,
        class: req.params.class,
        day: req.params.id
    })
})

router.post('/create/:class/:id',(req,res)=>{
    console.log(req.params.class);
    console.log(req.params.class);
    for(let i = 0;i <req.body.dayObj.length;i++){
        if(req.body.dayObj[i]==''){req.body.dayObj.splice(i,1); i--}
    }
    for(let i = 0; i < req.body.Ltime.length; i++){
        if(req.body.Ltime[i]==''){req.body.Ltime.splice(i,1); i--}
    }
    if(req.params.id==1){
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{mon:req.body.dayObj},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    })
}else if(req.params.id==2){
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{tue:req.body.dayObj},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    })
}
else if(req.params.id==3){
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{wed:req.body.dayObj},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    })
}
else if(req.params.id==4){
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{thr:req.body.dayObj},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    })
}
else if(req.params.id==5){
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{fri:req.body.dayObj},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    })
}
else if(req.params.id==6){
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{sat:req.body.dayObj},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    })
}
    Lessons.findOneAndUpdate({class:'10-'+req.params.class},{timeTable:req.body.Ltime},function(err, result){
        if(err) return console.log(err);
        console.log(result);
    });
    res.redirect('/');
})

router.get('/login',(req,res)=>{
    res.render('create',{
        yourClass: 'Login'
    })
})

async function f1(){
for(let i = 0; i<=18;i++){
    dayObj[i] = 'dayObj';
}
}

f1();

router.post('/login',(req,res)=>{
    Users.find({userLogin:req.body.login},(e,cb)=>{
        if(e)throw e;
        if(cb.length){
        if(cb[0].userPassword==req.body.password){
            res.send('here is a teacher page');
            isUserJoined = true
        } else{
            res.render('create',{
                yourClass: 'Create',
                isPassWrg: true,
            })
            
        }
    }else{
        res.render('create',{
            yourClass: 'Create',
            isUserUnfined: true,
        })
    }
    })
})

module.exports = router;