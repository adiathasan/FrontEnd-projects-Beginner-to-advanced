window.onload = ()=>{
    // let get = url =>{
    //     return new Promise((resolve, reject)=>{
    //         let xhttp = new XMLHttpRequest();
    //         xhttp.open('GET', url, true);
            
    //         xhttp.onload = ()=>{
    //             if(xhttp.status === 200){
    //                 resolve(JSON.parse(xhttp.response));
    //             }else{
    //                 reject(xhttp.statusText);
    //             };
    //         };
    //         xhttp.onerror = () =>{
    //             reject(xhttp.statusText);
    //         };
    //         xhttp.send();
    //     });
    // };

    // let promise = get('../AJAX/data/data.json');

    // promise.then((merge) => {
    //     console.log(merge);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    fetch('../AJAX/data/data.json')
    .then(get => get.json() )
    .then(data => { console.log(data) })
    .catch(error => { console.log(error) });
    
};

