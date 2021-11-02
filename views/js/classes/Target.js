export default class Target{

    constructor(objDom){
        this.objDom = objDom;
        this.targets = new Array();
        this.ctx = objDom.getContext('2d');
    }

    drawTarget(x,y){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#4B2D4D';
        this.ctx.arc(x, y, 60 , 0, 360, 0);
        this.ctx.fill();
        this.ctx.closePath();
    }

    targetDestroyed(x,y){

        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.objDom.width, this.objDom.height);
        const newListTarget = this.targets.filter(coords =>{ 
            if(!(coords.corx-60 <= x && x <= coords.corx+60) || !(coords.cory-60 <= y && y <= coords.cory+60)){
                return coords;
            }
         })

        for(const coord of newListTarget ){
            this.drawTarget(coord.corx,coord.cory);
        }

        this.targets = newListTarget;

    }

    generatePopUp(nbr){
        let curr_target = 1;

        while(curr_target <= nbr){
            let x = Math.floor(Math.random() * this.objDom.width-50);
            let y = Math.floor(Math.random() * this.objDom.height+50);
            setTimeout(() => { this.drawTarget(x,y) },curr_target*500);
            this.targets.push({corx : x, cory : y});
            curr_target++;
        }
       
    }

    set setScoreBoard(obj){
        this.scoreBoard = obj;
    }

    set setTimerBoard(obj){
        this.timerBoard = obj;
    }
}