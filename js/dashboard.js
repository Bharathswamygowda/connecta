function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('latest_time').innerHTML =
h + ":" + m + ":" + s;
var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}


// time remaining
var sec         = 1800,
countDiv    = document.getElementById("timer"),
secpass,
countDown   = setInterval(function () {
'use strict';

secpass();
}, 1000);

function secpass() {
'use strict';

var min     = Math.floor(sec / 60),
remSec  = sec % 60;

if (remSec < 10) {

remSec = '0' + remSec;

}
if (min < 10) {

min = '0' + min;

}
countDiv.innerHTML = min + ":" + remSec;

if (sec > 0) {

sec = sec - 1;

} else {

clearInterval(countDown);

countDiv.innerHTML = 'countdown done';

}
}