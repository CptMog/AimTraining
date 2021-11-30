import Target from './classes/Target.js';

let screenTarget = new Target(document.querySelector("#canvx"));
screenTarget.setTimerBoardObj = document.querySelector("#timer");
screenTarget.setScoreBoardObj = document.querySelector("#score");

document.addEventListener('DOMContentLoaded',()=>{

    document.querySelector("#canvx").addEventListener('click', e =>{
        const rect = document.querySelector("#canvx").getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        screenTarget.targetDestroyed(x,y);
    })

    document.querySelector('#start').addEventListener('click', e =>{
        screenTarget.generatePopUp(15);
    })


})








