// var Constants = {
//   defaultUrl:'urls/10'
// }
// var sample_data = {"af":"16.63","in":"12"};
// var countryGraph = {
//     map: 'world_en',
//     backgroundColor: '#fff',
//     color: '#d6d6d6',
//     hoverOpacity: 0.7,
//     selectedColor: '#d6d6d6',
//     enableZoom: true,
//     showTooltip: true,
//     scaleColors: ['#C8EEFF', '#006491'],
//     values: sample_data,
//     normalizeFunction: 'polynomial',
//     onLabelShow: function(event, label, code) {
//                         label[0].innerHTML = label[0].innerHTML + " - The state where I live!!";
//                 }
// };
//
// var clickGraph = new CanvasJS.Chart("clickGraph",{
//     theme:"theme2",
//     title:{
//         text: "Click Analysis"
//     },
//     animationEnabled: true,
//
//     toolTip: {
//         shared: "true"
//     },
//     data: [
//         {
//             type: "spline",
//             showInLegend: true,
//             name: "Total",
//             dataPoints: []
//         },
//         {
//             type: "spline",
//             showInLegend: true,
//             // markerSize: 0,
//             name: "User",
//             dataPoints: []
//         },
//         {
//             type: "spline",
//             showInLegend: true,
//             // markerSize: 0,
//             name: "Session",
//             dataPoints: []
//         }
//
//
//     ],
//     legend:{
//         cursor:"pointer",
//         itemclick : function(e) {
//             if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
//                 e.dataSeries.visible = false;
//             }
//             else {
//                 e.dataSeries.visible = true;
//             }
//             chart.render();
//         }
//
//     }
// });
// var platformGraph = new CanvasJS.Chart("platformGraph",{
//     title:{
//         text: "Platform Analysis",
//         verticalAlign: 'top',
//         horizontalAlign: 'left'
//     },
//     animationEnabled: true,
//     data: [
//         {
//             type: "doughnut",
//             startAngle:20,
//             toolTipContent: "{label}: {y} - <strong>#percent%</strong>",
//             indexLabel: "{label}: {y}",
//             dataPoints: [
//             ]
//         }
//     ]
// });
//
// var referrerGraph = new CanvasJS.Chart("referrerGraph",{
//     title:{
//         text: "Referrer Analysis",
//         verticalAlign: 'top',
//         horizontalAlign: 'left'
//     },
//     animationEnabled: true,
//     data: [
//         {
//             type: "doughnut",
//             startAngle:20,
//             toolTipContent: "{label}: {y} - <strong>#percent%</strong>",
//             indexLabel: "{label}: {y}",
//             dataPoints: [
//             ]
//         }
//     ]
// });
//
//
// new Vue({
//     el: '#app',
//     data: {
//         formData: {
//             long_url: "",
//             custom_key: "",
//             category: ""
//         },
//         categories: [],
//         urls: [],
//         urlData: {},
//         urlFilterData: {
//             category: "",
//             search: "",
//             desc: "",
//             asc: "",
//             sort: "",
//             sortName: "Time Increasing",
//             del: false // It take the previous value of checkbox, so inverse this for taking real effect
//         }
//     },
//
//     methods:{
//         analyse: function(id){
//             window.open(
//                 "/analytics?id="+id,
//                 '_blank' // <- This is what makes it open in a new window.
//             );
//         },
//         deleteUrl: function(id){
//             this.$http.get('/url/'+id+'/delete').then(function(res){
//                 window.location.href="/";
//             });
//         },
//         showDeleted: function(){
//             this.urlFilterData.del = !this.urlFilterData.del;
//             this.getUrls();
//         },
//         setUrlSorting: function(sort, type, name){
//             if(type == 'desc'){
//                 this.urlFilterData.desc = 1;
//                 this.urlFilterData.asc = 0;
//             }else if(type == 'asc'){
//                 this.urlFilterData.asc = 1;
//                 this.urlFilterData.desc = 0;
//             }
//             this.urlFilterData.sort = sort;
//             this.urlFilterData.sortName = name;
//             //console.log(JSON.stringify(this.urlFilterData));
//
//             this.getUrls();
//         },
//         createUrl: function(e){
//             console.log(JSON.stringify(this.formData));
//             this.$http.post('url', this.formData).then(function(data){
//                     console.log(data.data.data);
//             });
//             window.location.href="/";
//             return false;
//         },
//         searchUrl: function(){
//             this.getUrls();
//         },
//         setFormCategory: function(category){
//             this.formData.category = category;
//         },
//         setUrlFilterCategory: function(category){
//             this.urlFilterData.category = category;
//             this.getUrls();
//         },
//         getCategoryList: function(){
//             this.$http.get('/urls/categories').then(function(res){
//                 this.categories = (res.data.data);
//             });
//         },
//         getUrls: function(urlLink = Constants.defaultUrl){
//             var query = [];
//             var a = '';
//             if(urlLink.indexOf('?') >= 0){
//                 a = '&';
//             }else{
//                 a = '?';
//             }
//             if(this.urlFilterData.category){
//                 query.push('category='+this.urlFilterData.category);
//             }
//             if(this.urlFilterData.search){
//                 query.push('search='+this.urlFilterData.search);
//             }
//             if(this.urlFilterData.sort){
//                 query.push('sort='+this.urlFilterData.sort);
//             }
//             if(this.urlFilterData.desc){
//                 query.push('desc=1');
//             }
//             if(this.urlFilterData.asc){
//                 query.push('asc=1');
//             }
//             if(this.urlFilterData.del){
//                 query.push('del=1');
//             }
//             query = a+query.join('&');
//             this.$http.get(urlLink+query).then(function(res){
//                 this.urls = res.data.data.data;
//                 delete(res.data.data["data"]);
//                 this.urlData = res.data.data;
//             });
//         },
//         nextPage: function(){
//             this.getUrls(this.urlData.next_page_url);
//         },
//         prevPage: function(){
//             this.getUrls(this.urlData.prev_page_url);
//         }
//     },
//     created: function(){
//         $('#countryGraph').vectorMap(countryGraph);
//         clickGraph.render();
//         platformGraph.render();
//         referrerGraph.render();
//     }
//
// })
