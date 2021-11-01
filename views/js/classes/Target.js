export default class Target{

    constructor(objDom){
        this.objDom = objDom;
        this.ctx = objDom.getContext('2d');
    }

    drawTarget(x,y){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#4B2D4D';
        this.ctx.arc(x, y, 60 , 0, 360, 0);
        this.ctx.fill();
        this.ctx.closePath();
    }

    generatePopUp(nbr){
        let curr_target = 1;

        while(curr_target <= nbr){
            let x = Math.floor(Math.random() * this.objDom.width-50);
            let y = Math.floor(Math.random() * this.objDom.height+50);
            setTimeout(() => { this.drawTarget(x,y) },curr_target*500);
            curr_target++;
        }
    }
}