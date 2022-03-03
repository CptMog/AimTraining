import Target from "./Target.class";

export default class Board{

    /**
     * constructor for an object Board
     * @param {object} objCanvas 
     */
    constructor(objCanvas){

        this.objCanvas = objCanvas;

        this.ctx = this.objCanvas.getContext("2d");

        this.nb_targets = 10;
        
        this.board_tab = [];

        this.targets = [];

        this.color = {
            EVIL : 'red',
            KIND : '#4B2D4D'
        }

    }
    
    /**
     * fill a tab of target
     */
    fillTargetTab(){

        let nb_targets = this.nb_targets;
        
        while(nb_targets > 0){

            let color_t = ((Math.floor(Math.random() * 3)%2 == 0)?this.color.EVIL:this.color.KIND);

            let x_t = Math.floor(Math.random() * this.objDom.width-50);

            let y_t = Math.floor(Math.random() * this.objDom.height-50); 

            x_t += (x <= 0 ?100 : 0);

            y_t += (y <= 0 ?100 : 0); 

            this.targets.push(new Target(x_t,y_t,30,color_t));
            
            nb_targets--;

        }

    }

    /**
     * function that draw the target on screen
     * @param {Target} target 
     */
    displayTargetsToBoard(target){

        this.ctx.beginPath();
        this.ctx.fillStyle = target.getColor();
        this.ctx.arc(target.getX(), target.getY(), target.getR()*2 , 0, 2 * Math.PI, false);
        this.ctx.fill();
    }

    /**
     * function that destroyes the target on screen
     * @param {Target} target 
     */
    destroyTargetsToTarget(target){
        // let targets_tampon = this.targets.map(item => item);
    }

    cleanBoard(){
        //clean the board
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.objDom.width, this.objDom.height);
    }

    reafreshBoard(){

        cleanBoard();
        
        if(this.board_tab.length == 0){
            let factor = 1;
            for(const target of this.targets){
                setInterval(displayTargetsToBoard(target),factor*400);
                this.board_tab.push(target);
                factor++; 
            }
        }else{
            for(const target of this.board_tab){
                displayTargetsToBoard(target);
            }
        }
    }

} 