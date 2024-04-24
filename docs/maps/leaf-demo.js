// See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
    center: [0, 0],
    minZoom: 2,
    zoom: 2,
    zoomControl: false,
    scrollWheelZoom: "center",
}).on("click", (x) => console.log(JSON.stringify(x.latlng)))

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo.js"]')
    .attr('src')
    .replace('leaf-demo.js', '')

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
})

let color = {
    "Beds": "orange",
    "Hammocks": "blue",
    "Floor": "green"
}

let i = 0
for (i = 0; i < markers.length; ++i) {
    L.circleMarker([markers[i].lat, markers[i].lng], { radius: 5 })
	.addTo(map)
	.bindPopup(
	    '<a onclick="document.location=\'' +
		markers[i].to +
		'.html\'" target="_blank">' +
		markers[i].name +
		'<br/>'+markers[i].to+'</a>'
	)
	.setStyle({color: color[markers[i].to], fillOpacity:1})
}
