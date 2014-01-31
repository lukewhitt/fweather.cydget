# FWeather Cydget

FWeather Cydget is a port of popular FWeather App that was only availiable on Android devices.

The cydget obviously uses Cydget (so you will need to install that before using it). 

To enable this Cydget do the following:

* Download FWeather.cydget
* Using a SSH program, get into your device
* Navigate to /System/Library/LockCydgets
* Copy it there
* Go into Settings on your iPhone then Cydget
* Enable and respring!

You will also need to edit the weather.js file to accomodate your location. Do the following:

* Using either iFile or your SSH client navigate to /System/Library/LockCydgets/FWeather.cydget/weather/js
* Open up weather.js
* Change the sCityCodes to the one you found on weather.com
* Save and close the file, and respring (just to make sure the changes take place)

To change the background do the following:

* Copy an image to /System/Libray/LockCydgets/FWeather.cydget/weather/icon
* Rename it to an easy name such as "Dog.jpg"
* Open up LockBackground.html in /LockCydgets/FWeather.cydget
* Change the line where it is commented

I have also included a statement in the code that will help us iron out the kinks in the cydget. If at anytime your lockscreen says anything WITHOUT 'Captain' in it, then please open up an issue and describe what it is. For instance, you may get something that just says "Fair with Snow". This will help us completely cover all observations and make the cydget very broad.
