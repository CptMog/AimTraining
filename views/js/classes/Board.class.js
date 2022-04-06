import Target from "./Target.class.js";

export default class Board{

    /**
     * constructor for an object Board
     * @param {object} objCanvas 
     */
    constructor(objCanvas){

        this.objCanvas = objCanvas;

        this.ctx = this.objCanvas.getContext("2d");

        this.nb_targets = 5;

        this.targets = [];

    }
    
    /**
     * fill a tab of target
     */
    initTargetTab(){

        let nb_targets = this.nb_targets;
        
        while(nb_targets > 0){

            let x_t = Math.floor(Math.random() * this.objCanvas.width-50);

            let y_t = Math.floor(Math.random() * this.objCanvas.height-50); 

            x_t += (x_t <= 0 ?200 : 0);

            y_t += (y_t <= 0 ?200 : 0); 

    
            this.targets.push(new Target(x_t,y_t,15,"red"));
            
            nb_targets--;

        }

        console.log(this.targets)

    }

    /**
     * function that draw the target on screen
     * @param {Target} target 
     */
    draw(){
        this.targets.forEach(target =>{
            this.ctx.beginPath();
            this.ctx.fillStyle = target.color;
            this.ctx.arc(target.x, target.y, target.r*2 , 0, 2 * Math.PI, false);
            this.ctx.fill();
            this.ctx.fillStyle = 'black';
            this.ctx.stroke();
        })
    }


    /**
     * This function clear the canvas
     */
    cleanBoard(){
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.objCanvas.width, this.objCanvas.height);
    }

    onchangePos(x,y){
        let x_t = Math.floor(Math.random() * this.objCanvas.width-50);
        let y_t = Math.floor(Math.random() * this.objCanvas.height-50); 
        x_t += (x_t <= 0 ?200 : 0);
        y_t += (y_t <= 0 ?200 : 0); 
        let passez = 1;


        this.targets.map((target) =>{
            if(passez == 1 && (target.x-target.r*2 <= x && x <= target.x+target.r*2) && (target.y-target.r*2 <= y && y <= target.y+target.r*2)){
                target.x = x_t;
                target.y = y_t;
                passez= 0
            }
        })

    }


    

} 