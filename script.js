
var hr = 0;
var min = 0;
var sec = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function pause(){
    timer = false;
}

function reset(){
   timer = false;
   hr = 0;
   min = 0;
   sec = 0;

   document.getElementById("hr").innerHTML = "00";
   document.getElementById("min").innerHTML = "00";
   document.getElementById("sec").innerHTML = "00";
}

function stopwatch(){
    if(timer == true){
         sec = sec+1;
    
         if(sec == 60){
            min = min +1;
            sec = 0;
         }

         if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
         }


         var hrStr = hr;
         var minStr = min;
         var secStr = sec;  

        if(hr < 10){
            hrStr = "0" + hrStr;
        }

        if(min < 10){
            minStr = "0" + minStr;
        }

        if(sec < 10){
            secStr = "0" + secStr;
        }

         document.getElementById("hr").innerHTML = hrStr;
         document.getElementById("min").innerHTML = minStr;
         document.getElementById("sec").innerHTML = secStr;
        setTimeout("stopwatch()",1000);
    }
}