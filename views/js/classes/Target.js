export default class Target{
    
    constructor(objDom){
        this.COLOR = { kind:'#4B2D4D', evil:'red' };
        this.objDom = objDom;
        this.score = 0;
        this.targets = new Array();
        this.ctx = objDom.getContext('2d');
        this.ctx.font = '48px sans-serif';
        this.ctx.fillText('Click the start button',this.objDom.width/3.5, this.objDom.height/2);
    }

    drawTarget(x,y,color){
        
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, 60 , 0, 360, 0);
        this.ctx.fill();
        this.ctx.closePath();
    }

    targetDestroyed(x,y){

        const newListTarget = this.targets.filter(coords =>{ 
            // !(coords.corx-60 <= x && x <= coords.corx+60) || !(coords.cory-60 <= y && y <= coords.cory+60)
            if((coords.corx-60 <= x && x <= coords.corx+60) && (coords.cory-60 <= y && y <= coords.cory+60)){
                return coords;
            }
         })
        if(newListTarget != []){
            
            for(const coord of newListTarget ){
                this.ctx.beginPath();
                this.ctx.fillStyle = '#fff';
                this.ctx.arc(coord.corx,coord.cory, 61 , 0, 360, 0);
                this.ctx.fill();
                this.ctx.closePath();

                this.setScore = (coord.type == this.COLOR.evil? 100 : -100);
            }

            this.updateBoard()

            this.targets = this.targets.filter(coords =>{ 
                // !(coords.corx-60 <= x && x <= coords.corx+60) || !(coords.cory-60 <= y && y <= coords.cory+60)
                if(!(coords.corx-60 <= x && x <= coords.corx+60) || !(coords.cory-60 <= y && y <= coords.cory+60)){
                    return coords;
                }
            })

            console.log(this.targets);
            
        }

    }

    updateBoard(){
        this.scoreBoard.innerText= this.score;
    }

    generatePopUp(nbr){
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.objDom.width, this.objDom.height);
        let curr_target = 1;

        while(curr_target <= nbr){
            const color = ((Math.floor(Math.random() * 3)%2 == 0)?this.COLOR.evil:this.COLOR.kind);
            let x = Math.floor(Math.random() * this.objDom.width-50);
            let y = Math.floor(Math.random() * this.objDom.height+50);
            setTimeout(() => { this.drawTarget(x,y,color) },curr_target*500);
            this.targets.push({corx : x, cory : y, type:color});
            curr_target++;
        }
       
    }

    set setScore(val){
        this.score += val;
    }

    get getScore(){
        return this.score;
    }

    set setScoreBoardObj(obj){
        this.scoreBoard = obj;
        // this.scoreBoard.innerText= this.score;
    }

    set setTimerBoardObj(obj){
        this.timerBoard = obj;
    }
}