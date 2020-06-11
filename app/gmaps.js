// Create HTML tag, used for hiding API key
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + config.API_KEY + '&callback=getElevationData';
script.defer = true;
script.async = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);

var paths = [
    [
        {lat: 50.40, lng: -119.9},
        {lat: 50.25, lng: -118.9}
    ],
    [
        {lat: 50.35, lng: -120.6},
        {lat: 50.30, lng: -118.6}
    ],
    [
        {lat: 50.30, lng: -120.6},
        {lat: 50.30, lng: -118.6}
    ],
    [
        {lat: 50.25, lng: -120.6},
        {lat: 50.25, lng: -118.6}
    ],
    [
        {lat: 50.20, lng: -120.6},
        {lat: 50.20, lng: -118.6}
    ],
    [
        {lat: 50.15, lng: -120.6},
        {lat: 50.15, lng: -118.6}
    ],
    [
        {lat: 50.10, lng: -120.6},
        {lat: 50.10, lng: -118.6}
    ],
    [
        {lat: 50.05, lng: -120.6},
        {lat: 50.05, lng: -118.6}
    ],
    [
        {lat: 50.00, lng: -120.6},
        {lat: 50.00, lng: -118.6}
    ],
    [
        {lat: 49.95, lng: -120.6},
        {lat: 49.95, lng: -118.6}
    ],
    [
        {lat: 49.90, lng: -120.6},
        {lat: 49.95, lng: -118.6}
    ],
    [
        {lat: 49.90, lng: -120.6},
        {lat: 49.90, lng: -118.6}
    ],
    [
        {lat: 49.85, lng: -120.6},
        {lat: 49.85, lng: -118.6}
    ],
    [
        {lat: 49.80, lng: -120.6},
        {lat: 49.80, lng: -118.6}
    ],
    [
        {lat: 49.75, lng: -120.6},
        {lat: 49.75, lng: -118.6}
    ],
    [
        {lat: 49.70, lng: -120.6},
        {lat: 49.70, lng: -118.6}
    ],
    [
        {lat: 49.65, lng: -120.6},
        {lat: 49.65, lng: -118.6}
    ],
    [
        {lat: 49.60, lng: -120.6},
        {lat: 49.60, lng: -118.6}
    ],
    [
        {lat: 49.55, lng: -120.6},
        {lat: 49.55, lng: -118.6}
    ],
    [
        {lat: 49.50, lng: -120.6},
        {lat: 49.50, lng: -118.6}
    ],
    [
        {lat: 49.45, lng: -120.6},
        {lat: 49.45, lng: -118.6}
    ]
]

function getElevationData() {
    var gmapsElevation = new google.maps.ElevationService;

    paths.forEach((path) => gmapsElevation.getElevationAlongPath({
        'path': path,
        'samples': 48
      }, showElevation)
    );
}

count = 0;
function showElevation(elevationData, status) {
    if (status !== 'OK')
        console.log('Request failed: ' + status);
    else {
        console.log('Request: ' + status);

        var elevationPoints = []
        elevationData.forEach((sample) => elevationPoints.push({y: sample.elevation - count}));
        createNewLine(elevationPoints);

        count += 800;
    }
    chart.render();
}