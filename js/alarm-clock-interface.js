var Alarm = require('./../js/alarm-clock.js').alarmClockModule;


$(document).ready(function(){
date_time();
  $("#alarm-time").submit(function(event){
    event.preventDefault();
    var alarmTime = $("input#alarm").val();
    console.log(alarmTime.valueOf());
    // if (alarmTime() > now){
    //   $("alarm-sound").append("alarm!!!!!!!!!");
    // }

  });
});
