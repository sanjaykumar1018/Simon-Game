let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let display=document.querySelector("body");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(" Button Clicked")
if(started==false)
{
    console.log("Game Started");
    started=true;
    levelUp();
}
});
let btns=["yellow","red","blue","green"];
let h3=document.querySelector("h3");
function levelUp()
{
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3+1);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}
function btnflash(btn){
    btn.classList.add("gameflash");
    setTimeout(()=>{
        btn.classList.remove("gameflash");
    },250);
}
function checkans(idx){
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1500);
        }
        
    }
    else{
        disflash();
        if(level <= 3){
            h3.innerHTML=`Game Over! Level was <b>${level}</b> <br>Wow, at least you didn’t get a negative score… I think.<br><br>Press Start to Restart the game..!`;
        }
        else if(level >3 && level <=11){
            h3.innerHTML=`Game Over! Level was <b>${level}</b><br>I’ve seen NPCs play better than You!.<br><br>Press Start to Restart the game..!`;
        }
        else{
            h3.innerHTML=`Game Over! Level was <b>${level}</b><br>Pretty solid gameplay, man.<br><br>Press Start to Restart the game..!`;
        }
        
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}
function disflash(){
    display.classList.add("dis-red");
    setTimeout(()=>{
        display.classList.remove("dis-red");
    },100);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },150);
}
function btnpress() {
    if (started!=0){
        let btn=this;
        //onsole.log("btn was pressed");
        userflash(btn);
        let usercolor=btn.getAttribute("id");
        //console.log(usercolor);
        userseq.push(usercolor);
        console.log(userseq);
        checkans(userseq.length-1);
    }
    
}
let allbtn=document.querySelectorAll(".btns");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
