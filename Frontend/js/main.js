const dashSection = document.querySelectorAll(".dashBoardSection");
const dashSideBar = document.querySelector(".dashboard");

const taskSection = document.querySelectorAll(".taskSection");
const taskTopBar = document.querySelector(".tasks");

const dashboardClick = document.querySelector('.dashboard').addEventListener('click', dashBoardFunction);

const taskClick = document.querySelector('.tasks').addEventListener('click', taskFunction);


let evento = true
let evento2 = true

let functionDash
let functionTask 


function dashBoardFunction(){
    functionDash = true
    functionTask = false
    showHide()
    return functionDash
}
function taskFunction(){
    functionDash = false
    functionTask = true
    showHide()
    return functionTask
}
taskTopBar.style.backgroundColor = 'rgba(55,114,255,255)'
taskTopBar.style.color = '#faf6f6'


function showHide(){
    if(functionDash == true){
        dashSection.forEach(element => {
            element.style.display = 'block'
        })
        
        taskSection.forEach(element => {
            element.style.display = 'none'
        })
        dashSideBar.style.backgroundColor = 'rgba(55,114,255,255)'
        dashSideBar.style.color = "#faf6f6"
        //Task style off

        taskTopBar.style.backgroundColor = '#faf6f6'
        taskTopBar.style.color = 'rgba(101,115,138,255)'
    } else if(functionTask == true){
        dashSection.forEach(element => {
            element.style.display = 'none'
        })
        
        taskSection.forEach(element => {
            element.style.display = 'block'
        })
        dashSideBar.style.backgroundColor = '#faf6f6'
        dashSideBar.style.color = "rgba(101,115,138,255)"
        //Task style on
        taskTopBar.style.backgroundColor = 'rgba(55,114,255,255)'
        taskTopBar.style.color = '#faf6f6'
        
    }
}

// function showHide(event) {
//     if(show){
//         dashSection.forEach(element => {
//             element.style.display = 'block'
//         })
        
//         taskSection.forEach(element => {
//             element.style.display = 'none'
//         })
        
        
//         show = false
//     } else{
//         dashSection.forEach(element => {
//             element.style.display = 'none'
            
//         })
//         taskSection.forEach(element => {
//             element.style.display = 'block'
//         })        

//         show= true
//     }
//     event.preventDefault(); 
//      console.log("You clicked the link!");
// }


// console.log()