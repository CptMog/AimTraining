import AimTrainer from "./classes/AimTrainer.class.js";

const canvas =  document.querySelector("#canvx");

document.addEventListener('DOMContentLoaded',(event)=>{
    const aimTrainer = new AimTrainer(canvas);
    aimTrainer.launching();
})








