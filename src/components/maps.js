/*global google*/
function initMap() {
	
	var frogner = {
		info: '<strong>Lucky Cup Frogner</strong><br>\
					Bygdøy allé 17<br> 0267 Oslo<br>\
					<a href="https://www.google.com/maps/place/Bygd%C3%B8y+all%C3%A9+17,+0262+Oslo/@5 9.9139519,10.728967,17z/data=!4m5!3m4!1s0x46416dd3446793cd:0x7273c747063 39df0!8m2!3d59.9160077!4d10.7133661?shorturl=1">Get Directions</a>',
		lat: 59.916010,
		long: 10.713385
	};
  var majorstuen = {
    info: '<strong>Lucky Cup Majorstuen</strong><br>\
					Neuberggata 20<br> 0367 Oslo<br>\
					<a href="https://www.google.com/maps/place/Neuberggata+20,+0367+Oslo/@59.9275959, 10.7143379,17z/data=!3m1!4b1!4m5!3m4!1s0x46416dda68bbe857:0x45907dac0cbd fae9!8m2!3d59.9275932!4d10.7165266?shorturl=1">Get Directions</a>',
		lat: 59.927557,
		long: 10.716551
  };
  var vika = {
    info: '<strong>Lucky Cup Vika</strong><br>\
					Haakon VIIs gate 5<br> 0161 Oslo<br>\
					<a href="https://www.google.com/maps/place/Haakon+VIIs+gate+5,+0161+Oslo/@59.9139 519,10.728967,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e7e1b3dfd45:0xc77d49113 796fa12!8m2!3d59.9139492!4d10.7311557?shorturl=1">Get Directions</a>',
		lat: 59.913833,
		long: 10.731125
  };
  
  var locations = [
    [frogner.info, frogner.lat, frogner.long, 0],
    [majorstuen.info, majorstuen.lat, majorstuen.long, 1],
    [vika.info, vika.lat, vika.long, 2],
  ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(59.921453, 10.718126),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

  var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			};
		})(marker, i));
	}
}