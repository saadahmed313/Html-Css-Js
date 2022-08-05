let countspan = document.querySelector(".count span")
let spans = document.querySelector(".bullets .spans");
let answers = document.querySelector(".answers-area");
let submit = document.querySelector(".submit-button"); 
let quizArea= document.querySelector(".quiz-area");
let bullets =document.querySelector(".bullets");
let theResult = document.querySelector(".result");
let countdownElement = document.querySelector(".countdown");
let currentindex =0;
let rightAnswers =0;
let countdownInterval;
function requset()
{
    let req = new XMLHttpRequest();
    
    req.onreadystatechange = function()
    {
        if(this.status = 200 && this.readyState ==4)
        {
        let data = JSON.parse(this.responseText);
        let lengthOfData =data.length;
        
        bullts(lengthOfData);    
        addData(data[currentindex],lengthOfData);
        let ranswer = data[currentindex].right_answer;
        countdown(3, lengthOfData);
        submit.onclick=function()
        {
            currentindex++;
          checkanswer(ranswer,lengthOfData);
          quizArea.innerHTML="";
          answers.innerHTML="";

        addData(data[currentindex],lengthOfData);
        handlingbullts();
        clearInterval(countdownInterval);
        countdown(3, lengthOfData);
        showdata(lengthOfData);
        }
    }
    }
    req.open("GEt","text.json",true);
    req.send();
}
requset();
function bullts(len)
{countspan.innerHTML = len;

    for(let i = 0; i < len;i++)
    {
        let span = document.createElement("span");
        if(i == 0)
        {
            span.className = "on";
        }
        spans.appendChild(span);
    }

}
function addData(data,len)
{
    if(currentindex < len){
let h2=document.createElement("h2");
let te =document.createTextNode(data.title)
h2.appendChild(te);
for(let i = 1 ; i <= 4;i++)
{
 let input= document.createElement("input");
 input.name ="questions";
 input.type ="radio";
 input.id=`answer_${i}`;
 input.dataset.answer =data[`answer_${i}`];
 if(i ===1)
 {
    input.checked =true;
 }
 let div =document.createElement("div");
 div.className ="answer";
 let thelabel = document.createElement("label");
 thelabel.setAttribute("for",`answer_${i}`);
 thelabel.appendChild(document.createTextNode(data[`answer_${i}`]));
 div.appendChild(input);
 div.appendChild(thelabel);
 answers.appendChild(div);
}
}}

function checkanswer(rAnswer,count)
{

let answers = document.getElementsByName("questions");
let theChoosenAnswer;

for (let i = 0; i < answers.length; i++) {
    
  if (answers[i].checked) {
    theChoosenAnswer = answers[i].dataset.answer;
  }
}

if (rAnswer === theChoosenAnswer) {
  rightAnswers++;
}
}
function handlingbullts()
{
    let spans = document.querySelectorAll(".bullets .spans span");
    let arr =[...spans];
arr.forEach((current,index)=>{
if(currentindex == index)
{
    current.className = `on`;
}
});

}
function showdata(len)
{let result ;
    if(len === currentindex)
    {
        quizArea.remove();
        submit.remove();
        bullets.remove();   
        if(rightAnswers > ((len)/2)&&rightAnswers < len)
        {
            result = `<span class="good">Good</span>,${rightAnswers} From ${len}`
        }
        else if(rightAnswers===len)
        {
            result = `<span class="perfect">Perfect</span>,All Answer Good`
        }
        else
        {
            result = `<span class="bad">Bad</span>,${rightAnswers} From ${len}`
        }
        console.log(result);
        theResult.innerHTML=result;
        theResult.style.padding = "10px";
        theResult.style.backgroundColor = "white";
        theResult.style.marginTop = "10px";

    }
}
function countdown(duration, count) {
    if (currentindex < count) {
      let minutes, seconds;
      countdownInterval = setInterval(function () {
    
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);
  
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
   
        countdownElement.innerHTML = `${minutes}:${seconds}`;
        if (--duration < 0) {
          clearInterval(countdownInterval);
          submit.click();
        }
      }, 1000);
    }
  }