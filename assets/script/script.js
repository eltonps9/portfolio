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
