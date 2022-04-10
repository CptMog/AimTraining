import Board from "./classes/Board.class.js";

const canvas =  document.querySelector("#canvx");
function reafreshBoard(board){
    board.cleanBoard();
    board.draw();
    window.requestAnimationFrame(()=>{
        reafreshBoard(board)
    });
}

document.addEventListener('DOMContentLoaded',(event)=>{

    const board = new Board(canvas);
    board.initTargetTab();
    

    canvas.addEventListener('click',(event)=>{
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        board.onchangePos(x,y);
    })

    document.getElementById('start').addEventListener('click',()=>{
        document.getElementById('start').style.color ="#4B2D4D";
        document.getElementById('start').style.border = "2px solid #4B2D4D"
        document.getElementById('start').style.backgroundColor = 'white';
        window.setTimeout( () =>{
            window.requestAnimationFrame(()=>{
            reafreshBoard(board)
            })
        },750)
        board.setScoreBoard(document.getElementById('score'));
        board.setTimerBoard(document.getElementById('timer'));
        board.setTimeCountDown(10);
        const timerId = window.setInterval(() => {
            board.countdown()
        },750); 
    })

})








