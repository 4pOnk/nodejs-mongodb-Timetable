let cl = document.getElementById('classListOpDef');
let ul = document.querySelector('#classListOp ul');
let clSpan = document.querySelector('#classListOpDef *');
let count = 0;
let nowDiv = document.getElementById('now');

nowDiv.onclick = ()=>{
    alert()
}

cl.onmousedown = ()=>{
    return false
}

cl.onclick = function(e){
    if(count%2===0){
    ul.style.transform = 'translateY(0)';
    cl.style.borderRadius = '7px 7px 0 0'
    }else{
        ul.style.transform = 'translateY(-100%)';
        cl.style.borderRadius = '7px';
    }
    count++;
    
}

ul.onclick = (e)=>{
    cl.innerHTML = '<span>' + e.target.innerHTML+'</span>';
    clSpan = document.querySelector('#classListOpDef *');
}

let now  = new Date();

let hours = now.getHours();

let minuts = now.getMinutes();

let seconds = now.getSeconds();

let timeShow = () => {
if(seconds<10&&minuts<10){
    nowDiv.innerHTML = "<span>" + hours + " : 0" + minuts + ' : 0' + seconds +'</span>';
   }else if(minuts<10&&seconds>9){
       nowDiv.innerHTML = "<span>" + hours + " : 0" + minuts + ' : ' + seconds +'</span>';
   }else if(seconds<10&&minuts>9){
       nowDiv.innerHTML = "<span>" + hours + " : " + minuts + ' : 0' + seconds +'</span>';
   }else{
       nowDiv.innerHTML = "<span>" + hours + " : " + minuts + ' : ' + seconds +'</span>';
   }
}
timeShow();

setInterval(()=>{
    let now  = new Date();

hours = now.getHours();

minuts = now.getMinutes();

seconds = now.getSeconds();   

timeShow();

},1000)

document.addEventListener('click',(e)=>{
    if(e.target!=cl&&e.target != clSpan){
        ul.style.transform = 'translateY(-100%)';
        cl.style.borderRadius = '7px';
        count++;
    }
})