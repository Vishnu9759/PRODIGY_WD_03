const boxs=document.querySelectorAll('.box');
const statustxt=document.querySelector('.status');
const restartbt=document.querySelector('.restart');
let x="<img src='x.png'>";
let o="<img src='o.png'>";     

const wins=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let options=["","","","","","","","","",""];
let curplayer=x;
let player = "X";
let running=false;
init();
function init(){
    boxs.forEach(box =>box.addEventListener('click',boxclick));
    restartbt.addEventListener('click',restartgame);
    statustxt.textContent=`It's ${player}'s turn...`; 
    running=true;
}

function boxclick(){
    const index=this.dataset.index;
    if(options[index]!="" || !running){
        return;
    }
    updatebox(this,index);
    checkwinner();
}
function updatebox(box,index){
    options[index]=player;
    box.innerHTML=curplayer;


}
function changeplayer(){
    player=(player=="X") ? "O":"X";
    curplayer=(curplayer==x) ? o:x;
    statustxt.textContent=`It's ${player}'s turn...`
}
function checkwinner(){
    let iswon=false;
    for(let i=0;i<wins.length;i++){
        let cond=wins[i];
        let box1=options[cond[0]];
        let box2=options[cond[1]];
        let box3=options[cond[2]];
        if(box1=="" || box2=="" || box3==""){
            continue;
        }
        if(box1==box2 && box2==box3){
            iswon=true;
    }

}
if(iswon){
    statustxt.textContent=`Player ${player} Won!`;
    running=false;
}
else if(!options.includes("")){
    statustxt.textContent=`Game Draw...!`;
    running=false;
}
else{
    changeplayer();
}
}

function restartgame(){
     options=["","","","","","","","","",""];
     curplayer=x;
     player = "X";
     running=true;
    statustxt.textContent=`It's ${player}'s turn...`
    boxs.forEach(box=>{
        box.innerHTML="";
    });


}
