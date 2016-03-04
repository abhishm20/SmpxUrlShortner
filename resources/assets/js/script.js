/**
*
*/
var totalRows = 0;		// total number of rows, get set for the first when page loads
var pageRange = 10;		// number of rows per page [CONSTANT], i.e, number of rows per page
var totalPages = 0;		// total number of pages, get set for the first when page loads
var currentPage = 1;	// current Page default 1, start from 1
var urlsData = {};		// 2d array of url data with per page
var currentExpansionCounter = 1;		//currently expansion page counter
var currentRow = 0;		//current row tell the last row of existing data
var prevPage = 0;		//prev page for disabling active pagecounter
var urlTable = $("#urlTable");		//table element
var mid = '';		// page counter middle buttons
var currentRowFrom = 0;
var currentRowTo = 0;

var lastPageCounter = 1;
var isFirstBlockPageCounter = 1;
var isLastBlockPageCOunter = 0;
var lastExpansionCounter = 0;
var prevExpansionCounter = 0;


var rowIndex = 0;

var pageNumbers = 0	;
var currentFrom = 0;
var currentTo = 10;
var categoryIn = $("#categoryIn");
var categoryOut = $("#categoryOut");
var currentCategory = 'all';
urlsData[currentCategory] = [];


function bootstrap(){
	$.get("urls/count", function(res, status){
		urlsData[currentCategory].totalRows = res;
		urlsData[currentCategory].totalPages = Math.ceil(res / pageRange);
		$.get("urls/categories/count", function(res, status){
			var data = JSON.parse(res);
			for(i in data){
				urlsData[data[i]['category']] = {};
				urlsData[data[i]['category']].totalRows = data[i]['count'];
				urlsData[data[i]['category']].totalPages = Math.ceil(data[i]['count'] / pageRange);
			}
			getUrls();
		});
		generatePageCounter();
	});
}

function generatePageCounter(side){
	var pageCounter = 0;
	var expansionCounter = 1;
	alert(urlsData[currentCategory].totalPages);
	for(var i = 1; i<= urlsData[currentCategory].totalPages; i++ ){
		pageCounter++;
		if(i % 3 ==1){
			mid = mid + "<span style='display:none;' class=' btn-group' id='expansion"+(expansionCounter++)+"' >";
		}
		mid = mid + " <button type='button' id='pageCounterButton"+pageCounter+"' onclick='gotoPage("+pageCounter+")' class='btn btn-sm btn-default'>"+ (pageCounter) +"</button> ";
		if(i % 3 == 0){
			mid = mid + "</span>";
		}
	}
	lastExpansionCounter = expansionCounter - 1;
	$("#pageCounter").html(mid);
}



function fixVar(){

	currentRowFrom = (pageRange * (currentPage-1))+1;
	currentRowTo = currentRowFrom + urlsData[currentCategory].pages[currentPage-1].length - 1;
	urlsData[currentCategory].pages[currentPage-1].to = currentRowTo;
	urlsData[currentCategory].pages[currentPage-1].from = currentRowFrom;
	renumberRows();
	if(prevPage > 0){
		$("#pageCounterButton"+prevPage).removeClass("active");
	}

	if(currentPage == urlsData[currentCategory].totalPages){
		$("#nextButton").prop('disabled', true);
	}else if(currentPage < urlsData[currentCategory].totalPages){
		$("#nextButton").prop('disabled', false);
	}

	if(currentPage == 1){
		$("#prevButton").prop('disabled', true);
	}else if(currentPage > 1){
		$("#prevButton").prop('disabled', false);
	}
	//alert("current"+prevExpansionCounter+currentExpansionCounter);

	$("#expansion"+currentExpansionCounter).show();
	if( currentExpansionCounter != prevExpansionCounter){
		$("#expansion"+prevExpansionCounter).hide();
	}

	if(currentExpansionCounter == 1){
		$("#backPageCounter").hide();
	}else{
		$("#backPageCounter").show();
	}
	if(currentExpansionCounter == lastExpansionCounter){
		$("#forePageCounter").hide();
	}else{
		$("#forePageCounter").show();
	}
	$("#pageCounterButton"+currentPage).addClass("active");
	$("#pageNumber").html(currentPage+"th of "+urlsData[currentCategory].totalPages);
	//alert("current page : "+currentPage);
	$("#pageLabel").html(currentRowFrom+"-"+currentRowTo+" of "+urlsData[currentCategory].totalRows);
}

function getUrls(){
	if(urlsData[currentCategory][currentPage-1]){
		setData(urlsData[currentCategory][currentPage-1].data);
		fixVar();
	}else{
		if(currentCategory != 'all'){
			$.get("urls/category/"+currentCategory+"/from/"+currentFrom+"/to/"+currentTo, function(res, status){
				var result = JSON.parse(res);
				urlsData[currentCategory].pages = [];
				urlsData[currentCategory].pages[currentPage-1] = result;
				setData(urlsData[currentCategory].pages[currentPage-1]);
				fixVar();
			});
		}else{
			$.get("urls/from/"+currentFrom+"/to/"+currentTo, function(res, status){
				var result = JSON.parse(res);
				urlsData[currentCategory].pages = [];
				urlsData[currentCategory].pages[currentPage-1] = result.data;
				setData(urlsData[currentCategory].pages[currentPage-1]);
				fixVar();
			});
		}

	}
}

