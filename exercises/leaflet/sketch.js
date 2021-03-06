var map;
var canvas;
var mags = [];
var quakes = [];
var slider;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('map');
    initLeaflet();
    loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv', parseSource);
    slider = createSlider(0, 10, 1);
    slider.position(width-400, 25);
    clider.id('top');
}

function draw(){
    for (var i = 1; i < data.length; i++) {
        quakes[i].setRadius(mags[i]);
    }
}

function parseSource(data) {
    for (var i = 1; i < data.length; i++) {
        var row = split(data[i], ',');
        mags[i] = row[4];
        quakes[i] = L.circleMarker([row[1], row[2]], {
            stroke: true,
            weight: 1,
            opacity: 0.3,
            fillOpacity: 0.8,
            // fillColor: setColor(row[4])
        });
        var place = row[13];
        quakes[i]
            .addTo(map)
            .setRadius(mags[i])
            .bindPopup('<b>' + row[4] + '<b> magnitude' + place);
    }
}

function initLeaflet() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiY3Jvb2tvb2tvbyIsImEiOiJoSWZlQWhnIn0.BZsl4HSikEgkLjem-3Y8CQ';
    map = L.mapbox.map('map', 'mapbox.light').setView([20, 0], 2);
    
    function onMapClick(e) {
        // no need but we need the function
    }
    
    map.on('click', onMapClick);
}