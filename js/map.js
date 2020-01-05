
        var locations = [
		//Arizona Locations
        	['True Food Kitchen - Phoenix - location marker', 33.5103953, -112.030881, 1],
			['True Food Kitchen - Scottsdale - location marker', 33.624254, -111.924371, 2],
		//California Locations
			['True Food Kitchen - El Segundo - location marker', 33.9023404, -118.4037751, 3],
			['True Food Kitchen - Newport Beach - location marker', 33.6150696, -117.8753117, 4],
			['True Food Kitchen - Palo Alto - location marker', 37.4446147, -122.1725093, 5],
			['True Food Kitchen - Pasadena - location marker', 34.1454254, -118.1538884, 6],
			['True Food Kitchen - San Diego - location marker', 32.7684887, -117.1681485, 7],
			['True Food Kitchen - Santa Monica - location marker', 34.012978, -118.4943605, 8],
			['True Food Kitchen - Walnut Creek - location marker', 37.8951155, -122.0608171, 9],
			['True Food Kitchen - San Diego (Westfield UTC) - location marker', 32.8718142,-117.2137353, 22],
		//Colorado Locations
			['True Food Kitchen - Denver - location marker', 39.7163356, -104.9714794, 10],
		//Florida Locations
			['True Food Kitchen - Naples - location marker', 26.2133486, -81.8048422, 11],
			['True Food Kitchen - Boca Raton - location marker', 26.3625531, -80.1348248, 23],
			['True Food Kitchen - Jacksonville - location marker', 30.2525956, -81.5272317, 27],
			['True Food Kitchen - Miami - location marker', 25.6447926, -80.340486, 29],
			['True Food Kitchen - Palm Beach Gardens - location marker', 26.8485879, -80.0853187, 33],
			['True Food Kitchen - West Palm Beach - location marker', 26.708142, -80.0586947, 34],
			['True Food Kitchen - Tampa - location marker', 27.9526237, -82.5104873, 38],
		//Georgia Locations
			['True Food Kitchen - Alpharetta - location marker', 34.0705613, -84.2808691, 31],
			['True Food Kitchen - Atlanta - location marker', 33.8466715, -84.364132, 12],
		//Illinois Locations
			['True Food Kitchen - Oak Brook - location marker', 41.8508551, -87.9723457, 37],
			['True Food Kitchen - Chicago - location marker', 41.8937794, -87.630603, 13],
		//Louisiana Locations
			['True Food Kitchen - New Orleans - location marker', 29.9457537, -90.074266, 28],
		//Maryland Locations
			['True Food Kitchen - Bethesda - location marker', 38.9804217, -77.0926641, 14],
		//Missouri Locations
			['True Food Kitchen - Kansas City - location marker', 39.0403785, -94.598013, 26],
		//Nevada Locations
			['True Food Kitchen - Las Vegas (The Forum Shops at Caesars) - location marker', 36.1189986, -115.1761463, 39],
			['True Food Kitchen - Las Vegas (Summerlin) - location marker', 36.1507644, -115.3355955, 32],
		//New Jersey Locations
			['True Food Kitchen - Hackensack (The Shops at Riverside) - location marker', 40.9055583, -74.0352692, 40],
		//Ohio Locations
			['True Food Kitchen - Columbus (Easton Town Center) - location marker', 40.053733, -82.9168025, 35],
		//Pennsylvania Locations
			['True Food Kitchen - King of Prussia - location marker', 40.089721, -75.3987336, 15],
		//Tennessee Locations
			['True Food Kitchen - Nashville - location marker', 36.1048196, -86.8167654, 16],
		//Texas Locations
			['True Food Kitchen - Austin (Seaholm) - location marker', 30.2672474, -97.7542743, 17],
			['True Food Kitchen - Austin (The Domain) - location marker', 30.4020653, -97.7433924, 25],
			['True Food Kitchen - Dallas - location marker', 32.8640997, -96.8054023, 18],
			['True Food Kitchen - Houston - location marker', 29.7493038, -95.4643977, 19],
			['True Food Kitchen - Plano - location marker', 33.0811183,-96.8264535, 21],
			['True Food Kitchen - The Woodlands - location marker', 30.1647062, -95.4666147, 24],
		//Virginia Locations
			['True Food Kitchen - Arlington - location marker', 38.8796756, -77.1130779, 30],
			['True Food Kitchen - Fairfax - location marker', 38.8726981, -77.2322558, 20],
			['True Food Kitchen - Reston - location marker', 38.9592457, -77.3595616, 36],
		//New York Locations
			['True Food Kitchen - Garden City - location marker', 40.7382015, -73.6165463, 40],
        ];
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
			disableDefaultUI: true,
            styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d1ebfb"
            },
            {
                "visibility": "on"
            }
        ]
    }
],
            center: new google.maps.LatLng(39.8282, -98.5795),
          mapTypeId: google.maps.MapTypeId.ROADMAP
			
			
        });

        //var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
			var loc = locations[i]
            marker = new google.maps.Marker({ 
            position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4], locations[i][5], locations[i][6], locations[i][7], locations[i][8], locations[i][9], locations[i][10], locations[i][11], locations[i][12], locations[i][13], locations[i][14], locations[i][15], locations[i][16], locations[i][17], locations[i][18], locations[i][19], locations[i][20], locations[i][21], locations[i][22], locations[i][23], locations[i][24], locations[i][25], locations[i][26], locations[i][27], locations[i][28], locations[i][29], locations[i][30], locations[i][31], locations[i][32], locations[i][34], locations[i][35], locations[i][36], locations[i][37], locations[i][38], locations[i][39], locations[i][40], locations[i][41]),
			icon: 'images/map_pointer.png',
            map: map ,
			title: '',
            });
			google.maps.event.addListener(this.map, 'tilesloaded', function(evt){
    $(this.getDiv()).find("img").each(function(i, eimg){
      if(!eimg.alt || eimg.alt ===""){
         eimg.alt = loc[0];
      }
    });
 });
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
			  infowindow.attr('tabindex','0');
            }
          })(marker, i));
        }


