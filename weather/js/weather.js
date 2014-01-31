
var sUnit = "m";  // m for celcius s for fareinheit

var TwentyFourHourClock = "false"; //Set to true for 24hr false to 12hr.

var sCityCodes = "SFXX0010:1:SF"; //weather code. Find from weather.com look in url.
//for example, San Francisco would be: USCA0987:1:US

var cityNameVisible = false; //if you want your city name to appear under the time





var world = "1"; // 1 for outside US, 2 for US. THIS MUST BE SET!!!!!

var s = $(this).attr("sCityCodes").substr(0, 2);


var refresh = 30 * 60 * 10000; //refresh in milliseconds (default: 1500 sec.)


//dont mess

var sCityNames = "";

var aCityNames = sCityNames.split('|');

var aCityCodes = sCityCodes.split('|');

var code = aCityCodes[0];

var language = window.navigator.language;









//cookie



/*!

 * jQuery Cookie Plugin v1.3

 * https://github.com/carhartl/jquery-cookie

 *

 * Copyright 2011, Klaus Hartl

 * Dual licensed under the MIT or GPL Version 2 licenses.

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.opensource.org/licenses/GPL-2.0

 */

(function ($, document, undefined) {



  var pluses = /\+/g;



  function raw(s) {

    return s;

  }



  function decoded(s) {

    return decodeURIComponent(s.replace(pluses, ' '));

  }



  var config = $.cookie = function (key, value, options) {



    // write

    if (value !== undefined) {

      options = $.extend({}, config.defaults, options);



      if (value === null) {

	options.expires = -1;

      }



      if (typeof options.expires === 'number') {

	var days = options.expires, t = options.expires = new Date();

	t.setDate(t.getDate() + days);

      }



      value = config.json ? JSON.stringify(value) : String(value);



      return (document.cookie = [

	encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),

	options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE

	options.path	? '; path=' + options.path : '',

	options.domain	? '; domain=' + options.domain : '',

	options.secure	? '; secure' : ''

      ].join(''));

    }



    // read

    var decode = config.raw ? raw : decoded;

    var cookies = document.cookie.split('; ');

    for (var i = 0, l = cookies.length; i < l; i++) {

      var parts = cookies[i].split('=');

      if (decode(parts.shift()) === key) {

	var cookie = decode(parts.join('='));

	return config.json ? JSON.parse(cookie) : cookie;

      }

    }



    return null;

  };



  config.defaults = {};



  $.removeCookie = function (key, options) {

    if ($.cookie(key) !== null) {

      $.cookie(key, null, options);

      return true;

    }

    return false;

  };



})(jQuery, document);



//CLOCK



function updateClock ( )

{







//var TwentyFourHourClock = $.cookie("24hrcookie"); 





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

  var this_month_name_array = new Array("January","February","March","April","May","June","July","August","September","October","November","December")	//predefine month names



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

document.getElementById("month").firstChild.nodeValue = this_month_name_array[this_month] +" "	//concat long date string

}

// -->





//IF YOU USE SETTING DELETE THIS!





//localize languages

var web = { i18n: {

		locale: {},

		getLocale: function(lng){

			var l = (lng)?lng: window.navigator.language;

	    //alert('Your language is' + " " + l ); //Loop

			$(function(d) {

		web.i18n.locale = d;

				}).error(function() {

					web.i18n.getLocale('en_US'); //incase. default

				});

		},

		getMessage: function(t){

			return (this.locale[t])?this.locale[t].message: t;

		}

	}

};

web.i18n.getLocale();





//alert("t")



//return text from language clean



function thislangText(t) {

    t = t.replace(/[\/]/g, "_____");

    t = t.replace(/-/g, "____");

    t = t.replace(/ \/ /g, "___");

    t = t.replace(/ /g, "_");

    t = t.replace("____", "");	

    return web.i18n.getMessage(t);

}





String.prototype.t = function() {

    var str;

    if (thislangText(this) !== "") {

	str = thislangText(this);

    } else {

	str = this;

    }

    return str;

};





// get weather //



