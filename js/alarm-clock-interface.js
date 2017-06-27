var Alarm = require('./../js/alarm-clock.js').alarmClockModule;


$(document).ready(function(){
  $("#alarm-time").submit(function(event){
    event.preventDefault();

    var alarmTime = $("input#alarm").val();
    var clock = new Alarm(alarmTime);
    var countdown = setInterval(timer, 1000);
    function timer(){
      if(clock.checker(alarmTime) === true)
      {
        $("#alarm-sound").text("ALARM");
        clearInterval(countdown);
      }
    }

  });
});
