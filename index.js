let sec = 0
let min = 0
let interval

function start(){
    interval= setInterval(contador,1000)
}

function pause(){
    clearInterval(interval) 
}

function stop(){
   clearInterval(interval)
   sec=0
   min=0
   document.getElementById('contador').innerText='00:00'
}

function contador(){
 sec++
 if (sec==60){
    min++
    sec=0
 }
 document.getElementById('contador').innerText=min+':'+sec
}