function initialize()
{
	var index=0;
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(39.8282, -98.5795),//Setting Initial Position
  });
	
	google.maps.event.addDomListener(window, 'load', initialize);
}

function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng,
	});
}

//Setting Location with jQuery
$(document).ready(function ()
{
    $("#arizona").on('click', function ()
    {
	  map.setZoom(8);
	  newLocation(33.4942, -111.9261);
	});
  
	$("#california").on('click', function ()
    {
	  map.setZoom(6);
	  newLocation(35.4431634, -118.328148);
	});
  
    $("#colorado").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(39.7392, -104.9903);
	});
	$("#florida").on('click', function ()
    {
	  map.setZoom(6);
	  newLocation(26.2133486, -81.8048422);
	});
	$("#georgia").on('click', function ()
    {
	  map.setZoom(10);
	  newLocation(33.8466715, -84.364132);
	});
	$("#illinois").on('click', function ()
    {
	  map.setZoom(8);
	  newLocation(41.8937794, -87.630603);
	});
	$("#louisiana").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(29.9458718, -90.074254);
	});
	$("#maryland").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(38.9803133, -77.0945294);
	});
	$("#missouri").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(39.0403785, -94.598013);
	});
	$("#nevada").on('click', function ()
    {
	  map.setZoom(11);
	  newLocation(36.1507644, -115.3355955);
	});
	$("#newjersey").on('click', function ()
    {
	  map.setZoom(14);
	  newLocation(40.9055583, -74.0352692);
	});
	$("#newyork").on('click', function ()
    {
	  map.setZoom(14);
	  newLocation(40.7382015, -73.6165463);
	});
	$("#ohio").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(40.053733, -82.9168025);
	});
	$("#pennsylvania").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(40.089721, -75.3987336);
	});
	$("#tennessee").on('click', function ()
    {
	  map.setZoom(12);
	  newLocation(36.1043932, -86.8166272);
	});
	$("#texas").on('click', function ()
    {
	  map.setZoom(6);
	  newLocation(31.3220056, -97.776648);
	});
	$("#virginia").on('click', function ()
    {
	  map.setZoom(11);
	  newLocation(38.8726981, -77.2322558);
	});
});
