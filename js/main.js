let up=document.querySelector('.up');
let all=document.querySelector('.all');
let a11=document.querySelector('.al11');
let a22=document.querySelector('.al22');
let a33=document.querySelector('.al33');
let all1=document.querySelector('.all1');
let a44=document.querySelector('.al44');
let imgs=document.querySelector('#imgs');

// function phones(phone)
// {
//     imgs.src=phone;
// }

window.onscroll=function(){
    if(scrollY>=105)
    {
        up.style.display='block';
        all.style.display='block';
    }
    else
    {
        up.style.display='none';
        all.style.display='none';
        a11.style.display='none';
        a22.style.display='none';
        a33.style.display='none';
        a44.style.display='none';


    }
}

up.onclick=function(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"

        }
    );
     }

     a11.style.display='none';
     a22.style.display='none';
     a33.style.display='none';
     a44.style.display='none';

     all.onclick=function(){
      
        if(a11.style.display==='block')
        {
        a11.style.display='none';
        a22.style.display='none';
        a33.style.display='none';
        a44.style.display='none';

        }
        else
        {
        a11.style.display='block';
        a22.style.display='block';
        a33.style.display='block';
        a44.style.display='block';


        }


     }


// onmouseenter
     
