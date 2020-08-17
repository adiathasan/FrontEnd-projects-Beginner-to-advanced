// variables 

let input = document.querySelector('#task')
let btn = document.getElementById('btn')
const add = document.getElementById('add')
const del = document.getElementById('del')
const fil = document.getElementById('filter')
add.innerHTML = ''

// add tasks

btn.addEventListener('click', (e)=>{
    let val = input.value
    if(val !== ''){
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${val} `))
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.innerHTML = 'x'
        li.appendChild(a)
        add.appendChild(li)
        input.value = saveTaskToLocal(val)
    }
})

// delete single

add.addEventListener('click', (e)=>{
    if(e.target.hasAttribute('href')){
        const d = e.target.parentElement
        if (confirm(`are you sure that you want to delete ${d.innerText}`)){
           delteFromLocal(d)
           d.remove(); 
        }
    }
})


// delete all 

del.addEventListener('click', ()=>{
    if(add.innerHTML != ''){
        if(confirm('By this you will delete all, proceed!!')){
            add.innerHTML = ''
            allDeleteLocal()
        }
    }else{
        add.innerHTML = '<h4 class=" uppercase text-red-600">You have no task left</h4>'
        setTimeout(()=>{
            add.innerHTML = ''
        }, 4000)
    }
})


// filtering tasks
fil.addEventListener('keyup', (e)=>{
    let filVal = e.target.value.toLowerCase()
    document.querySelectorAll('li').forEach(task=>{
        let v = task.firstChild.textContent
        if(v.toLowerCase().indexOf(filVal) != -1){
            task.style.display = 'block'
        }else{
            task.style.display = 'none'
        }
    })
})


// localStorage settings

function saveTaskToLocal(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    const empty = ''
    return empty
}

document.addEventListener('DOMContentLoaded', (e)=>{
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    } 

    tasks.forEach(task =>{
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${task} `))
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.innerHTML = 'x'
        li.appendChild(a)
        add.appendChild(li)

    })


        
})


function delteFromLocal(task){
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    } 

    let t = task;
    t.removeChild(t.lastChild)
    let ind = tasks.indexOf(t.textContent.trim())
    tasks.splice(ind, 1)
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


function allDeleteLocal(){
    localStorage.setItem('tasks', JSON.stringify([]))
}



















// btn.addEventListener("click", jhka)

// function jhka(e) {
//     console.log(input.value)
//     if (input.value === '') {
//         alert('input can not be null')
//     } else {
//         let td = document.createElement('tr')
//         let a = document.createElement('a')
//         a.setAttribute('href' ,'#')
//         a.innerText= 'x'
//         td.innerHTML = (`<td>${input.value}</td>`)
//         td.appendChild(a)
//         add.appendChild(td);
//         input.value = ''
        
//     }

// }

// add.addEventListener('click',(e)=>{
//     if(e.target.hasAttribute('href')){
//         if(confirm('Are you sure!')){
//             let grab = e.target.parentElement;
//             grab.remove();
//         }
//     }
// })

// del.addEventListener('click', (e)=>{
//     if (add.innerHTML !== '<tr><th></th></tr>'){
//         if(confirm('Are you sure that you want to delete all!')){
//             add.innerHTML = "<tr><th></th></tr>"
//         }
//     }
// })

// fil.addEventListener('keyup', (e)=>{
//     let val = e.target.value.toLowerCase()
//     document.querySelectorAll('tr').forEach( filter =>{
//         let cell = filter.firstChild.textContent.toLowerCase()
//         if(cell.indexOf(val) != -1){
//             filter.style.display = 'block';
//         }else{
//             filter.style.display = 'none';
//         }
//     })
// })