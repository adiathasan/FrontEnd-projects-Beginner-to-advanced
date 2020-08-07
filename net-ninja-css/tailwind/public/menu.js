var drop = document.getElementById('drop');
var menu  = document.getElementById('menu');

// drop.addEventListener('mouseover', () =>{

//         menu.classList.remove('hidden');

// })

// drop.addEventListener('mouseleave', ()=>{
//     menu.classList.add('hidden');
// })

drop.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
})