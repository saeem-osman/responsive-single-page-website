//webpack will monitor any change in javascript and css file
import "./style.css";

//timer clock

const countDate = new Date("October 20, 2019 00:55:25").getTime();

window.onload =  setInterval(()=>{
    let current = Date.now();
    let timeDif = countDate - current;

    //converting to hours,minutes and seconds
    let a = 1000*24*60*60;
    let hours = Math.floor((timeDif %a)/(1000*60*60));
    let minutes = Math.floor((timeDif% (1000*60*60))/(1000*60));
    let seconds = Math.floor((timeDif % (1000*60))/(1000));
    if(hours.toString().length<2){
        hours = "0"+hours;
    }
    if(minutes.toString().length<2){
        minutes = "0"+minutes;
    }
    if(seconds.toString().length<2){
        seconds = "0"+seconds;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
 

    if(timeDif <= 0){
        document.getElementById("timer").innerHTML = "Times Up";
    }
},1000);

