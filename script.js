let icon=document.querySelector('.icon');
let email=document.querySelector('.email');
let image=document.querySelector('.image');
let invalid=document.querySelector('.invalid');
let valid = document.querySelector('.valid')
icon.onclick=function(e){
    e.preventDefault()
    if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    valid.style.display = 'none'    
    email.style.borderColor = 'red';
    image.style.display='block';
    icon.style.position = 'relative'
    icon.style.bottom = '25px'
    invalid.style.display='block';
}else{
    invalid.style.display = 'none'
    image.style.display = 'none'
    email.style.borderColor = 'green';
    valid.style.display = 'block'
    if(icon.style.position == 'relative'){
        icon.style.bottom = '1px'
    }
}

}

