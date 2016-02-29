// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com


$.simpleWeather({
    location: '99141',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('i').addClass( 'icon-' + weather.code );
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });


// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {
  $('.geolocation').show(); 
} else {
  $('.geolocation').hide();
}


// On Click, Get Geolocation, Call Weather Function
$('button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
       $('i').addClass( 'icon-' + weather.code );
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
      
  
  });
  
};


var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight
    });
    document.body.appendChild(pattern.canvas());
    
    
var Trianglify = require('trianglify'); // only needed in node.js
var pattern = Trianglify({width: 200, height: 200});