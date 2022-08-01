const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];
  const levels ={
"Easy":5,
"Normal":3,
"Hard":2
  };


let defulatlevel="";

let defulatseconds="";
let namelevel = document.querySelector(".message .lvl");
let namesecond = document.querySelector(".message .seconds");
let btnstart = document.querySelector(".start");
let word = document.querySelector(".word");
let  input = document.querySelector(".input");

let upcomingwords = document.querySelector(".upcoming-words");
let timeleft = document.querySelector(".control .time span");
let scoregot = document.querySelector(".control .score .got");
let scoretotal = document.querySelector(".control .score .total");
let finish = document.querySelector(".finish");


let key=Object.keys(levels);
  for(let i = 0 ; i <key.length;i++)
  {
let inp = document.createElement("input");
let lable = document.createElement("label");
let tex= document.createTextNode(key[i]);
lable.appendChild(tex);
inp.type = "checkbox";
inp.name =key[i];
namelevel.appendChild(inp);
namelevel.appendChild(lable);
}
let checkname = document.querySelectorAll(".message .lvl input");
for(let i = 0; i < key.length;i++)
{checkname[i].onclick = function()
    {
        let la =document.querySelectorAll(".message .lvl input + label");
        
        if(checkname[i].checked)
        {
            defulatlevel= la[i].innerHTML;
            defulatseconds=levels[defulatlevel];
            namelevel.innerHTML = defulatlevel;
namesecond.innerHTML = defulatseconds;
scoretotal.innerHTML = words.length;
timeleft.innerHTML = defulatseconds;
        }
    }
}

  
input.onpaste =function ()
{
    return false;
}
btnstart.onclick  =function ()
{
    this.remove();
    input.focus();
    generating();
    
}


function generating()
{
let selectword = words[Math.floor(Math.random()*words.length)];
let numberofword = words.indexOf(selectword);
word.appendChild(document.createTextNode(selectword));
words.splice(numberofword,1);
upcomingwords.innerHTML = "";
for(let i = 0 ; i < words.length;i++)
{
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    div.appendChild(text);
    upcomingwords.appendChild(div);
}
check();
}
function check() { 
    timeleft.innerHTML = defulatseconds;
   let count= setInterval(function(){
        timeleft.innerHTML--;
        if( timeleft.innerHTML === "0")
        { 
            clearInterval(count);
            if( input.value.toLowerCase() === word.innerHTML.toLowerCase())
            {input.value="";
                scoregot.innerHTML++;
                if(words.length > 0)
                {
                    generating();
                }
                else{
                    let good = document.createElement("div");
                bad.className = "good";
                good.appendChild(document.createTextNode("Congratulations"));
                finish.appendChild(good);
                }
            
            }
            else
            {
                let bad = document.createElement("div");
                bad.className = "bad";
                bad.appendChild(document.createTextNode("Game Over"));
                finish.appendChild(bad);
            
            }
         
        }
    },1000);
}
