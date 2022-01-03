

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/forrestcasey/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/static/data/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
        console.log(data);
    // creating a GeoJSON layer with the retrived data.
    L.geoJson(data).addTo(map);
});




// d3.json(airportData, function(data) {
//     console.log(data);
//     // Creating a geoJSON layer with the retrieved data
//     L.geoJson(data, {
//       // Called on each feature
//       pointToLayer: function(feature, latlng) {
//         return L.Marker(latlng);
//         },
//         style: styleInfo,
//             onEachFeature: function(feature, layer) {
//         // Giving each feature a pop-up with information pertinent to it
//             layer.bindPopup("<h1>Airport code: " + type.faa + "</h1> <hr> <h3>Airport name:  " + type.name + "</h3>");
//       }
//     }).addTo(map);
//   });