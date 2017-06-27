
function Alarm(time){
  this.time = time;
}

function date_time() {
$("#time").html(moment().format('H:mm:ss'));
}
setInterval(date_time, 1000);

Alarm.prototype.checker = function(status){
  var test = false;
  if(status === moment().format("H:mm")){
    test = true;
  }
  return test;
};
exports.alarmClockModule = Alarm;
