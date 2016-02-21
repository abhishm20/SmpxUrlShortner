//clicks graph options
var clicksOption = {
    title: {
			text: "Spline Chart using jQuery Plugin"
		},
                animationEnabled: true,
		data: [
		{
			type: "spline", //for user
			dataPoints: []
		},
          {
			type: "spline", //for session
			dataPoints: []
		},
        {
			type: "spline", //for total
			dataPoints: []
		},
		]
};

//loader options
var opts = {
  lines: 13 // The number of lines to draw
, length: 19 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1.5 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('loader');

function getAnalytics(data, range){
    var spinner = new Spinner(opts).spin(target);
    var resData = [];
    $.ajax({
		type: "GET",
		url: "http://localhost:8000/urls/"+data+"/analytics/clicks/year",
		success: function(msg) {
            resData = JSON.parse(msg);
            drawClickGraph(resData);
            spinner.stop();
            return;
		},
		error: function(err){
			console.log(JSON.stringify(err));
            spinner.stop();
		}
	});
	return false;
}

function drawClickGraph(data){
    console.log(JSON.stringify(data));
    count = 0;
    for(index in data){
        var key = Object.keys(data[index])[0];
        clicksOption.data[0].dataPoints.push(
        		{ x: key, y: data[index][key] });

    }
    alert(JSON.stringify(clicksOption.data[0].dataPoints));
    $("#clicks").CanvasJSChart(clicksOption);
}
// window.onload = function () {
		// var chart = new CanvasJS.Chart("clicks",
		// {
		// 	title:{
		// 		text: "Clicks",
		// 		fontSize: 25
		// 	},
        //                 animationEnabled: true,
		// 	axisX:{
		// 		gridColor: "Silver",
		// 		tickColor: "silver",
		// 		valueFormatString: "MMM"
		// 	},
        //     toolTip:{
        //         shared:true
        //     },
		// 	theme: "theme2",
		// 	axisY: {
		// 		gridColor: "Silver",
		// 		tickColor: "silver"
		// 	},
		// 	legend:{
		// 		verticalAlign: "center",
		// 		horizontalAlign: "right"
		// 	},
		// 	data: [
		// 	{
		// 		type: "line",
		// 		showInLegend: true,
		// 		lineThickness: 2,
		// 		name: "Unique Session",
		// 		markerType: "square",
		// 		color: "#F08080",
		// 		dataPoints: [
		// 		{ x: new Date(2010,1,3), y: 650 },
		// 		{ x: new Date(2010,0,5), y: 700 },
		// 		{ x: new Date(2010,0,7), y: 710 },
		// 		{ x: new Date(2010,0,9), y: 658 },
		// 		{ x: new Date(2010,0,11), y: 734 },
		// 		{ x: new Date(2010,0,13), y: 963 },
		// 		{ x: new Date(2010,0,15), y: 847 },
		// 		{ x: new Date(2010,0,17), y: 853 },
		// 		{ x: new Date(2010,0,19), y: 869 },
		// 		{ x: new Date(2010,0,21), y: 943 },
		// 		{ x: new Date(2010,0,23), y: 970 }
		// 		]
		// 	},
		// 	{
		// 		type: "line",
		// 		showInLegend: true,
		// 		name: "Unique Clicks",
		// 		color: "#20B2AA",
		// 		lineThickness: 2,
        //
		// 		dataPoints: [
		// 		{ x: new Date(2010,0,3), y: 510 },
		// 		{ x: new Date(2010,0,5), y: 560 },
		// 		{ x: new Date(2010,0,7), y: 540 },
		// 		{ x: new Date(2010,0,9), y: 558 },
		// 		{ x: new Date(2010,0,11), y: 544 },
		// 		{ x: new Date(2010,0,13), y: 693 },
		// 		{ x: new Date(2010,0,15), y: 657 },
		// 		{ x: new Date(2010,0,17), y: 663 },
		// 		{ x: new Date(2010,0,19), y: 639 },
		// 		{ x: new Date(2010,0,21), y: 673 },
		// 		{ x: new Date(2010,0,23), y: 660 }
		// 		]
		// 	},
        //     {
		// 		type: "line",
		// 		showInLegend: true,
		// 		name: "Unique Users",
		// 		color: "#337AB7",
		// 		lineThickness: 2,
        //
		// 		dataPoints: [
		// 		{ x: new Date(2010,0,3), y: 10 },
		// 		{ x: new Date(2010,0,5), y: 60 },
		// 		{ x: new Date(2010,0,7), y: 40 },
		// 		{ x: new Date(2010,0,9), y: 58 },
		// 		{ x: new Date(2010,0,11), y:44 },
		// 		{ x: new Date(2010,0,13), y:93 },
		// 		{ x: new Date(2010,0,15), y:57 },
		// 		{ x: new Date(2010,0,17), y:63 },
		// 		{ x: new Date(2010,0,19), y:39 },
		// 		{ x: new Date(2010,0,21), y:73 },
		// 		{ x: new Date(2010,0,23), y:60 }
		// 		]
		// 	}
        //
        //
		// 	],
        //   legend:{
        //     cursor:"pointer",
        //     itemclick:function(e){
        //       if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        //       	e.dataSeries.visible = false;
        //       }
        //       else{
        //         e.dataSeries.visible = true;
        //       }
        //       chart.render();
        //     }
        //   }
		// });


// }
