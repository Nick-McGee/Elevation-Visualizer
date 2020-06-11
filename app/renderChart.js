var elevationPoints = [];

var chart = new CanvasJS.Chart("chart", {
    exportEnabled: true,
    animationEnabled: false,
    animationDuration: 2000,
    height: 600,  
    interactivityEnabled: false,
    backgroundColor: "black",
    axisY: {
        labelFormatter: () => " ",
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
    },
    axisX: {
        labelFormatter: () => " ",
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
    },
    data: []
});

function createNewLine(elevationPoints) {
    var newLine = {
        type: "splineArea",
        markerType: "none",
        color: "#f4f4f4",
        lineThickness: 2,
        fillOpacity: 0.01,
        dataPoints: elevationPoints
    };
    chart.options.data.push(newLine);    
}

function renderChart() {
    chart.render();
}