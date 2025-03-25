
let interval;
let milesec=0;
let sec=0;
let min=0;
let hr=0;


function start(){
   interval = setInterval(function()
{
    milesec+=10;
    if(milesec==1000){
        milesec=0;
        sec++
    }
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
    document.getElementById("display").innerText=`${hr>10?"":"0"}${hr} : ${min>10?"":"0"}${min} : ${sec>10?"":"0"}${sec} : ${milesec}`
},10);
}

function stop(){
    clearInterval(interval);
    document.getElementById("display").innerText;
    flag = false;
}

function reset(){
    hr=0,min=0,sec=0,milesec=0;
    clearInterval(interval);
    document.getElementById("display").innerText=`${hr}${hr} : ${min}${min} : ${sec}${sec} : ${milesec}${milesec}`
}

let str="";

function showRandomText(level) {
    const texts = {
        easy: [
            "Hello!",
            "Good job!",
            "Nice work!",
            "Keep going!",
            "You're great!"
        ],
        medium: [
            "Success is not final, failure is not fatal.",
            "Dream big and dare to fail.",
            "Opportunities don't happen, you create them.",
            "Do what you can, with what you have, where you are.",
            "Believe you can and you're halfway there."
        ],
        hard: [
            "In the middle of difficulty lies opportunity - Albert Einstein.",
            "Success is not the key to happiness. Happiness is the key to success - Albert Schweitzer.",
            "The only way to do great work is to love what you do - Steve Jobs.",
            "It does not matter how slowly you go as long as you do not stop - Confucius.",
            "Hardships often prepare ordinary people for an extraordinary destiny - C.S. Lewis."
        ]
    };
    
    let randomIndex = Math.floor(Math.random() * texts[level].length);
    str = document.getElementById("text").innerText = texts[level][randomIndex];
    reset();
    flag=false;
    document.getElementById("textTyped").value="";
    ele.style.border = "10px solid white";

}
console.log(str)
let ele;
let flag=false;
function textTyped(){
    if(!flag){
        flag=true;
        start();
    }
    let textTyped =document.getElementById("textTyped").value
    let len=textTyped.length;
    ele=document.getElementById("error");
    ele.style.border = "10px solid white";

    if(textTyped[len-1]!=str[len-1])
        ele.style.border ="10px solid red";
    if(textTyped==str)
    {
        stop();
        ele.style.border ="10px solid green";
    }

}

function stop1(){
    stop()
}
