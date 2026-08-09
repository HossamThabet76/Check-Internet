let title=document.querySelector('h2');
let ul=document.querySelector('ul');
let button=document.querySelector('button');
onload=function(){
    if(navigator.onLine){
        online();
    }
    else{
        offline();
    }
}
addEventListener('online',function(){
    online();
})
addEventListener('offline',function(){
    offline();
})
button.onclick=function(){
    location.reload();
}
function online(){
    title.innerHTML='Online Now';
    title.style.color='green';
    ul.style.display='none';
    button.style.display='none';
}
function offline(){
    title.innerHTML='Offline Now';
    title.style.color='black';
    ul.style.display='block';
    button.style.display='block';
}