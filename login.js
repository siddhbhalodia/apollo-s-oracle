let id=document.querySelector('#email')
let pass=document.querySelector('#pword')
let logdetails=document.querySelector('.log-page')
logdetails.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(id.value,pass.value);
})