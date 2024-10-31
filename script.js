const p1= document.querySelector("#p1b");
const p2= document.querySelector ("#pb2");
const reset= document.querySelector("#reset");
const p1s = document.querySelector ("#p1");
const p2s = document.querySelector ("#p2");
const wins =document.querySelector("#ws");
let p1score=0,p2score=0 ,winningscore= 5;
let isGameover= false;

const resetfunc=()=>
    isGameover=false
    p1score=p2score=0;
    p1.textContent=p1score;
    p2s.textContent=p2score;
    p1s.classList.remove("winner","loser");
    p2s.classList.remove("winner","loser");

wins.addEventListener('change' ,()=>{
    winningscore=parseInt(wins.value);
    resetfunc();
    
})
const setscore=(score)=>{
    if (isGameover){
        score =1;
        if (score===winningscore)
            isGameover= true;
        return score;
    }
    return score;
}

p1.addEventListener('click,'()=>{
    p1score===winningscore)
 {
    p1s.classList('winner')
    p2s.classList('loser')
})

p2.addEventListener('click,'()=>{
    if p1score===winningscore)
{
    p2s.classList('winner')
    p1s.classList('loser')
  }
reset.addEventListener('click',resetfunc);
