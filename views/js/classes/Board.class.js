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

        //optionnal 
        this.timer = 0;

        this.score = 0;

        this.ctx.font = "30px Arial";

        this.ctx.fillText("Click on the 'start game' button", this.objCanvas.width/3.8, this.objCanvas.height/2);

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

    
            this.targets.push(new Target(x_t,y_t,20,"red"));
            
            nb_targets--;

        }


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


    /**
     * This function change the position of a target
     * @param {int} x 
     * @param {int} y 
     */
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
               
                this.point += target.point;
                
                this.score.textContent = this.point;
               
                passez= 0;
            }

        })

    }

    /**
     * this function display the time on the timer board
     */
    diplayTime(){
        if(this.minute > 0){
            if(this.minute > 10){
                this.timer.textContent = `${this.minute}:${this.second}`
            }else{
                if(this.second > 10){
                    this.timer.textContent = `0${this.minute}:${this.second}`
                }else{
                    this.timer.textContent = `0${this.minute}:0${this.second}`
                }
            }
        }else{
            if(this.second > 10){
                this.timer.textContent = `0${this.minute}:${this.second}`
            }else{
                this.timer.textContent = `0${this.minute}:0${this.second}`
            }
        }
    }

    /**
     * funtion that countdown in the timerboard
     * @param {*} time 
     */
    countdown(){

        if(this.minute >0){
            this.second--;
            if(this.second <= 0){
                this.minute--;
                this.second = 59;
                this.minute = (this.minute <= 0?0:this.minute)
            }
        }else{
            if(this.second >0){
                this.second--;
            }

            if(this.second == 0){
                this.ctx.font = "30px Arial";
                this.ctx.fillStyle = "#000";
                this.ctx.fillText("Game finish ", this.objCanvas.width/3.8, this.objCanvas.height/2);
                // console.log("toto")
            }
        }

        this.diplayTime()
    }

     setTimeCountDown(time){

        if(time%60 == 0 || time <= 60){

            if(time > 60){
                this.minute = Math.trunc(time/60)-1;
                this.second = 60;
            }else{
                this.minute = 0;
                this.second = time;
            }

        }else{
            console.log('CETTE FONCTION NE PREND QUE DES MULTIPLE DE 60 SECONDES OU MOINS DE 60 SECONDES');
            this.minute = 0;
            this.second = 59;
        }
    }

    /**
     * this function set the DOM element of that will be use for the timer board
     * @param {DOMElement} timer
     */
     setTimerBoard(timer){
        this.timer = timer;
    }

    /**
     * this function set the DOM element of that will be use for the score board
     * @param {DOMElement} score
     */
     setScoreBoard(score){
        this.score = score;
        this.point =0;
    }

    get getTimer(){
        return this.timer;
    }

    get getScore(){
        return this.score;
    }

} 