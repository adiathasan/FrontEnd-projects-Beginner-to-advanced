document.addEventListener('DOMContentLoaded', ()=>{

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    let state = null

    let msg = document.querySelector('.card-header') 
    const csrftoken = getCookie('csrftoken');

    var add = document.getElementById('add')

    var form = document.querySelector('.form')

    let dynamic = ()=>{
        var url = 'http://127.0.0.1:8000/api/task-list/'
        fetch(url).then(data => data.json()).then((data) => {
            let div = ''
            data.forEach((list, index) => {
                if (list.completed === true) {
                    div += `
    
            <div  class="w-full         justify-content-between text-left d-flex flex-wrap task complete">
                <div class=" p-c">
                        <p style=''  id=${list.id}>${index + 1}. ${list.title} </p>
                </div>
                <div class=" btn-u-d">
                    <button id="-${list.id}" class="btn btn-sm btn-outline-dark up" type="">Update</button> <a
                    id="^${list.id}"
                            class="btn btn-sm btn-danger" href="#^${list.id}">Delete</a>
                </div>
            </div>
                <hr>
    
                `
                } else {
                    div += `
    
            <div id="" class="w-full         justify-content-between text-left d-flex flex-wrap task">
                <div class=" p-c">
                    <p style='' id=${list.id}>${index + 1}. ${list.title} </p>
                </div>
                <div class=" btn-u-d">
                    <button id="-${list.id}" class="btn btn-sm btn-outline-dark up" type="">Update</button> <a 
                    id="^${list.id}"
                            class="btn btn-sm btn-danger" href="#^${list.id}">Delete</a>
                </div>
            </div>
                <hr>
                    
                `

                }

                add.innerHTML = div

            })

        })
    }

    dynamic()

    var url = 'http://127.0.0.1:8000/api/task-create/'

    function ucl(p='', state){

        url = `http://127.0.0.1:8000/api/task-${state}/${p}/`

    }

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let title = document.getElementById('title').value
        
        fetch(url, {
            method:'POST',
            headers:{
                'Content-type': 'application/json',
                'x-CSRFToken': csrftoken

            },
            body:JSON.stringify({'title': title, 'completed': false})

            

        }).then((response)=>{
            document.getElementById('title').value = ''
            dynamic()
            url = 'http://127.0.0.1:8000/api/task-create/'
            if(state == 'update'){
                notification('bg-info', 'Task Updated!')
            }else{
                notification('bg-success', 'Task created!')
            }
        })

    })

    add.addEventListener('click', (e)=>{
       if(e.target.hasAttribute('type')){
           var op = e.target.id.slice(1)
           var edit = document.getElementById(op).innerText.slice(3)
           document.getElementById('title').value = edit
           state = 'update'
           ucl(op, state) 

       }
    })


    add.addEventListener('mousedown', (e)=>{
        e.preventDefault()
        state = 'delete'
        if(e.target.hasAttribute('href')){
            var op = e.target.id.slice(1)
            ucl(op, state)
            fetch(url, 
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'x-CSRFToken': csrftoken
                        }

                    } 

                ).then(response=>{
                    dynamic()
                    url = 'http://127.0.0.1:8000/api/task-create/'
                    notification('bg-danger', 'Task Delted!')
                })

        }
    })

    add.addEventListener('click', (e) => {
        if (e.target.hasAttribute('style')) {
            var pk = e.target.id
            var text = e.target.innerText.slice(3)
            ucl(pk, 'update')
            var cl = e.target.parentElement.parentElement.classList
            var check;
            check = true
            cl.forEach((v, i)=>{
                if(v == 'complete'){
                    check = false
                }
            })

            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'x-CSRFToken': csrftoken
                    },
                    body: JSON.stringify({ 'title': text, 'completed': check })
                }
                
            ).then(response => {
                dynamic()
                url = 'http://127.0.0.1:8000/api/task-create/'
                if(check === true){
                    notification('bg-success', 'Task Completed!')
                }else{
                    notification('bg-warning', 'Task unchecked!')
                }
            })
        }
    })

    

    let notification = (cls, message)=>{
        msg.classList.remove('bg-primary')
        msg.classList.add(`${cls}`)
        msg.innerHTML = `<h4>${message}</h4>`
        document.getElementById('title').value = ''
        setTimeout(()=>{
            msg.classList.remove(`${cls}`)
            msg.classList.add( `bg-primary`)
            msg.innerHTML = `<h4>Tasks</h4>`
        }, 3000)
        
    }


})