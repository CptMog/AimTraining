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

        this.tab_ids = [];

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
     * function that destroye the target selected
     * @param {Target} target 
     */
    destroyTargetsToTarget(target){
        
        const tmp = this.targets.filter(targeted => target.getX() != targeted.getX() && target.getY() != targeted.getY())
        this.targets.length = 0;
        for(const elem of tmp){
            this.targets.push(elem)
        }
    }

    /**
     * This function clear the canvas
     */
    cleanBoard(){
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.objDom.width, this.objDom.height);
    }

    /**
     * This function reafresh the canvas
     */
    reafreshBoard(){

        //cleaning
        cleanBoard();
            /***
             * La logique de l'alogorithme doit être la suivante :
             *  _ On efface les objets sur le canvas  ( utilise cleanBoard)
             *  _ On redessine les objet déjà apparus ( via le tab_board )
             *  _ On continue de placer les targets en continue ( setInterval )
             */

        if(this.board_tab.length == 0){ //if we have nothing on the board
            let factor = 1; 
            for(const target of this.targets){
                this.tab_ids.push(setInterval(() =>{
                    displayTargetsToBoard(target);
                    this.board_tab.push(target);
                },factor*400));
                factor++; 
            }
        }else{ // if we already have somthing on the board 

            for(const target of this.board_tab){
                displayTargetsToBoard(target);
            }
        }
    }

} 