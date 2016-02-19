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
		             "<a target='_blank' href="+data[i].long_url+">"+data[i].long_url+"</a>",
		             "<a target='_blank' href="+data[i].short_url+">"+data[i].short_url+"</a>",
		             data[i].created_at,
		             "<button type='button' onclick='return deleteUrl("+data[i].id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
		             data[i].clicks]);
	}
	table.fnAddData(aaData);
}

function postUrl(){
	var long_url = $('#short_url_form').find('input[name="longUrl"]').val();
	$.ajax({
		type: "POST",
		url: "http://localhost:8000/urls",
		data: {long_url: long_url},
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
					"<a target='_blank' href="+data.long_url+">"+data.long_url+"</a>",
					"<a target='_blank' href="+data.short_url+">"+data.short_url+"</a>",
					data.created_at,
					"<button type='button' onclick='return deleteUrl("+data[i].id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
					data.clicks
			];
		table.fnAddData(res);
	}
	else{
		alert('No data found');
	}
}

function deleteUrl(id){
	alert(id);
}

function ready(){
	$.get("http://localhost:8000/urls", function(res, status){
		var data = JSON.parse(res);
		setData(data.data);
	});
}
ready();

