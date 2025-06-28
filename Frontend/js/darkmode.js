let darkmode = localStorage.getItem('dark_mode');
const darkModeButton = document.querySelector('darkModeButton');

const enableDarkmode = () => {
    document.body.classList.add('dark_mode')
    localStorage.setItem('dark_mode', 'active')
}
const disableDarkmode = () =>{
    document.body.classList.remove('dark_mode')
    localStorage.setItem('dark_mode', null)
}
if(darkmode === "active") enableDarkmode()
    
darkModeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem('dark_mode')
    darkmode !== "active" ? enableDarkmode() :disableDarkmode()
})