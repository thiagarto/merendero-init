
window.onscroll = function(){
   if(document.documentElement.scrollTop >200){
        document.querySelector('.go-top-container')
        .classList.add('show');
        console.log('bajando')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
        console.log('subiendo')

    }
}

const el = document.querySelector('.go-top-container')
.addEventListener('click', ()=>{
    console.log('clickeado');
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});