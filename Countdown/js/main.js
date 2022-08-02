let days  = document.querySelector(".days");
let hours  = document.querySelector(".hours");
let minutes  = document.querySelector(".minutes");
let seconds  = document.querySelector(".seconds");

let counter = setInterval(() => {
    let datenow = new Date();
    let date= new Date("Dec 31,2022 23:59:59");
    let difference=date-datenow;
    let day = Math.floor( difference/(1000*60*60*24));
    days.innerHTML =`${day} Days:`;
   let hour =Math.floor( (difference%(1000*60*60*24)) /(1000*60*60));
   hours.innerHTML =`${hour<10? `0${hour}`:hour } H:`;
   let minute =Math.floor( (difference%(1000*60*60)) /(1000*60));
   minutes.innerHTML =`${minute<10? `0${minute}`:minute } Min:`;
   let second =Math.floor( (difference%(1000*60)) /(1000));
   seconds.innerHTML =second<10? `0${second} Sec`:`${second} Sec` ;
}, 1000);