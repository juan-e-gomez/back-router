console.log('Hello from index.js');

let productform = document.getElementById('product-form');

const handleSubmit = (evt,form,route) => {
    evt.preventDefault();
    let formdata = new FormData(form);
    let obj = {};
    formdata.forEach((value,key) => obj[key] = value);
    fetch(route,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }   
    }).then(res => res.json()).then(json=>console.log(json));
}

productform.addEventListener('submit',(e) => handleSubmit(e,e.target,'/products'));