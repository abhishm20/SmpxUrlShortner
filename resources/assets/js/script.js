/**
*
*/
var totalRows = 0;		// total number of rows, get set for the first when page loads
var mid = '';		// page counter middle numbers
var pageRange = 10;		// number of rows per page [CONSTANT]
var totalPages = 0;		// total number of pages, get set for the first when page loads
var currentPage = 0;	// current Page default 0
var urlsData = [];
var currentRow = 0;		//current row tell the last row of existing data

var urlTable = $("#urlTable");
var rowIndex = 0



var pageNumbers = 0	;
var currentRow = 0;
var currentFrom = 1;
var currentTo = 10;
var categoryIn = $("#categoryIn");
var categoryOut = $("#categoryOut");
var currentCategory = '';

function countUrls(){
	// $.get("urls/count", function(res, status){
	// 	totalRows = res;
	// 	totalPages = parseInt(totalRows / pageRange) + 1; // add 1 to get right number of pages , start from 1
	// });
	totalRows = 15;
	totalPages = parseInt(totalRows / pageRange) + 1;
}

function generatePageCounter(){
	var pageCount = 0;
	var prev = '<button type="button" onclick="return prevPage()" class="btn btn-sm btn-default">Prev</button>'
	var next = '<button type="button" onclick="return nextPage()" class="btn btn-sm btn-default">Next</button>'
	for(var i = 1; i<= totalPages; i++ ){
		pageCount++;
		mid = mid.replace("active", "") + " <button type='button' id='pageCounterButton"+pageCount+"' onclick='gotoPage("+pageCount+")' class='btn btn-sm btn-default'>"+ (pageCount) +"</button> ";
	}
	var final = prev+mid+next;
	$("#pageCounter").html(final);
}

function fixVar(){

	currentRow = currentRow + urlsData[currentPage].count;alert(currentRow);
	currentPage = Math.ceil(currentRow  / pageRange);
	$("#pageCounterButton"+currentPage).addClass("active");
	alert(currentPage);
}

function getUrls(){
	if(currentCategory){
		$.get("urls/category/"+currentCategory, function(res, status){
			var data = JSON.parse(res);
			setData(data);
		});
	}else{
		$.get("urls/from/"+currentFrom+"/to/"+currentTo, function(res, status){
			var data = JSON.parse(res);
			urlsData.push(data);
			setData(data.data);
			fixVar();
		});
	}
}

function nextPage(){
	currentFrom = currentRow + 1;
	currentTo = currentFrom + pageRange - 1;
	getUrls();
}
function prevPage(){
	currentFrom = currentRow + 1;
	currentTo = currentFrom + pageRange - 1;
	getUrls();
}
function gotoPage(pageNo){
	setData(urlsData[pageNo]);
}

function setData(data){
	$('#urlTable > tbody').empty();
	for (i in data) {
		var row = "<tr><th scope='row'>"+(++rowIndex)+"</th>"+
		"<td><a target='_blank' href="+data[i].long_url+">"+data[i].long_url.substr(0,20)+"</a></td>"+
		"<td><a target='_blank' href="+data[i].short_url+">"+data[i].short_url+"</a></td>"+
		"<td>"+data[i].time+"</td>"+
		"<td><button type='button' id="+data[i].id+" onclick='return deleteUrl("+data[i].id+")' class='btn btn-default btn-xs'>Delete</button></td>"+
		"<td><button type='button' id="+data[i].id+" onclick='return getAnalytics("+data[i].id+")' class='btn btn-default btn-xs'>"+ data[i].clicks +" (analyse) </button></td></tr>";
		$('#urlTable > tbody').append(row);
	}


};

function postUrl(){
	var long_url = $('#short_url_form').find('input[name="longUrl"]').val();
	var category = $('#short_url_form').find('input[name="category"]').val();
	var customKey = $('#short_url_form').find('input[name="customKey"]').val();
	$.ajax({
		type: "POST",
		url: "urls",
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
		url: "urls/"+id+"/delete",
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
		$.get("urls/deleted", function(res, status){
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
	$.get("urls/categories", function(res, status){
		var data = JSON.parse(res);
		for(i in data){
			appendCategory(data[i]['category']);
		}
	});
};
function ready(){
	$("#analyticsPanel").hide();
	countUrls();
	generatePageCounter();
	setCategory();
	getUrls();
};
ready();
