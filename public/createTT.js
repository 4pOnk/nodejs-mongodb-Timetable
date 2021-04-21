let table = document.getElementsByClassName('createTable')[0];
let plus = document.getElementsByClassName('addNew')[0];
let ul = document.querySelectorAll('.timetable ul')[0];
let wds = document.getElementsByClassName('wd')[0];
let tt = document.getElementsByClassName('timetable')[0];
let tr = document.getElementsByClassName('tr'); 
let addLessonInputs = document.querySelectorAll('.addLesson input');
let minus = document.getElementsByClassName('removeNew')[0];

let count = 0;

for( let i = 0;i<tr.length;i++){
    tr[i].style.display = 'none';
}
let showTd = ()=>{
    tr[count].style.display = 'block';
    count++;
}

showTd();

tr[0].style.display = 'block';

minus.addEventListener('click',()=>{
    tr[count-1].style.display = 'none';
    count-=1;
})

wds.addEventListener('click', () => {
    tt.style.display = 'block';
    wds.style.borderBottom = '5px solid #d2b8da'
})

plus.addEventListener('click', () => {
    ul.style.display = 'block'
    ul.style.opacity = '1'
})
ul.addEventListener('click', (e) => {
    ul.style.display = 'none';
    ul.style.opacity = '0';
    if(e.target.innerText == 'Урок'){
        showTd();
        addLessonInputs[count-1].value = null;
    }
    else{
        showTd();
        addLessonInputs[count-1].value = e.target.innerText;
    }
})