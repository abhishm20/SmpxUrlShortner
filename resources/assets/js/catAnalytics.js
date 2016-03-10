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
        console.log(JSON.stringify(vm.$get('countryData')));
        label[0].innerHTML = label[0].innerHTML + " - " + (vm.$get('countryData')[code] ? vm.$get('countryData')[code]: 0);
    }
};

var clickGraph = new CanvasJS.Chart("clickGraph",{
    theme:"theme1",
    title:{
        text: "Click Analysis",
        fontSize: 20
    },
    animationEnabled: true,
    zoomEnabled: true,
    zoomType: "xy",
    exportEnabled: true,
    exportFileName: "Click Graph",
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
var cityGraph = new CanvasJS.Chart("cityGraph", {
    title:{
        text:"City Graph",
        fontSize: 20
    },
    animationEnabled: true,
    zoomEnabled: true,
    exportEnabled: true,
    exportFileName: "OS Graph",
    axisX:{
        interval: 1,
        gridThickness: 0,
        labelFontSize: 10,
        labelFontStyle: "normal",
        labelFontWeight: "normal",
        labelFontFamily: "Lucida Sans Unicode"

    },
    axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)"

    },
    data: [
        {
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: []
        }

    ]
});

var osGraph = new CanvasJS.Chart("osGraph", {
    title:{
        text:"OS Graph",
        fontSize: 20
    },
    animationEnabled: true,
    zoomEnabled: true,
    exportEnabled: true,
    exportFileName: "OS Graph",
    axisX:{
        interval: 1,
        gridThickness: 0,
        labelFontSize: 10,
        labelFontStyle: "normal",
        labelFontWeight: "normal",
        labelFontFamily: "Lucida Sans Unicode"

    },
    axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)"

    },
    data: [
        {
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: []
        }

    ]
});

var referrerGraph = new CanvasJS.Chart("referrerGraph", {
    title:{
        text:"Referrer Graph",
        fontSize: 20
    },
    animationEnabled: true,
    zoomEnabled: true,
    exportEnabled: true,
    exportFileName: "Referrer Graph",
    axisX:{
        interval: 1,
        gridThickness: 0,
        labelFontSize: 10,
        labelFontStyle: "normal",
        labelFontWeight: "normal",
        labelFontFamily: "Lucida Sans Unicode"

    },
    axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)"

    },
    data: [
        {
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: []
        }

    ]
});

var vm = new Vue({
    el: '#app',
    data: {
        queryCat: "",
        filterData:{
            f: '',
            t: '',
            u: 'dt'
        },
        cityData:{},
        clickData: {},
        countryData: {},
        osData: {},
        referrerData: {},
        currentUrl: {}
    },

    methods:{
        setUrl: function(){
            var url = window.location.href;
            name = 'cat';
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
            if (!results){
                this.queryCat = 'all';
                this.initiateDateRangePicker();
                return;
            }else if (!results[2]) {
                this.queryCat = 'all';
                this.initiateDateRangePicker();
                return;
            }else{
                this.queryCat = decodeURIComponent(results[2].replace(/\+/g, " "));
                this.initiateDateRangePicker();
                return;

            }


        },
        changeUnit: function(unit){
            this.filterData.u = unit;
            this.drawGraphs();
        },
        getClickAnalytics: function(){
            this.$http.get(this.queryCat+'/url/analytics/click?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
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
            }, function (res) {
                if(res.status != 200) alert(res.data.message);return;
            });
        },
        getOsAnalytics: function(){
            this.$http.get(this.queryCat+'/url/analytics/platform?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.osData = res.data.data;
                osGraph.options.data[0].dataPoints = [];
                for (pf of this.osData) {
                    osGraph.options.data[0].dataPoints.push({y : parseInt(pf['count']), label: pf['platform']});
                }
                osGraph.render();
            });
        },
        getCityAnalytics: function(){
            this.$http.get(this.queryCat+'/url/analytics/city?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.cityData = res.data.data;
                cityData.options.data[0].dataPoints = [];
                for (pf of this.cityData) {
                    cityGraph.options.data[0].dataPoints.push({y : parseInt(pf['count']), label: pf['platform']});
                }
                cityGraph.render();
            });
        },
        getReferrerAnalytics: function(){
            this.$http.get(this.queryCat+'/url/analytics/referrer?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.referrerData = res.data.data;
                referrerGraph.options.data[0].dataPoints = [];
                for (referrer of this.referrerData) {
                    referrerGraph.options.data[0].dataPoints.push({label: referrer['referrers'], y : parseInt(referrer['count'])});
                }
                referrerGraph.render();
            });
        },
        getCountryAnalytics: function(){
            this.$http.get(this.queryCat+'/url/analytics/country?u='+this.filterData.u+'&f='+this.filterData.f+'&t='+this.filterData.t).then(function(res){
                this.countryData = res.data.data;

                countryGraph.values = this.countryData;
                $('#countryGraph').vectorMap(countryGraph);
            });
        },
        drawGraphs: function(){
            this.getClickAnalytics();
            this.getOsAnalytics();
            this.getReferrerAnalytics();
            this.getCountryAnalytics();
            this.getCityAnalytics();
        },
        initiateDateRangePicker: function(){
            var self = this;
            function cb(start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                self.filterData.f = start.format('YYYY-MM-DD HH:mm:ss');
                self.filterData.t = end.format('YYYY-MM-DD HH:mm:ss');
                console.log('from: '+self.filterData.f);
                console.log('to: '+self.filterData.t);
                self.drawGraphs();
            }
            cb(moment().startOf('month'), moment().endOf('month'));

            $('#reportrange').daterangepicker({
                timePicker: true,
                timePickerIncrement: 10,
                locale: {
                    format: 'MM/DD/YYYY HH:mm A'
                },
                ranges: {
                    'Today': [moment().startOf('day'), moment().endOf('day')],
                    'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
                    'Last 7 Days': [moment().subtract(6, 'days').startOf('day'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days').startOf('day'), moment()],
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
