let up=document.querySelector('.up');

// if(scrollY>1000)
// {
// up.display="block";
// }
// else
// {
//     up.display="hidden";
// }
// v(up);

window.onscroll=function(){
    if(scrollY>=300)
    {
        up.style.display='block';
    }
    else
    {
        up.style.display='none';

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