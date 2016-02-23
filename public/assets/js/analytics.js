//clicks graph options
var clickGraph = new CanvasJS.Chart("clickGraph",{
    theme:"theme2",
    title:{
        text: "Click Analysis"
    },
    animationEnabled: true,
    axisY :{
        includeZero: false,
        valueFormatString: "#,,.",
        suffix: " mn"
    },
    toolTip: {
        shared: "true"
    },
    data: [
        {
            type: "spline",
            showInLegend: true,
            name: "Total",
            dataPoints: []
        },
        {
            type: "spline",
            showInLegend: true,
            // markerSize: 0,
            name: "User",
            dataPoints: []
        },
        {
            type: "spline",
            showInLegend: true,
            // markerSize: 0,
            name: "Session",
            dataPoints: []
        }


    ],
    legend:{
        cursor:"pointer",
        itemclick : function(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }

    }
});
var platformGraph = new CanvasJS.Chart("platformGraph",
	{
		title:{
			text: "Platform Analysis",
			verticalAlign: 'top',
			horizontalAlign: 'left'
		},
        animationEnabled: true,
		data: [
		{
			type: "doughnut",
			startAngle:20,
			toolTipContent: "{label}: {y} - <strong>#percent%</strong>",
			indexLabel: "{label} #percent%",
			dataPoints: [
				{  y: 67, label: "Inbox" },
				{  y: 28, label: "Archives" },
				{  y: 10, label: "Labels" },
				{  y: 7,  label: "Drafts"},
				{  y: 4,  label: "Trash"}
			]
		}
		]
	});


//loader options
var opts = {
    speed: 1.5 // Rounds per second
}
var clickLoader = document.getElementById('clickPanel');
var referrerLoader = document.getElementById('referrerPanel');
var platformLoader = document.getElementById('platformPanel');

var currentUrlId;

function getAnalytics(data, range){
    currentUrlId = data;

    drawClickGraph(data, range);
    drawPlatformGraph(data, range);
    //drawReferrerGraph(data, range);
    return false;
}

function drawClickGraph(data, range){
    $("#clickPanel").show();
    var spinner = new Spinner(opts).spin(clickLoader);
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/urls/"+currentUrlId+"/analytics/clicks/"+range,
        success: function(msg) {
            data = JSON.parse(msg);
            xValues = Object.keys(data);
            clickGraph.options.data[0].dataPoints = [];
            clickGraph.options.data[1].dataPoints = [];
            clickGraph.options.data[2].dataPoints = [];
            for (xValue of xValues) {
                types = Object.keys(data[xValue]);
                clickGraph.options.data[0].dataPoints.push({label: xValue, y : data[xValue]['total']});
                clickGraph.options.data[1].dataPoints.push({label: xValue, y : data[xValue]['user']});
                clickGraph.options.data[2].dataPoints.push({label: xValue, y : data[xValue]['session']});
            }
            spinner.stop();
            clickGraph.render();
            return;
        },
        error: function(err){
            console.log(JSON.stringify(err));
            spinner.stop();
        }
    });

}

function drawPlatformGraph(data, range){
    $("#platformPanel").show();
    var spinner = new Spinner(opts).spin(platformLoader);
    platformGraph.options.data[0].dataPoints = [];
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/urls/"+currentUrlId+"/analytics/platform/"+range,
        success: function(msg) {
            data = JSON.parse(msg);
            for (pf of data) {
                platformGraph.options.data[0].dataPoints.push({label: pf['platform'], y : pf['count']});
            }
            spinner.stop();
            platformGraph.render();
            return;
        },
        error: function(err){
            console.log(JSON.stringify(err));
            spinner.stop();
        }
    });

}


function changeClicksAnalytics(range){
    drawClickGraph(currentUrlId, range);
    return;
}
