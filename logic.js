let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let  newbtn = document.querySelector(".newbtn");
let para = document.querySelector("#para");
let container = document.querySelector(".main");
let btn = document.querySelector("#ball");
let currMode = "light";

let turnO = true;

const WinPattern = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
  [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

const resetGame = () =>{
  turnO=true;
  enableBoxes()
  container.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    checkWinner();
  });
});

    const enableBoxes = () =>{
      for(let box of boxes){
        box.disabled=false;
        box.innerText="";
      }
    }

   const showWinner =(winner) =>{
     para.innerText=`Congratulation, Winner is ${winner}`;
     container.classList.remove("hide");
     for(let box of boxes){
      box.disabled=true;
     }
   }
const checkWinner = () => {
  for (let pattern of WinPattern) {

    let pos1val = boxes[pattern[0]].innerText;

    let pos2val = boxes[pattern[1]].innerText;

    let pos3val = boxes[pattern[2]].innerText;
     
    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val===pos2val && pos2val===pos3val){
        showWinner(pos1val);
      }
    }
  }
};
newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

btn.addEventListener("click", () =>
{
    if(currMode==="light")
    {
        currMode="dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("white");
    }else{
        currMode="light";
        document.querySelector("body").classList.add("white");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currMode);
});