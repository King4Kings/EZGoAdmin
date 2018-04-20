// Initialize Firebase
var config = {
    apiKey: "AIzaSyBfEKUcykzjyMHIUbNZbH4NCTLeIHg7UpI",
    authDomain: "cabtrack-6cb6e.firebaseapp.com",
    databaseURL: "https://cabtrack-6cb6e.firebaseio.com",
    projectId: "cabtrack-6cb6e",
    storageBucket: "cabtrack-6cb6e.appspot.com",
    messagingSenderId: "523233495121"
  };
  var app;
  var db;
  var directionsService;

var markers = {};
var map;
var directionsDisplay;
var directionsService;
var startLatLng;
var endLatLng;

function initMap() {
    app = firebase.initializeApp(config);
    db = firebase.firestore(app);
    URL = window.location.href;
    var myLatLng = {lat: 37.33367919921875, lng: -122.0502853393555};
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    db.collection("Position").doc("NQiT317h54YClAKGU1ev")
    .onSnapshot(function(doc) {
        var latitude = doc.data().Location[0]
        var longitude = doc.data().Location[1]
        var course = doc.data().Location[2]
        var myLatLng = {lat: latitude, lng: longitude};
        startLatLng = myLatLng
        
        newMarker("Cab", myLatLng, course)
        var destLat = doc.data().destination[0]
        var destLong = doc.data().destination[1]
        var mydestLatLng = {lat: destLat, lng: destLong}
        endLatLng = mydestLatLng
        newDestination("Destination", mydestLatLng)

    });


        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: myLatLng
        });
}

function newDestination(k, location) {
    if (location.lat == 0 && location.lng == 0) {
        markers[k] = null
        return
    }
    if (markers[k] == null) {
        markers[k] = new google.maps.Marker({
            position : location,
            map: map,
            icon: {
                url: '/static/AddPin.png',
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(50, 50),                
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(25, 25),
                optimized: false
            } 
        });
        calcRoute(startLatLng, endLatLng)
    } else {
        markers[k].setPosition(location);
        let icon = markers[k].getIcon();
        markers[k].setIcon(icon);
       // map.panTo(location);

    }
    
}

function newMarker(k, location, course) {
    if (markers[k] == null) {
        markers[k] = new google.maps.Marker({
            position : location,
            map: map,
            icon: {
                url: '/static/cab.png',
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(50, 50),                
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(25, 25),
                rotation: course,
                optimized: false
            } 
        });
    } else {
        markers[k].setPosition(location);
        let icon = markers[k].getIcon();
        icon.rotation = course;
        markers[k].setIcon(icon);
        map.panTo(location);
    }
    
}



function calcRoute(start, end) {
    if (end.lat == 0 && end.lng == 0) {
        return
    }
    var start = new google.maps.LatLng(start.lat, start.lng);
    var end = new google.maps.LatLng(end.lat, end.lng);
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
  }