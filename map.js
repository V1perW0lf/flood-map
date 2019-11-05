// Initialize and add the map
var map;

function initMap() {
	var geoC = new google.maps.Geocoder();
	function codeAddress(addressIn) {
		var address = addressIn;
		geoC.geocode(
			{
				address: address
			},
			function(results, status) {
				if (status == "OK") {
					// var marker = new google.maps.Marker({
					// 	map: map,
					// 	position: results[0].geometry.location
					// });
					map = new google.maps.Map(document.getElementById("map"), {
						zoom: 10,
                        center: results[0].geometry.location,
                        styles: [
                            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                            {
                                featureType: 'administrative.locality',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }]
                            },
                            {
                                featureType: 'poi',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'geometry',
                                stylers: [{ color: '#263c3f' }]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#6b9a76' }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry',
                                stylers: [{ color: '#38414e' }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: '#212a37' }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#9ca5b3' }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry',
                                stylers: [{ color: '#746855' }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: '#1f2835' }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#f3d19c' }]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'geometry',
                                stylers: [{ color: '#2f3948' }]
                            },
                            {
                                featureType: 'transit.station',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'geometry',
                                stylers: [{ color: '#17263c' }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#515c6d' }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.stroke',
                                stylers: [{ color: '#17263c' }]
                            }
                        ]
					});

					// some debug output
					console.log("status is: " + status);
					console.log(
						"results is: " + JSON.stringify(results[0].geometry.location)
					);
				} else {
					console.log("This didnt work" + status);
				}
			}
		);
    }
    // Ask company at start of use where their location is
	codeAddress("1400 S Post Oak, Houston, TX");
}

function addMarker() {
	var geoC = new google.maps.Geocoder();
	var address = document.getElementById("addressText").value;
	console.log(address);
	geoC.geocode(
		{
			address: address
		},
		function(results, status) {
			if (status == "OK") {
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});

				// some debug output
				console.log("status is: " + status);
				console.log(
					"results is: " + JSON.stringify(results[0].geometry.location)
				);
			} else {
				console.log("This didnt work: " + status);
			}
		}
	);
}

//Swal.fire("Good job!", "You clicked the button!", "success");
