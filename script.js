console.log("game starts")
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGame")
let para = document.querySelector(".para")
let paraMess = document.querySelector(".paraMess")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
para.classList.add("hide")
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O"
            box.style.color = "rgb(133 7 64)"
            turnO = false;

        }
        else {
            box.innerText = "X"
            box.style.color = "#d87302"
            turnO = true;
        }
        box.disabled = true;


checkWinner();
    });
});
const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    };
}
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    };
}
const showWinner = (winner)=>{
paraMess.innerText = `CONGRATULATIONS, PLAYER ${winner} IS WINNER`;
para.classList.remove("hide")
disabledBoxes();
};


const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        let positionValue0 =  boxes[pattern[0]].innerText;
        let positionValue1 =  boxes[pattern[1]].innerText;
        let positionValue2 =  boxes[pattern[2]].innerText;
        if(positionValue0 != "" && positionValue1!="" && positionValue2!=""){
            if(positionValue0 === positionValue1 && positionValue1===positionValue2){
            console.log("winner",positionValue1)

            showWinner(positionValue1);
        }}
    };
  
};

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
