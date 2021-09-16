let gamestatus= ["", "", "", "", "", "", "", "", ""];
let gameactive= true;
let currentPlayer= "X";
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gamemessage= document.querySelector('.gamestatus');
const winningmessage = () => `Player ${currentPlayer} has won!`;
const drawmessage = () => `Game ended in a draw!`;
const currentplayerturn = () => `It's ${currentPlayer}'s turn`;
gamemessage.innerHTML=currentplayerturn();
function checkclick(clickedboxevent){
    const clickedbox= clickedboxevent.target;
    const clickedboxindex=  parseInt(clickedbox.getAttribute('id'));
    if(gamestatus[clickedboxindex]!=="" || !gameactive){
        return;
    }
    // changing value of clicked box
    gamestatus[clickedboxindex] = currentPlayer;
    clickedbox.innerHTML = currentPlayer;
    // checking the win condition
    let win=false;
    for(let i=0; i<=7;i++)
    {
        const wincondition=winningConditions[i];
        let a=gamestatus[wincondition[0]];
        let b=gamestatus[wincondition[1]];
        let c=gamestatus[wincondition[2]];
        if(a==="" || b==="" || c===""){
            continue;
        }
        if(a==b && b==c)
        {
            win=true;
            gameactive=false;
            gamemessage.innerHTML=winningmessage();
            break;
        }
    }
    if(win==false)
    {
        if(!gamestatus.includes(""))
        {
            gameactive=false;
            gamemessage.innerHTML= drawmessage();
        }

        else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            gamemessage.innerHTML = currentplayerturn();
        }
    }
}
function RestartGame()
{
    gamestatus= ["", "", "", "", "", "", "", "", ""];
    gameactive= true;
    currentPlayer= "X";
    gamemessage.innerHTML=currentplayerturn();
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");

}
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', checkclick));
document.querySelector('.btn').addEventListener('click', RestartGame);