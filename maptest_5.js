var mymap = L.map('mapid').setView([53.5324464, 8.592195], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmFidS1icmVtZXJoYXZlbiIsImEiOiJja2Y4aHhxaTcwNDV2MzJsZDhwejFhM20zIn0.Ji2CAaQFXkmIb5Q7DNJx3w',{maxZoom: 18,attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap<\/a> contributors, ' +'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA<\/a>, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox<\/a>',id: 'mapbox/streets-v11',tileSize: 512,zoomOffset: -1}).addTo(mymap);
L.marker([53.5324464, 8.592195]).addTo(mymap);
L.marker.bindPopup("<b>Hello world!<\/b><br>I am a popup.").openPopup();
