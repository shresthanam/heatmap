const map = new maplibregl.Map({
    container:"map",
    style:"https://api.baato.io/api/v1/styles/breeze?key=bpk.uWPbkYCjaY8gjZKKEfRso662pxB4VbIuTHa0eH2ODkZW",
    zoom:6,
    center:[84.1240,28.3949]
});

const mapData={"type": "FeatureCollection",
"name": "pollution",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::3857" } },
"features": [
{ "type": "Feature", "properties": { "Location": "Shankapark", "Date": "26/04/2025", "Time": "7:31:00", "AQI": 258.5, "Lat": 27.7335, "Long": 85.3426 }, "geometry": { "type": "Point", "coordinates": [ 85.3426, 27.7335 ] } },
{ "type": "Feature", "properties": { "Location": "GBS, Pkr", "Date": "26/04/2025", "Time": "7:26:00", "AQI": 145.57, "Lat": 28.2576, "Long": 83.977 }, "geometry": { "type": "Point", "coordinates": [ 83.977, 28.2576 ] } },
{ "type": "Feature", "properties": { "Location": "Bharatpur", "Date": "26/04/2025", "Time": "6:58:00", "AQI": 156.89, "Lat": 27.6706, "Long": 84.4385 }, "geometry": { "type": "Point", "coordinates": [ 84.4385, 27.6706 ] } },
{ "type": "Feature", "properties": { "Location": "Surkhet", "Date": "26/04/2025", "Time": "7:32:00", "AQI": 194.44, "Lat": 28.5175, "Long": 81.7787 }, "geometry": { "type": "Point", "coordinates": [ 81.7787, 28.5175 ] } },
{ "type": "Feature", "properties": { "Location": "Khumaltar", "Date": "26/04/2025", "Time": "7:28:00", "AQI": 179.53, "Lat": 27.6485, "Long": 85.3253 }, "geometry": { "type": "Point", "coordinates": [ 85.3253, 27.6485 ] } },
{ "type": "Feature", "properties": { "Location": "Rara", "Date": "26/04/2025", "Time": "7:28:00", "AQI": 125.13, "Lat": 29.5256, "Long": 82.0625 }, "geometry": { "type": "Point", "coordinates": [ 82.0625, 29.5256 ] } },
{ "type": "Feature", "properties": { "Location": "Deukhuri, Dang", "Date": "26/04/2025", "Time": "7:21:00", "AQI": 172.83, "Lat": 28.0, "Long": 82.4753 }, "geometry": { "type": "Point", "coordinates": [ 82.4753, 28.0 ] } },
{ "type": "Feature", "properties": { "Location": "Hetauda", "Date": "26/04/2025", "Time": "7:26:00", "AQI": 153.11, "Lat": 27.431, "Long": 85.032 }, "geometry": { "type": "Point", "coordinates": [ 85.032, 27.431 ] } },
{ "type": "Feature", "properties": { "Location": "Dhangadhi", "Date": "26/04/2025", "Time": "7:26:00", "AQI": 175.18, "Lat": 28.6852, "Long": 80.6216 }, "geometry": { "type": "Point", "coordinates": [ 80.6216, 28.6852 ] } },
{ "type": "Feature", "properties": { "Location": "Achaam", "Date": "26/04/2025", "Time": "1:38:00", "AQI": 142.61, "Lat": 29.0396, "Long": 81.2519 }, "geometry": { "type": "Point", "coordinates": [ 81.2519, 29.0396 ] } },
{ "type": "Feature", "properties": { "Location": "Bhaisipati", "Date": "26/04/2025", "Time": "7:16:00", "AQI": 153.11, "Lat": 27.6525, "Long": 85.3049 }, "geometry": { "type": "Point", "coordinates": [ 85.3049, 27.6525 ] } },
{ "type": "Feature", "properties": { "Location": "Nepalgunj", "Date": "26/04/2025", "Time": "7:29:00", "AQI": 69.32, "Lat": 28.0548, "Long": 81.6145 }, "geometry": { "type": "Point", "coordinates": [ 81.6145, 28.0548 ] } },
{ "type": "Feature", "properties": { "Location": "Ratnapark", "Date": "26/04/2025", "Time": "7:29:00", "AQI": 199.68, "Lat": 27.7, "Long": 83.31 }, "geometry": { "type": "Point", "coordinates": [ 83.31, 27.7 ] } },
{ "type": "Feature", "properties": { "Location": "Ilam", "Date": "26/04/2025", "Time": "4:38:00", "AQI": 91.38, "Lat": 26.9112, "Long": 87.9237 }, "geometry": { "type": "Point", "coordinates": [ 87.9237, 26.9112 ] } },
{ "type": "Feature", "properties": { "Location": "Bhaktapur ", "Date": "26/04/2025", "Time": "7:23:00", "AQI": 256.09, "Lat": 27.6748, "Long": 85.4274 }, "geometry": { "type": "Point", "coordinates": [ 85.4274, 27.6748 ] } }
]
}
console.log("Initial")
map.once("load",()=>{
    map.addSource("AQI",{
        type:"geojson",
        data:mapData

        }
    );

    map.addLayer({
        id:"AQI-heatmap",
        type:"heatmap",
        source:"AQI",
        paint:{
            'heatmap-weight': {
                'property': 'AQI',
                'type': 'exponential',
                'stops': [
                    [0, 0],
                    [51, 1],
                    [101, 2],
                    [201,4],
                    [301,5]
                ]
            },
            'heatmap-intensity': {
                'stops': [
                    [8, 1],
                    [10, 3]
                ]
            },
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'], 
                0, 'rgba(0, 255, 0, 0)', 
                0.5, 'rgba(255, 255, 0, 0.5)', 
                1, 'rgba(255, 0, 0, 0.8)' 
            ],
        
            'heatmap-radius': {
                'stops': [
                    [51, 30],
                    [201, 60]
                ]
            },
            'heatmap-opacity': 0.8
        }
    });
           
    
    console.log("loaded")

});

