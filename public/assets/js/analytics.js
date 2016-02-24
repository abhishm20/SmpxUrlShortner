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
var platformGraph = new CanvasJS.Chart("platformGraph",{
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
			indexLabel: "{label}: {y}",
			dataPoints: [
			]
		}
		]
	});

    function cb(start, end) {
    		$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    		currentRangeFrom = start.format('YYYY-MM-DD hh:mm:ss');
    		currentRangeTo = end.format('YYYY-MM-DD hh:mm:ss');
            getAnalytics(currentUrlId);

    	}
    	cb(moment().startOf('month'), moment().endOf('month'));

    	$('#reportrange').daterangepicker({
    		timePicker: true,
    	   timePickerIncrement: 10,
    	   locale: {
    		   format: 'MM/DD/YYYY h:mm A'
    	   },
    		ranges: {
    		   'Today': [moment().subtract(1, 'days'), moment().endOf('day')],
    		   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    		   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    		   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    		   'This Month': [moment().startOf('month'), moment().endOf('month')],
    		   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    		}
    	}, cb);

//loader options
var opts = {
    speed: 1.5 // Rounds per second
}
var clickLoader = document.getElementById('clickPanel');
var referrerLoader = document.getElementById('referrerPanel');
var platformLoader = document.getElementById('platformPanel');

var currentUrlId;
var currentUnit;
var currentRangeFrom;
var currentRangeTo;

function getAnalytics(data){
    currentUrlId = data;
    $("#analyticsPanel").show();
    drawClickGraph();
    drawPlatformGraph();
    //drawReferrerGraph(data, range);
    return false;
}

function drawClickGraph(){
    var spinner = new Spinner(opts).spin(clickLoader);
    $.ajax({
        type: "GET",
        url: "http://brainboxapp.com:8000/urls/"+currentUrlId+"/analytics/clicks/"+currentRangeFrom+"/"+currentRangeTo+"/"+currentUnit,
        success: function(msg) {
            data = JSON.parse(msg);
            xValues = Object.keys(data);
            clickGraph.options.data[0].dataPoints = [];
            clickGraph.options.data[1].dataPoints = [];
            clickGraph.options.data[2].dataPoints = [];
            $('#sessionCount').text(data['sessionCount']);
            $('#cookieCount').text(data['cookieCount']);
            $('#totalCount').text(data['totalCount']);
            data = (JSON.parse(JSON.stringify(data)));
            for (xValue of xValues) {
                types = Object.keys(data[xValue]);
                if(xValue == 'sessionCount' || xValue == 'cookieCount' || xValue == 'totalCount') continue;
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

function drawPlatformGraph(){
    var spinner = new Spinner(opts).spin(platformLoader);
    platformGraph.options.data[0].dataPoints = [];
    $.ajax({
        type: "GET",
        url: "http://brainboxapp.com:8000/urls/"+currentUrlId+"/analytics/platform/"+currentRangeFrom+"/"+currentRangeTo+"/"+currentUnit,
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


function changeUnit(unit){
    currentUnit = unit;
    getAnalytics(currentUrlId);
    return;
}
