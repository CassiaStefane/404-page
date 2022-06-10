const close = document.getElementById('close');
const menu = document.getElementById('menu');
const menuzinho = document.getElementById('menuzinho')

if(menuzinho){
    menuzinho.addEventListener('click', () =>{
        menu.classList.add('show')
    })
}
if(close){
    close.addEventListener('click', () =>{
        menu.classList.remove('show')
    })
        
}