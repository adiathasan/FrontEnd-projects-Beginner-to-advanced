let bk = document.querySelector('#book'),
auth = document.querySelector('#author'),
isb = document.querySelector('#isbn')
const btn = document.getElementById('btn')
const err = document.querySelector('.err')
const insert = document.getElementById('insert')

class bookList{
    constructor(book, author, isbn){
        this.book = book
        this.author = author
        this.isbn = isbn
    }

    addingListDom(){
        let tr = document.createElement('tr'), 
        tdBk = document.createElement('td'), 
        tdAuth = document.createElement('td'), 
        tdIsb = document.createElement('td'),
        a = document.createElement('a')
        tdBk.innerHTML = this.book 
        tdAuth.innerHTML = this.author 
        tdIsb.innerHTML = this.isbn 
        a.innerHTML = 'Delete'
        a.setAttribute('href', '#') 
        a.setAttribute('class', 'btn btn-danger btn-sm') 
        a.setAttribute('type', 'button') 
        tr.appendChild(tdBk)
        tr.appendChild(tdAuth)
        tr.appendChild(tdIsb)
        tr.appendChild(a)
        insert.appendChild(tr)
    }


    
}

// validation

let validator = (class_, html)=>{
    err.style.display = 'block'
    err.classList.add(`${class_}`)
    err.classList.remove('d-none')
    err.innerHTML = `${html}`
    setTimeout(() => {
        err.style.display = 'none'
        err.classList.remove(`${class_}`)
        err.innerHTML = ''
    }, 3000)
}

// inserting list

btn.addEventListener('click', (e)=>{
    if (bk.value === '' || auth.value === ''
    || isb.value === ''){
        validator('bg-danger', 'Form can not be empty')
    }else{
        let obj = new bookList(bk.value, auth.value, isb.value)
        obj.addingListDom()
        setLocalStorage(obj)
        bk.value = ''
        auth.value = ''
        isb.value = ''
        validator('bg-success', 'Book successfully added to the list')
    }
    
})

// deleting list

insert.addEventListener('click', (e)=>{
    if(e.target.hasAttribute('href')){
        let del = e.target.parentElement
        deletingFromStorage(del)
        del.remove()
        validator('bg-warning', 'Book deleted')
    }
})


// local storage

//* adding list
const setLocalStorage = (list)=>{
    let LS = localStorage
    let lists;

    if(LS.getItem('lists') == null){
        lists = []
    }else{
        lists = JSON.parse(LS.getItem('lists'))
    }

    lists.push(list)
    LS.setItem('lists', JSON.stringify(lists))

}


// serving form localStorage


const servingFromStorage = () => {
    let LS = localStorage
    let lists;
    if (LS.getItem('lists') == null) {
        lists = []
    } else {
        lists = JSON.parse(LS.getItem('lists'))
    }

    lists.forEach(element => {
        let tr = document.createElement('tr'),
            tdBk = document.createElement('td'),
            tdAuth = document.createElement('td'),
            tdIsb = document.createElement('td'),
            a = document.createElement('a')
        tdBk.innerHTML = element.book
        tdAuth.innerHTML = element.author
        tdIsb.innerHTML = element.isbn
        a.innerHTML = 'Delete'
        a.setAttribute('href', '#')
        a.setAttribute('class', 'btn btn-danger btn-sm')
        a.setAttribute('type', 'button')
        tr.appendChild(tdBk)
        tr.appendChild(tdAuth)
        tr.appendChild(tdIsb)
        tr.appendChild(a)
        insert.appendChild(tr)
    });

}

document.addEventListener('DOMContentLoaded', servingFromStorage)

// delteting from localStorage


const deletingFromStorage = (list) => {
    let LS = localStorage
    let lists;
    if (LS.getItem('lists') == null) {
        lists = []
    } else {
        lists = JSON.parse(LS.getItem('lists'))
    }

    list.lastChild.remove()
    lists.forEach((element, index) => {
        if(element.isbn == list.lastChild.innerHTML){
            lists.splice(index, 1)
        }
    });
    
    LS.setItem('lists', JSON.stringify(lists))
}   