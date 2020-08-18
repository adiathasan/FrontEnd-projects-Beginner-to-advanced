let input = document.getElementById('form')
let btn = document.getElementById('btn')
let valid = document.querySelector('.valid')
let profile_ = document.getElementById('profile')
btn.addEventListener('click', (e)=>{
    if(input.value === ''){
        valid.classList.remove('d-none')
        setTimeout(()=>{
            valid.classList.add('d-none')
        }, 3000)
    }else{
        fetch(`https://api.github.com/users/${input.value}`)
        .then((val)=>{
            input.value = ''
            return val.json()
        }).then((val)=>{
            let obj = new profHub()
            if(val.message === 'Not Found'){
                obj.notFound()
            }else{
                obj.setProfile(val)
            }
        })
    }
})


class profHub{
    constructor(){
        this.profile = profile_
    }

    setProfile(obj){
        this.profile.innerHTML = `
                <div class="row">
                    <div class="col-md-2">
                        <img src="${obj.avatar_url}" class="img-fluid rounded"  alt="...">
                        <a href="${obj.html_url}" class="mt-2 btn btn-block btn-primary" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-4 ml-4">
                            <h5 class="card-title">${obj.name}</h5>        
                            <p class="card-text">${obj.bio}</p>
                            <p class="card-text">Followers: ${obj.followers}</p>
                            <p class="card-text">Following: ${obj.following}</p>
                            <p class="card-text">Location: ${obj.location}</p>
                    </div>
                    <div class="col-md-4 mt-4 mt-md-0 ml-4">
                            <p class="card-text">Email: ${obj.email}</p>
                            <p class="card-text">Company: ${obj.company}</p>
                            <p class="card-text">public repositories: ${obj.public_repos}</p>
                            <p class="card-text">twitter username: ${obj.twitter_username}</p>
                            <p class="card-text"><small class="text-muted">Created at: ${obj.created_at}</small></p>
                    </div>
                </div>
        `
    }

    notFound(){
        this.profile.innerHTML = `
        <div class="text-center text-light p-4 bg-danger">
            <h1 class=' text-warning'>404</h1>
            <h4>Profile Not Found</h4>
        </div>   `
        setTimeout(()=>{
            this.profile.innerHTML = `
            <div class="text-center text-light bg-primary">
                <h3 class=' text-light p-4'>Search again.</h3>
            </div>
            `  
        }, 3000)
    }
}