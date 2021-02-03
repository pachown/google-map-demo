let trafficLayer, bikeLayer, transitLayer, map;
function load() {
  //designated map options
  var mapOptions = {
    zoom: 13,
    center: { lat: 51.501904, lng: -0.115871 },
    mapTypeId: 'hybrid',
  }
  //map render centered at coordinates
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //marker in center of map
  const marker = new google.maps.Marker({
    position: { lat: 51.501904, lng: -0.115871 },
    map: map,
  });
  //set up layers on map and add Dom Listeners to Google Map Rendering
  trafficLayer = new google.maps.TrafficLayer();
  google.maps.event.addDomListener(document.getElementById('traffic'), 'click', trafficToggle);
  transitLayer = new google.maps.TransitLayer();
  google.maps.event.addDomListener(document.getElementById('transit'), 'click', transitToggle);
  bikeLayer = new google.maps.BicyclingLayer();
  google.maps.event.addDomListener(document.getElementById('bike'), 'click', bikeToggle);
}

//traffic layer
var trafficToggle = () => {
  if (trafficLayer.getMap() == null) {
    trafficLayer.setMap(map);
  } else {
    trafficLayer.setMap(null);
  }
}
//transit layer
var transitToggle = () => {
  if (transitLayer.getMap() == null) {
    transitLayer.setMap(map);
  } else {
    transitLayer.setMap(null);
  }
}
//bicycling layer
var bikeToggle = () => {
    if (bikeLayer.getMap() == null) {
      bikeLayer.setMap(map);
    } else {
      bikeLayer.setMap(null);
    }
  }

// google.maps.event.addDomListener(window, "load", load);


    // var historicalOptions = {
    //   zoom: 13,
    //   center: { lat: 40.74, lng: -74.18 },
    // }
    // function initMap() {
    //   let map = new google.maps.Map(document.getElementById("map"), historicalOptions);
    //   const imageBounds = {
    //     north: 40.773941,
    //     south: 40.712216,
    //     east: -74.12544,
    //     west: -74.22655,
    //   };
    //   historicalOverlay = new google.maps.GroundOverlay(
    //     "https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
    //     imageBounds
    //     );
    //     historicalOverlay.setMap(map);
    //   }

