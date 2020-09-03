const notification = document.querySelector('.badge')

let notif = 0

var btnSuc = ''
var btnShop = ''

const check = document.querySelector('.checkout')

var img = ''

let price = 0

let totalHtml = document.getElementById('total')

const market = document.querySelector('.market')

let cart = document.getElementById('cart')

market.addEventListener('click', e =>{
    if(e.target.hasAttribute('id')){
        handleAddBtn(e.target)
        
    }
})

const handleAddBtn = (e)=>{
    notif = parseInt(notification.innerHTML)

    notification.innerHTML = notif + 1

    price = parseInt(e.previousElementSibling.innerHTML)

    let totalPrice = parseInt(totalHtml.innerHTML)

    btnSuc = e.nextElementSibling 

    btnSuc.classList.remove('d-none')

    e.classList.add('d-none')

    totalHtml.innerHTML = totalPrice + parseInt(e.previousElementSibling.innerHTML)

    img = e.previousElementSibling.previousElementSibling.previousElementSibling
    console.log(img.src)
    check.classList.remove('d-none')
    cart.innerHTML += `<div class='row'>
                        <div class="col-4 img">
                            <img src=${img.src} class="img-fluid my-3  col-md-6"
                                alt="">
                        </div>
                        <div class="p-3 d-flex col-8 bt">
                            <button id="+${e.id}" type="" class="btn btn-outline-dark mr-1">+</button>
                            <button id="-${e.id}" type="" class="btn btn-outline-danger">-</button>
                            <h6 id="${e.id}amount" class="ml-auto">${1}</h6>
                            <h6 class=" ml-auto">$${price}</h6>
                        </div>
                    </div>`
}


cart.addEventListener('click', e =>{
    if(e.target.hasAttribute('type')){

        const cartTarget = e.target

        let notific = parseInt(notification.innerHTML)


        if(cartTarget.id.slice(0, 1)=='+'){

            let amountHtml = cartTarget.nextElementSibling.nextElementSibling
            let amount = parseInt(amountHtml.innerHTML) 
            amount++
            amountHtml.innerHTML = amount
            notific++ 
            notification.innerHTML = notific

            let price = parseInt(cartTarget.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML.slice(1))
            totalHtml.innerHTML = parseInt(totalHtml.innerHTML)+price
            console.log(cartTarget.nextElementSibling.nextElementSibling.nextElementSibling)
        } else if (cartTarget.id.slice(0, 1) == '-'){

            let amountHtml = cartTarget.nextElementSibling
            let amount = parseInt(amountHtml.innerHTML)
            amount--
            notific--
            let price = parseInt(cartTarget.nextElementSibling.nextElementSibling.innerHTML.slice(1))
            console.log(cartTarget.nextElementSibling.nextElementSibling)
            if(amount < 1){
                cartTarget.parentElement.parentElement.classList.add('d-none')
                const id = cartTarget.id.slice(1)
                const addBtn = document.getElementById(`${parseInt(id)}`)
                addBtn.classList.remove('d-none')
                addBtn.nextElementSibling.classList.add('d-none')
                
            }else{   
                amountHtml.innerHTML = amount 
            }   
            totalHtml.innerHTML = parseInt(totalHtml.innerHTML) - price
            notification.innerHTML = notific


        }
    }

    if(totalHtml.innerHTML == 0){
        check.classList.add('d-none')
    }
})

check.addEventListener('click', e=>{
    alert("To be continued")
    window.location.href = '/'
})