function renumberRows() {
	$('#defaultData tr').each(function(index, el){
		$(this).children('th').first().text(function(i,t){
			return urlsData[currentCategory].pages[currentPage-1].from + index;
		});
	});
}

function setData(data){
	var row = '';
	for (i in data) {
		row = row + "<tr id='"+data[i].id+"'><th scope='row'>"+(++rowIndex)+"</th>"+
		"<td><a target='_blank' href="+data[i].long_url+">"+data[i].long_url.substr(0,20)+"</a></td>"+
		"<td><a target='_blank' href="+data[i].short_url+">"+data[i].short_url+"</a></td>"+
		"<td>"+data[i].time+"</td>"+
		"<td>"+data[i].category+"</td>"+
		"<td><button type='button' id="+data[i].id+" onclick='return deleteUrl("+data[i].id+")' class='btn btn-default btn-xs'>Delete</button></td>"+
		"<td><button type='button' id="+data[i].id+" onclick='return getAnalytics("+data[i].id+")' class='btn btn-default btn-xs'>"+ data[i].clicks +" (analyse) </button></td></tr>";
	}
	$('#defaultData').html(row);
}
function gotoNextPage(){
	prevPage = currentPage;
	currentPage ++;
	prevExpansionCounter = currentExpansionCounter;
	currentExpansionCounter = Math.ceil(currentPage / 3);
	currentFrom = currentRowTo;
	currentTo = pageRange;
	getUrls();
}
function gotoPrevPage(){
	prevPage = currentPage;
	currentPage --;
	prevExpansionCounter = currentExpansionCounter;
	currentExpansionCounter = Math.ceil(currentPage / 3);
	getUrls();
}
function gotoPage(pageNo){
	prevPage = currentPage;
	currentPage = pageNo;
	prevExpansionCounter = currentExpansionCounter;
	currentExpansionCounter = Math.ceil(currentPage / 3);
	currentFrom = (pageRange * (currentPage - 1));
	currentTo = pageRange;
	getUrls();
}

function expandPageCounter(data){
	prevExpansionCounter = currentExpansionCounter;
	if(data){
		currentExpansionCounter ++;
	}else{
		currentExpansionCounter --;
	}
	prevPage = currentPage;
	currentPage = (currentExpansionCounter-1) * 3 + 1;
	currentFrom = (currentPage - 1) * (pageRange);
	currentTo = pageRange;
	console.log(currentFrom+" "+currentTo);
	getUrls();
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
		row = "<tr id='"+data.id+"'><th scope='row'>"+(++rowIndex)+"</th>"+
		"<td><a target='_blank' href="+data.long_url+">"+data.long_url.substr(0,20)+"</a></td>"+
		"<td><a target='_blank' href="+data.short_url+">"+data.short_url+"</a></td>"+
		"<td>"+data.time+"</td>"+
		"<td>"+data.category+"</td>"+
		"<td><button type='button' id="+data.id+" onclick='return deleteUrl("+data.id+")' class='btn btn-default btn-xs'>Delete</button></td>"+
		"<td><button type='button' id="+data.id+" onclick='return getAnalytics("+data.id+")' class='btn btn-default btn-xs'>"+ data.clicks +" (analyse) </button></td></tr>";
		$('#defaultData').prepend(row);
	}
	else{
		alert('No data found');
	}
};

function deleteUrl(id){
	// totalRows--;
	// currentRowFrom
	// totalPages = Math.ceil(totalRows / pageRange);
	// fixVar();
	$.ajax({
		type: "GET",
		url: "urls/"+id+"/delete",
		success: function(data) {
			if(data){
				$('table#urlTable tr#'+id).remove();
				location.reload();
			}
			else{
				alert('No data found');
			}
		},
		error: function(err){
			alert(err);
		}
	});
	return false;
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
		currentCategory = 'default';
		$("#categoryOutName").html('Category: Default <span class="caret"></span>');
	}
	currentFrom = 0;
	currentTo = pageRange;
	generatePageCounter();
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
function setCategory(){
	$.get("urls/categories", function(res, status){
		var data = JSON.parse(res);
		for(i in data){
			appendCategory(data[i]['category']);
		}
	});
};

function appendCategory(category){
	if(category != 'no_category'){
		categoryIn.append('<li><a onClick="categoryInClick(\''+category+'\')" href="#"><span class="tab">'+category+'</span></a></li>');
		categoryOut.append('<li><a onClick="categoryOutClick(\''+category+'\')" href="#"><span class="tab">'+category+'</span></a></li>');
	}else{
		categoryOut.append('<li><a onClick="categoryOutClick(\''+category+'\')" href="#"><span class="tab">No Category</span></a></li>');
	}
};

function ready(){
	$("#analyticsPanel").hide();
	bootstrap();
	setCategory();		//it will get all category and put it into in and out category

};
ready();
