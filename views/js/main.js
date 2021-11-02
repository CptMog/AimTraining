import Target from './classes/Target.js';

let screenTarget = new Target(document.querySelector("#canvx"));
screenTarget.setTimerBoard = document.querySelector("#timer");
screenTarget.setScoreBoard = document.querySelector("#score");
screenTarget.generatePopUp(5);

document.querySelector("#canvx").addEventListener('click',(e)=>{
    const rect = document.querySelector("#canvx").getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    screenTarget.targetDestroyed(x,y);
})





