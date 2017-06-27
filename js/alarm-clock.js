
function Alarm(alarmTime){
  this.alarmTime = alarmTime;
}

function date_time() {
$("#time").html(moment().format('H:mm:ss'));
}
setInterval(date_time, 1000);

exports.alarmClockModule = Alarm;
