/**
*
*/

var aaData = [];
var from = 1;
var to = 10;
var categoryIn = $("#categoryIn");
var categoryOut = $("#categoryOut");
var currentCategory = '';

var table = $("#dataTable").dataTable({
	"order": [[ 3, 'desc' ]],
	"bJQueryUI": true,
	"bAutoWidth": false ,
	"iDisplayLength": 5,
	"aoColumns": [{
		"sTitle": "No.",
		"sWidth": "1%"
	}, {
		"sTitle": "Long",
		"sWidth": "10%"
	}, {
		"sTitle": "Short",
		"sWidth": "10%"
	}, {
		"sTitle": "Created",
		"sWidth": "10%"
	}, {
		"sTitle": "Delete",
		"sWidth": "1%"
	}, {
		"sTitle": "Clicks",
		"sWidth": "1%"
	}]
});

function getUrls(){
	if(currentCategory){
		$.get("http://brainboxapp.com:8000/urls/category/"+currentCategory, function(res, status){
			var data = JSON.parse(res);
			setData(data);
		});
	}else{
		$.get("http://brainboxapp.com:8000/urls", function(res, status){
			var data = JSON.parse(res);
			setData(data.data);
		});
	}
}

function setData(data){
	aaData = [];
	table.fnClearTable();
	for (i in data) {
		aaData.push([data[i].id,
			"<a target='_blank' href="+data[i].long_url+">"+data[i].long_url.substr(0,20)+"</a>",
			"<a target='_blank' href="+data[i].short_url+">"+data[i].short_url+"</a>",
			data[i].created_at,
			"<button type='button' id="+data[i].id+" onclick='return deleteUrl("+data[i].id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
			"<button type='button' id="+data[i].id+" onclick='return getAnalytics("+data[i].id+")' class='btn delete btn-success'>"+ data[i].clicks +"</button>"
		]);
	}
	table.fnAddData(aaData);
};

function postUrl(){
	var long_url = $('#short_url_form').find('input[name="longUrl"]').val();
	var category = $('#short_url_form').find('input[name="category"]').val();
	var customKey = $('#short_url_form').find('input[name="customKey"]').val();
	$.ajax({
		type: "POST",
		url: "http://brainboxapp.com:8000/urls",
		data: {long_url: long_url, category: category, customKey: customKey},
		success: function(msg) {
			addData(msg);
			appendCategory(category);
		},
		error: function(err){
			console.log((JSON.stringify(err)));
		}
	});
	return false;
};

function addData(data){

	if(data){
		data = JSON.parse(data);
		var res = [
			data.id,
			"<a target='_blank' href="+data.long_url+">"+data.long_url.substr(0,20)+"</a>",
			"<a target='_blank' href="+data.short_url+">"+data.short_url+"</a>",
			data.created_at,
			"<button type='button' id="+data.id+" onclick='return deleteUrl("+data.id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
			"<button type='button' id="+data.id+" onclick='return getAnalytics("+data.id+")' class='btn delete btn-success'>"+ data.clicks +"</button>"
		];
		table.fnAddData(res);
	}
	else{
		alert('No data found');
	}
};

function deleteUrl(id){
	$.ajax({
		type: "GET",
		url: "http://brainboxapp.com:8000/urls/"+id+"/delete",
		success: function(msg) {
			removeData(msg);
		},
		error: function(err){
			alert(err);
		}
	});
	return false;
};

function removeData(data){
	if(data){
		var nRow = $('#'+data).closest('tr');
		table.fnDeleteRow(nRow);
	}
	else{
		alert('No data found');
	}
};

function categoryInClick(a){
	$("#categoryInput").val(a);
	return;
};

function categoryOutClick(a){
	$('#showDeleted').attr('checked', false); // Unchecks it
	if(a){
		currentCategory = a;
		$("#categoryOutName").html('Category: '+ a + ' <span class="caret"></span>');
	}else{
		currentCategory = '';
		$("#categoryOutName").html('Category: Default <span class="caret"></span>');
	}
	getUrls();
};

$('#showDeleted').change(function() {
        if($(this).is(":checked")) {
			$.get("http://brainboxapp.com:8000/urls/deleted", function(res, status){
				var data = JSON.parse(res);
				setData(data);
			});
        }else{
			getUrls();
		}
    });


function appendCategory(category){
	if(category){
		categoryIn.append('<li><a onClick="categoryInClick(\''+category+'\')" href="#"><span class="tab">'+category+'</span></a></li>');
		categoryOut.append('<li><a onClick="categoryOutClick(\''+category+'\')" href="#"><span class="tab">'+category+'</span></a></li>');
	}else{
		categoryOut.append('<li><a onClick="categoryOutClick(\''+category+'\')" href="#"><span class="tab">Undefined</span></a></li>');
	}
};
function setCategory(){
	$.get("http://brainboxapp.com:8000/urls/categories", function(res, status){
		var data = JSON.parse(res);
		for(i in data){
			appendCategory(data[i]['category']);
		}
	});
};
function ready(){
	$("#analyticsPanel").hide();
	setCategory();
	getUrls();
};
ready();
