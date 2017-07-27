function clock(time)
{
var split = time.split(":");
var Time = parseInt(split[0]);
var ampm = time.substring(8,10);

if(ampm == "PM"){
  Time = Time + 12;
 document.write(Time + ":" + split[1] + ":" + time[6]+time[7]);
}
else{
  Time = "00";
  document.write(Time+":"+split[1]+":"+time[6]+time[7]);
}
}
clock("12:50:00PM");
