var Constants = {
    defaultUrl:'urls/10'
}


var sample_data = {"af":"16.63","in":"12"};
var countryGraph = {
    map: 'world_en',
    backgroundColor: '#fff',
    color: '#d6d6d6',
    hoverOpacity: 0.7,
    selectedColor: '#d6d6d6',
    enableZoom: true,
    showTooltip: true,
    scaleColors: ['#C8EEFF', '#006491'],
    values: sample_data,
    normalizeFunction: 'polynomial',
    onLabelShow: function(event, label, code) {
        label[0].innerHTML = label[0].innerHTML + " - The state where I live!!";
    }
};

var clickGraph = new CanvasJS.Chart("clickGraph",{
    theme:"theme2",
    title:{
        text: "Click Analysis",
        fontSize: 20
    },
    animationEnabled: true,
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
        horizontalAlign: 'left',
        fontSize: 20
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

var referrerGraph = new CanvasJS.Chart("referrerGraph",{
    title:{
        text: "Referrer Analysis",
        verticalAlign: 'top',
        horizontalAlign: 'left',
        fontSize: 20
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


new Vue({
    el: '#app',
    data: {
        queryId: "",
        filterData:{
            f: '',
            t: '',
            u: 'dt'
        },
        clickData: {},
        countryData: {},
        platformData: {},
        referrerData: {},
        currentUrl: {}
    },

    methods:{
        setUrl: function(){
            var url = window.location.href;
            name = 'id';
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            this.queryId = decodeURIComponent(results[2].replace(/\+/g, " "));
            this.$http.get('url/'+this.queryId).then(function(res){
                this.currentUrl = res.data.data;
                this.initiateDateRangePicker();
            });
        },
        changeUnit: function(unit){
            this.filterData.u = unit;
            this.drawGraphs();
        },
        getClickAnalytics: function(){
            this.$http.get('url/'+this.queryId+'/analytics/click?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.clickData = res.data.data;
                xValues = Object.keys(this.clickData);
                clickGraph.options.data[0].dataPoints = [];
                clickGraph.options.data[1].dataPoints = [];
                clickGraph.options.data[2].dataPoints = [];
                for (xValue of xValues) {
                    types = Object.keys(this.clickData[xValue]);
                    if(xValue == 'sessionCount' || xValue == 'cookieCount' || xValue == 'totalCount') continue;
                    clickGraph.options.data[0].dataPoints.push({label: xValue, y : this.clickData[xValue]['total']});
                    clickGraph.options.data[1].dataPoints.push({label: xValue, y : this.clickData[xValue]['user']});
                    clickGraph.options.data[2].dataPoints.push({label: xValue, y : this.clickData[xValue]['session']});
                }
                clickGraph.render();
            });
        },
        getPlatformAnalytics: function(){
            this.$http.get('url/'+this.queryId+'/analytics/platform?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.platformData = res.data.data;
                platformGraph.options.data[0].dataPoints = [];
                for (pf of this.platformData) {
                    platformGraph.options.data[0].dataPoints.push({y : pf['count'], label: pf['platform']});
                }
                platformGraph.render();
            });
        },
        getReferrerAnalytics: function(){
            this.$http.get('url/'+this.queryId+'/analytics/referrer?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.referrerData = res.data.data;
                referrerGraph.options.data[0].dataPoints = [];
                for (referrer of this.referrerData) {
                    referrerGraph.options.data[0].dataPoints.push({label: referrer['referrers'], y : referrer['count']});
                }
                referrerGraph.render();
            });
        },
        getCountryAnalytics: function(){
            this.$http.get('url/'+this.queryId+'/analytics/country?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.countryData = res.data.data;
                
                countryGraph.values = this.countryData;
                $('#countryGraph').vectorMap(countryGraph);
            });
        },
        drawGraphs: function(){
            this.getClickAnalytics();
            this.getPlatformAnalytics();
            this.getReferrerAnalytics();
            this.getCountryAnalytics();
        },
        initiateDateRangePicker: function(){
            var self = this;
            function cb(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                self.filterData.f = start.format('YYYY-MM-DD hh:mm:ss');
                self.filterData.t = end.format('YYYY-MM-DD hh:mm:ss');
                console.log('time: '+self.filterData.f);
                self.drawGraphs();
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
        }
    },
    created: function(){
        this.setUrl();  //also calls the draw graph
    }

});
