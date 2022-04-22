import Board from "./Board.class.js";

export default class AimTrainer{

    constructor(canvas){
        this.canvas = canvas;
        this.board = null;
    }

    reafreshBoard(board){
        board.cleanBoard();
        board.draw();
        window.requestAnimationFrame(()=>{
            this.reafreshBoard(board)
        });
    }

    launching(){
        this.board = new Board(this.canvas);
        this.board.initTargetTab();
    
        this.canvas.addEventListener('click',(event)=>{
            const rect = this.canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            this.board.onchangePos(x,y);
        })

        document.getElementById('start').addEventListener('click',()=>{
            document.getElementById('start').style.color ="#4B2D4D";
            document.getElementById('start').style.border = "2px solid #4B2D4D"
            document.getElementById('start').style.backgroundColor = 'white';
            window.setTimeout( () =>{
                window.requestAnimationFrame(()=>{
                    this.reafreshBoard(this.board)
                })
            },900)
            this.board.setScoreBoard(document.getElementById('score'));
            this.board.setTimerBoard(document.getElementById('timer'));
            this.board.setTimeCountDown(10);
            const timerId = window.setInterval(() => {
                this.board.countdown()
            },900); 
        })
    
    }
}