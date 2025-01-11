let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".new-game");
let msgContainer=document.querySelector(".msg-container");
let para=document.querySelector(".para");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="O";
        turnO=false;
        }else{
            box.innerText="X";
            turnO=true;  
        }
        box.disabled=true;

        checkWinner();
    });
});

function disable(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function enable(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.innerText="";
    msgContainer.classList.add("hide");

}
const showWinner = (winner)=>{
    
    msgContainer.classList.remove("hide");
    msgContainer.innerText=`Congratulations, Winner is Player ${winner}`;
    
    disable();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
       
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== ""){
            if(val1 === val2  && val2 === val3){
               showWinner(val1);
            }
        }
    }
}

reset.addEventListener("click",enable);
newGame.addEventListener("click",enable);
