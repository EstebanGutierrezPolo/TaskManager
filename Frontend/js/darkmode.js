let on = true;
let off = false;
darkButton.addEventListener('click', (e) =>{
    if(on == true){
        on = false
        e.preventDefault();
        console.log("Hola")
        darkBody.classList.remove('dark_mode')
    } else{
        on = true
        e.preventDefault();
        console.log("Hola")
        darkBody.classList.add('dark_mode')
    }
})