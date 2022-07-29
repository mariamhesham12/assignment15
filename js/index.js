const plus= document.querySelector(".plus");
const minus= document.querySelector(".minus");
const num= document.querySelector(".num");
let a=0;
plus.addEventListener("click",()=>{
    a++;
    num.innerText=a;
    console.log("a");
});
minus.addEventListener("click",()=>{
    if(a>0){
    a--;
    num.innerText=a;}
    console.log("a");
});


let fa =document.querySelector('.fa-shopping-cart');
let div=document.querySelector('.inside');

fa.addEventListener('click',()=>{
    if(div.style.display==='none'){
        div.style.display='block';
    }
    else{
        div.style.display='none'
    }
})



