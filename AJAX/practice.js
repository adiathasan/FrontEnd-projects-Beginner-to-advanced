document.getElementById('btn').addEventListener('click', () =>{
    let input = document.querySelector('input').value;
    let http = new XMLHttpRequest();

    http.onload = ()=>{
        if(http.status === 200 && http.readyState === 4){      
            let data = JSON.parse(http.responseText);
            let out = '<ol>';
            try{
                data.value.forEach((element, i) => {
                    out += `<li>${i + 1}. ${element.joke}</li>`;
                });
                out += '</ol>';
                document.getElementById('new').innerHTML = out;
            }catch(err){
                document.getElementById('new').innerHTML = `<ol>
                <li>${1}. ${data.value.joke}</li>
                </ol>`;
            }
            
        }   
    }

    http.onprogress = () =>{
        document.getElementById('new').innerHTML = '<h3>Loading....</h3>';
    }

    http.open('GET', `http://api.icndb.com/jokes/random/${input}`, true);
    http.send();

});