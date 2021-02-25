function initMap() {
	L.mapquest.key = 'RegUDYSANpf4H20jRMi3RiJJhqZCiM3G';

	// 'map' refers to a <div> element with the ID map
	
	var map = L.mapquest.map('map', {
	  center: [32.88, -117.236],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});
	L.marker([32.88, -117.236]).addTo(map);
}