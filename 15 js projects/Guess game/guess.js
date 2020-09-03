// variables

const rand =  Math.floor(Math.random(1,100) * 10)

const form = document.querySelector('form')

const input = document.querySelector('input')

const alert = document.querySelector('.alert')

const result = document.querySelector('.result')

const resultBoard = document.querySelector('.result-board')

const alertMessage = document.getElementById('alert-message')

const tryBtn = document.querySelector('.try')

const tryBtn2 = document.querySelector('.try2')

let counter = 0

// common functions

const alertFunc = (message = 'Oops it should be within 0 to 10', add = 'danger', remove ='primary')=>{
    alert.classList.remove(`alert-${remove}`)
    alert.classList.add(`alert-${add}`)
    alertMessage.innerHTML = `<h5>${message}</h5>`

}

console.log(rand)

const resultFunc = (message = 'got lucky! You have won.', add = 'success', remove ='warning')=>{
    resultBoard.classList.remove(`bg-${remove}`)    
    resultBoard.classList.add(`bg-${add}`)
    result.innerHTML = `<h3>${message}</h3>`

}

// events

input.addEventListener('keyup', e=>{
    const value = parseInt(input.value)
    if (value > 10 || value < 0){ 
        alertFunc()
    }else{
        alertFunc(message = 'Doing fine, Keep it up', add = 'success', remove = 'danger')
    }
})

form.addEventListener('submit', e =>{
    e.preventDefault()
    if (input.value > 10 || input.value < 0){
        alertFunc()
    }else{
        counter++
        if (counter < 3 || rand == parseInt(input.value)){
            if (rand == parseInt(input.value)){
                resultFunc()
                tryBtn2.classList.remove('d-none')
                document.querySelector('.form').classList.add('d-none')
            }else{
                resultFunc(message =`you have ${3-counter} guess left! Hurry Up!!`, '', '')
            }
        }else{
            resultFunc(`Unlucky! You have Lost. result was ${rand}`, 'danger', 'secondary')
            document.querySelector('.form').classList.add('d-none')
            alertFunc('doing not fine at all', 'danger', 'success')
            tryBtn.classList.remove('d-none')
        }
        form.reset()
        tryBtn.addEventListener('click', ()=>{
            tryBtn.classList.add('d-none')
            location.reload()
        })
        tryBtn2.addEventListener('click', ()=>{
            location.reload()
        })
    }

})
