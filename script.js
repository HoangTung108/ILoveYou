const package = document.querySelector("#fullPage");
const btn = document.getElementById("button");
const car = document.querySelector("#car");
const progress = document.querySelector(".progress");
const bar = document.querySelector(".progress-bar");
const merrywrap =document.getElementById("merrywrap");
const box=merrywrap.getElementsByClassName("giftbox")[0];
const text = document.getElementById("text");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const letter = document.getElementById("letter");
const letterPaper = document.getElementById("letter-paper");
const audio = document.getElementById("audio");
var movecheck =0;
var step=1;
var stepMinutes=[2000,2000,1000,1000];
var check =0;
var time =0;
var per = 0;
progress.style.display ="none";
bar.style.display="none";
package.style.display ='none';
car.style.display ='none';
letterPaper.style.display ='none';
btn.addEventListener('click',start);

function start(){
    if(check >0){
        btn.style.display ='none';
        progress.style.display ="block";
        bar.style.display="block";
        var loading = setInterval(animate,50);
    function animate(){
        if (per ==760){
            clearInterval(loading);
            bar.style.display=("none");
            btn.style.display =("none");
            package.style.display ='block';
            car.style.display ='block';
            package.classList.remove("night");
            audio.play();
            const openaudio = setInterval(function(){audio.play();},240000);
        const setNight = setInterval(addNight,1000);
    function addNight(){
        if (time > 10){
            package.classList.add('night');
            setTimeout(function(){time =0;},80000);
        } 
        else{
            package.classList.remove("night");
            time +=1;
        }            
    }
}
    else{
        per = per+2;
        progress.style.width = per+"px";
    }
}
    }
    else{
        check+=1;
        progress.style.display ="none";
        bar.style.display="none";
        package.style.display ='none';
        car.style.display ='none';
    }
}
window.onload=function(){
  function init(){
          box.addEventListener("click",openBox,false);
  }
  function stepClass(step){
    merrywrap.className='merrywrap';
    merrywrap.className='merrywrap step-'+step;
  }
  function openBox(){
    if(step===1){
      box.removeEventListener("click",openBox,false); 
    }  
    stepClass(step); 
    if(step===2){ 
        letterPaper.style.display ='block';
        letterPaper.addEventListener("click",function(){
            movecheck +=1;
            if (movecheck %2 != 0){
                letterPaper.classList.add('moved');
            }
            else{
                letterPaper.classList.remove('moved');
            }
        });
        setTimeout(function () {
          letterPaper.classList.add('load');
          setTimeout(function(){
              text.classList.add('loaded');
              letter.classList.add('loaded'); 
              text1.classList.add('loaded');
              text2.classList.add('loaded');
              text3.classList.add('loaded');
              text4.classList.add('loaded');
          },2000);
      }, 500);
    
    } 
    if(step===4){
     return;
    }     
    setTimeout(openBox,stepMinutes[step-1]);
    step++;  
  }
  init();
}

