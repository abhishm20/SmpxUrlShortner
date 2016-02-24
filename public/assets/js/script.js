/**
 *
 */

var aaData = [];
var from = 1;
var to = 10;



var table = $("#dataTable").dataTable({
	"order": [[ 3, 'desc' ]],
	"bJQueryUI": true,
	"bAutoWidth": false ,
	"aoColumns": [{
		"sTitle": "No.",
		"sWidth": "10px"
	}, {
		"sTitle": "Long",
		"sWidth": "10px"
	}, {
		"sTitle": "Short",
		"sWidth": "2px"
	}, {
		"sTitle": "Created",
		"sWidth": "2px"
	}, {
		"sTitle": "Delete",
		"sWidth": "1px"
	}, {
		"sTitle": "Clicks",
		"sWidth": "10px"
	}]
});
function setData(data){
	for (i in data) {
		aaData.push([data[i].id,
		             "<a target='_blank' href="+data[i].long_url+">"+data[i].long_url.substr(0,20)+"</a>",
		             "<a target='_blank' href="+data[i].short_url+">"+data[i].short_url+"</a>",
		             data[i].created_at,
		             "<button type='button' id="+data[i].id+" onclick='return deleteUrl("+data[i].id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
		             "<button type='button' id="+data[i].id+" onclick='return getAnalytics("+data[i].id+")' class='btn delete btn-success'>"+ data[i].clicks +"</button>"]);
	}
	table.fnAddData(aaData);
}

function postUrl(){
	var long_url = $('#short_url_form').find('input[name="longUrl"]').val();
	var cotegory = $('#short_url_form').find('input[name="cotegory"]').val();
	var customKey = $('#short_url_form').find('input[name="customKey"]').val();
	$.ajax({
		type: "POST",
		url: "http://localhost:8000/urls",
		data: {long_url: long_url, cotegory: cotegory, customKey: customKey},
		success: function(msg) {
			addData(msg);
		},
		error: function(err){
			alert(JSON.stringify(err));
		}
	});
	return false;
}

function addData(data){
	if(data){
		data = JSON.parse(data);
		var res = [
					data.id,
					"<a target='_blank' href="+data.long_url+">"+data.long_url.substr(0,20)+"</a>",
					"<a target='_blank' href="+data.short_url+">"+data.short_url+"</a>",
					data.created_at,
					"<button type='button' id="+data.id+" onclick='return deleteUrl("+data.id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
					data.clicks
			];
		table.fnAddData(res);
	}
	else{
		alert('No data found');
	}
}

function deleteUrl(id){
	$.ajax({
		type: "GET",
		url: "http://localhost:8000/urls/"+id+"/delete",
		success: function(msg) {
			removeData(msg);
		},
		error: function(err){
			alert(err);
		}
	});
	return false;
}

function removeData(data){
	if(data){
		var nRow = $('#'+data).closest('tr');
		table.fnDeleteRow( nRow);
	}
	else{
		alert('No data found');
	}
}
function ready(){
	$("#analyticsPanel").hide();
	$.get("http://localhost:8000/urls", function(res, status){
		var data = JSON.parse(res);
		setData(data.data);
	});
}
ready();
