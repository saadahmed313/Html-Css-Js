let color=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let arr=[];
for(let i = 0;i <6;i++)
{
arr.push(color[Math.floor(Math.random()*color.length)]);
}
let finalColor =`#${arr.join("")}` ;
document.body.append(finalColor);

document.body.style.backgroundColor = finalColor;