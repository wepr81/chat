var time = document.getElementsByClassName('timers');
var startTime = new Date;
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function timer(){
var currenttime = new Date();
var diff = currenttime.getTime() - startTime.getTime() + currenttime.getTimezoneOffset()*60*1000;
var onlineTime = new Date(diff);
time[0].innerHTML = addZero(onlineTime.getHours()) + "h" + addZero(onlineTime.getMinutes()) + "m";
time[1].innerHTML = addZero(currenttime.getHours()) + ":" + addZero(currenttime.getMinutes());
}
timer();
setInterval(timer,10000);