function GetXmlFeed() {

   var lang = (typeof language == "string")?language.replace(/-/g, "_"):language;

   var sc = document.createElement("script");

    sc.src='http://wxdata.weather.com/wxdata/mobile/mobagg/' + code + '.js?key=e88d1560-a740-102c-bafd-001321203584&units='+sUnit+'&locale=' + lang + '&cb=XmlFeedCB';

	document.body.appendChild(sc);



//alert(sc.src);



}



function XmlFeedCB(going){

	json = going[0];    //json is XML

  ShowContent();

}









function Showdata() {

  

var days = json.DailyForecasts;

var hdays = json.HourlyForecasts;

var ddays = json.NarrativeForecasts;

var firstday = JSON.stringify (ddays[0]);

var str = firstday;

str = str.replace("key", "")

str = str.replace("class", "")

str = str.replace("narrativeForecast", " ")

str = str.replace("validDate", " ")

str = str.replace("dayPart", " ")

str = str.replace("Today", " ")

str = str.replace("phrase", " ")

str = str.replace(/[\.,-\/#!$%\^&\*;:"{}=\-_`~()]/g,"")

str = str.slice(20, 147);

str = str.split('icon');

str = str[0];





 //alert(JSON.stringify (ddays[0]));

 //alert(icon);



 var html = [];







    for (i = 0; i < days.length; i++) {

		if (i > weatherSettings.days-1) break;









html.push('<div class="item">');

   var dn = days[i].day ? days[i].day : days[i].night; //days

 //alert(JSON.stringify (ddays));

 var d = new Date(parseInt(days[i].validDate,10) * 1000);





   var weekdays = d;

//alert(JSON.stringify(ddays));



       

function getCalendarDate()

{ 

   var months = new Array(13);

   months[0]  = "January";

   months[1]  = "February";

   months[2]  = "March";

   months[3]  = "April";

   months[4]  = "May";

   months[5]  = "June";

   months[6]  = "July";

   months[7]  = "August";

   months[8]  = "September";

   months[9]  = "October";

   months[10] = "November";

   months[11] = "December";



   //var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")

  var days = new Array("Sun","Mon","Tues","Wed","Thurs","Fri","Sat")

   

   var now	   = weekdays;

   var monthnumber = now.getMonth();

   var daynumber = now.getDay();

   var monthname   = months[monthnumber];

   var dayname	 = days[daynumber];

   var monthday    = now.getDate();

   var year	   = now.getYear();

   var day	   =now.getDay();

		      

   if(year < 2000) { year = year + 1900; }

   var windsdate = dayname;

   var dateString = dayname + "," + " "+ monthname +

		    ' ' +

		    monthday



   return dateString;



} // function getCalendarDate()



function getCalendarDate2(){

      var days = new Array("Sun","Mon","Tues","Wed","Thurs","Fri","Sat")

      var now	      = weekdays;

      var daynumberwind = now.getDay();

      var dayname   = days[daynumberwind];

      var windsdate = dayname;

 return windsdate;

 }

var calendarDate = getCalendarDate();

var windsdate = getCalendarDate2();















	html.push('<div class="date">');

	html.push('<span class="weekday">' + ('' + calendarDate) + '</span> <span class="days">' + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + '</span>');

	html.push('</div>');



	html.push('<div class="date2">');

	html.push('<span class="weekday2">' + ('' + windsdate) + '</span> <span class="days2">' + '</span>');

	html.push('</div>');

		//icon

	html.push('<div class="icon">');

	//html.push('  <img class="weatherIcon" width="40" src="icon/' + dn.icon + '_small' + '.png"  title="' + dn.phrase + '"/>');  //title is weather condition

      

	html.push('</div>');



	//temp

	html.push('<div class="temp"><span class="temp-max">'  + (days[i].maxTemp  ? (days[i].maxTemp + '') : '--') + ((sUnit == 's') ? '\&#8457' : '\&#8451')+'</span> <span class="temp-min"> / ' + (days[i].minTemp+'' ? (days[i].minTemp + '') : '--') + ((sUnit == 's') ? '\&#8457' : '\&#8451')+'</span></div>');





	//precip

	html.push('<div class="precip">' + dn.pop + '% ' + web.i18n.getMessage("precip") + '</div>');



	//wind

	//html.push('<div class="wind">' + dn.wDirText.t() + '<br/>' + dn.wSpeed + ((sUnit == 's') ? 'mph' : 'km/h') + '</div>');    

    }



	//city
    
    if(cityNameVisible == false)
    {
        
        html.push('<div class="city"></div>');
        
    }
    
    else
    {
    
        html.push('<div class="city">' + json.Location.city + '</div>');
        
    }

	

	//desc
    
    if(json.StandardObservation.text == "Partly Cloudy")
    {
        
        html.push("<div class='desc'>there are a few <span style='color: #FF6600'>fuckin' clouds</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Cloudy")
    {
        
        html.push("<div class='desc'>there are some fuckin' <span style='color: #FF6600'>clouds approaching</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Sunny")
    {
        
        html.push("<div class='desc'>it's clear as fucking day Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Clear")
    {
        
        html.push("<div class='desc'>it's clear as fucking day Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Fair")
    {
        
        html.push("<div class='desc'>it's <span style='color: #ff6600'>clear</span> as fucking day Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Hot")
    {
        
        html.push("<div class='desc'>it's hot as <span style='color: #ff6600'>fucking balls</span> out here Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Rain")
    {
        
        html.push("<div class='desc'>it's <span style='color: #ff6600'>raining balls</span> out here Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Drizzle")
    {
        
        html.push("<div class='desc'>there is some light <span style='color: #ff6600'>fuckin'</span> rain Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Snow")
    {
        
        html.push("<div class='desc'>Captain, it's <span style='color: #ff6600'>fucking snowing!</span></div>");
    
    }
    
    else if(json.StandardObservation.text == "Hail")
    {
        
        html.push("<div class='desc'>fuckin' <span style='color: #ff6600'>chunks of ice</span>are coming down Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Mist")
    {
        
        html.push("<div class='desc'>i can't <span style='color: #ff6600'>see shit</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Fog")
    {
        
        html.push("<div class='desc'>i can't <span style='color: #ff6600'>see shit</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Fog Patches")
    {
        
        html.push("<div class='desc'>i can barely <span style='color: #ff6600'>see shit</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Smoke")
    {
        
        html.push("<div class='desc'><span style='color: #ff6600'>fucking smoke</span> is around us Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Volcanic Ash")
    {
        
        html.push("<div class='desc'>Captain! there is <span style='color: #ff6600'>fucking volcanic ash!</span></div>");
    
    }
    
    else if(json.StandardObservation.text == "Widespread Dust")
    {
        
        html.push("<div class='desc'>there is <span style='color: #ff6600'>dust</span> floating around us Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Sand")
    {
        
        html.push("<div class='desc'>we have hit shores Captain!<span style='color: #ff6600'> sand</span> is near!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Rain Mist")
    {
        
        html.push("<div class='desc'>it is<span style='color: #ff6600'>wet as fuck</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Rain Showers")
    {
        
        html.push("<div class='desc'>it is<span style='color: #ff6600'>wet as fuck</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Rain Shower")
    {
        
        html.push("<div class='desc'>it is<span style='color: #ff6600'>wet as fuck</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Thunderstorm")
    {
        
        html.push("<div class='desc'>there is a <span style='color: #ff6600'>fucking storm</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Thunderstorms and Rain")
    {
        
        html.push("<div class='desc'>there is a <span style='color: #ff6600'>fucking storm</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Thunderstorms and Snow")
    {
        
        html.push("<div class='desc'>there is a <span style='color: #ff6600'>fucking storm and snow</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Thunderstorm with Hail")
    {
        
        html.push("<div class='desc'>there is a <span style='color: #ff6600'>fucking storm of hail</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Thunderstorm with Small Hail")
    {
        
        html.push("<div class='desc'>there is a <span style='color: #ff6600'>fucking storm of light hail</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Freezing Drizzle")
    {
        
        html.push("<div class='desc'>i am <span style='color: #ff6600'>freezing my balls </span> out here Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Freezing Rain")
    {
        
        html.push("<div class='desc'>i am <span style='color: #ff6600'>freezing my balls </span> and its <span style='color: #ff6600'>wet as fuck</span> out here Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Freezing Fog")
    {
        
        html.push("<div class='desc'>i can't see <span style='color: #ff6600'>shit</span> and i am <span style='color: #ff6600'>freezing my balls</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Patches of Fog")
    {
        
        html.push("<div class='desc'>i can barely see <span style='color: #ff6600'>anything</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Shallow Fog")
    {
        
        html.push("<div class='desc'>i can see some <span style='color: #ff6600'>shit</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Partial Fog")
    {
        
        html.push("<div class='desc'>i can see some <span style='color: #ff6600'>shit</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Overcast")
    {
        
        html.push("<div class='desc'>there are <span style='color: #ff6600'>clouds fuckin' everywhere</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Mostly Cloudy")
    {
        
        html.push("<div class='desc'>i can see some <span style='color: #ff6600'>shit</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Scattered Clouds")
    {
        
        html.push("<div class='desc'>it's <span style='color: #ff6600'>almost clear as fuckin'</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Snow Grains")
    {
        
        html.push("<div class='desc'>there are <span style='color: #ff6600'>bits of fuckin' snow</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "Light Snow Grains")
    {
        
        html.push("<div class='desc'>there is some <span style='color: #ff6600'>light fucking snow</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Heavy Snow Grains")
    {
        
        html.push("<div class='desc'>there is some <span style='color: #ff6600'>light fucking snow</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Heavy Snow ")
    {
        
        html.push("<div class='desc'>there is some <span style='color: #ff6600'>light fucking snow</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Snow")
    {
        
        html.push("<div class='desc'>there is some <span style='color: #ff6600'>light fucking snow</span> Captain</div>");
    
    }
    
    else if(json.StandardObservation.text == "Unknown")
    {
        
        html.push("<div class='desc'>i don't know what <span style='color: #ff6600'>the fuck is happening</span> Captain!</div>");
    
    }
    
    else if(json.StandardObservation.text == "N/A")
    {
        
        html.push("<div class='desc'>i don't know what <span style='color: #ff6600'>the fuck is happening</span> Captain!</div>");
    
    }
    
    else
    {
        
        html.push(json.StandardObservation.text);
        
    }

    
    
    
    
    

	

	



	html.push('<div class="shortdesc">' + dn.bluntPhrase + '</div>');





	//html.push('<div class="humidity">' +"Humid"+":" + " " +dn.humid +  '</div>');





      



// Check json before writing varible. Canada Does not have NowHirad

try {

jsons = ("{" + json.NowHirad.phrase + "}");

}

catch (exception) {

var getNowHirad =  "no";

//html.push('<div class="extendeddesc">' + str + '</div>');

jsons = null;}



if(getNowHirad != "no"){

html.push('<div class="extendeddesc">' + json.NowHirad.phrase + '</div>');

}





  html.push('<div class="whenwillitrain">' + json.WhenWillItRain.standardPhrase + '</div>');







     //html.push('<div class="windnow">' + json.StandardObservation.wSpeed + " " +json.StandardObservation.wDirText +'</div>');



	html.push('<div class="temptoday">' + json.StandardObservation.temp + '</div>');

  //html.push('  <img class="TodayIcon" width="30" src="icon/' + json.StandardObservation.wxIcon + '_small' + '.png"  title="' + dn.phrase + '"/>');  //title is weather condition

	

	html.push('</div>');







  icon = json.StandardObservation.wxIcon;

   var iconnumber = icon;



   $('#var').html(iconnumber);

 



   if(icon > null){

   

    $.cookie('bb', (iconnumber), {

	    expires: 365

	   });



   }

  

$.cookie('bb', (iconnumber), { path: '/', expires: 365 });







  

$('.weatherdata #weather').html(html.join(''));





if(json.StandardObservation.wSpeed > 0){

    rotatethis();

    function rotatethis(){

$("#blade").animateRotate(3600);

$("#blade2").animateRotate(3600);

}

}

setInterval(rotatethis, 19980);

}

//rotate blades

    $.fn.animateRotate = function(angle, duration, easing, complete){

    return this.each(function(){



	var elem = $(this);



	$({deg: 0}).animate({deg: angle}, {

	    duration: 20000,

	    easing: easing,

	    step: function(now){

		elem.css({

		    transform: "rotate(" + now + "deg)"



		});





	    },

	



	});

 });



};







function ShowContent() {

  Showdata();

}





(function($){



//extend to adj in html

$.fn.weather = function(options){

		weatherSettings = $.extend({

								"locationName": "",

								"locationCode":"",

								"showall": true,

								"days": 4}, options); //change from html



			GetXmlFeed(true);}

})($);

