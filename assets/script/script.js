window.addEventListener('scroll',()=>{
var up=document.querySelector('#up');


if(window.pageYOffset){
    up.style.display="flex";
    console.log("mexeu");

}else{
    up.style.display="none";

}
    
    
});

var link =document.querySelector("#link");
link.addEventListener('click',()=>{
    
    window.open('https://github.com/eltonps9?tab=repositories','_blank');
});
var link2 =document.querySelector(".buttonProj");
link2.addEventListener('click',()=>{
    window.open();
})






function sobreMim(){
    var button=document.querySelector('.maisSobre');
    var body=document.querySelector('body');
    if(button.style.display=="flex"){
        button.style.display='none';
        body.style.overflow='scroll';
    }else{
        button.style.display='flex';
        body.style.overflow='hidden';
    }
}