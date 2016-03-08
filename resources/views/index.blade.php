<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>Smartprix Url Shortner</title>
	<meta name="generator" content="" />
	<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="{{ elixir('assets/css/everything.css')}}" rel="stylesheet">

</head>
<body>
	<div id="app" class="container container-main">
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
					<div class="panel-heading text-center main-panel-header">Smartprix Url Shortening</div>
					<div class="panel-body">
						<div>
							<form id="short_url_form" @submit.prevent="createUrl" name="short_url_form">
								<div class="form-group">
									<div class="input-group">
										<span class="input-group-addon" id="basic-addon1">Long Url</span>
										<input id="longUrl" v-model="formData.long_url" name="longUrl" type="text" class="form-control" placeholder="Long Url" aria-describedby="basic-addon1">
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-6">
										<div class="input-group">
											<div class="input-group-btn">
												<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													Category <span class="caret"></span></button>
												<ul id="categoryIn" class="dropdown-menu">
													<li><a v-on:click.prevent="setFormCategory()" href="#">Default</a></li>
													<li role="separator" class="divider"></li>
													<li v-for="category in categories">
    													<a v-on:click.prevent="setFormCategory(category.name)" href="#"><span class="tab">@{{category.name}}</span></a>
  													</li>
												</ul>
											</div>
											<input type="text" v-model="formData.category" id="categoryInput" name="category" class="form-control" aria-label="..." placeholder="Default: None">
										</div>
									</div>
									<div class="col-md-6">
										<div class="input-group">
											<span class="input-group-addon" id="basic-addon1">Custom Key</span>
											<input id="customKey" v-model="formData.custom_key" name="customKey" type="text" class="form-control" placeholder="default: None" aria-describedby="basic-addon1">
										</div>
									</div>
								</div>
								<div class="form-group text-right">
									<button id="submit" type="submit" class="btn center	btn-success  btn-default">Submit</button>
								</div>
							</form>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-3">
								<div class="dropdown">
									<button class="btn btn-sm btn-default dropdown-toggle" id="categoryOutName" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
										Category : @{{urlFilterData.category}}
										<span class="caret"></span>
									</button>
									<ul id="categoryOut" class="dropdown-menu" aria-labelledby="dropdownMenu1">
										<li><a v-on:click.prevent="setUrlFilterCategory()" href="#">All</a></li>
										<li role="separator" class="divider"></li>
										<li v-for="category in categories">
											<a v-on:click.prevent="setUrlFilterCategory(category.name)" href="#"><span class="tab">@{{category.name}}</span></a>
										</li>
									</ul>
								</div>
							</div>

							<div class="col-md-3">
								<div class="dropdown">
									<button class="btn btn-sm btn-default dropdown-toggle" id="categoryOutName" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
										Sort : @{{urlFilterData.sortName}}
										<span class="caret"></span>
									</button>
									<ul id="categoryOut" class="dropdown-menu" aria-labelledby="dropdownMenu1">
										<li><a v-on:click.prevent="setUrlSorting('time', 'asc', 'Time decreasing')" href="#">Time decreasing</a></li>
										<li><a v-on:click.prevent="setUrlSorting('time', 'desc', 'Time Increasing')" href="#">Time Increasing</a></li>
										<li><a v-on:click.prevent="setUrlSorting('hits', 'desc', 'Most Clicked')" href="#">Most Clicked</a></li>
										<li><a v-on:click.prevent="setUrlSorting('hits', 'asc', 'Less Clicked')" href="#">Less Clicked</a></li>
										<li><a v-on:click.prevent="setUrlSorting('ctgry', 'asc', 'Category increasing')" href="#">Category increasing</a></li>
										<li><a v-on:click.prevent="setUrlSorting('ctgry', 'desc', 'Category decreasing')" href="#">Category decreasing</a></li>
									</ul>
								</div>
							</div>
							<div class="col-md-3">
								<div class="input-group input-group-sm">
									<span class="input-group-addon " id="basic-addon1"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></span>
									<input type="text" v-model="urlFilterData.search" @keyup="searchUrl" class="form-control" placeholder="Search on Long Url" aria-describedby="basic-addon1">
								</div>
							</div>

							<div class="col-md-3">
								<div class="checkbox">
									<label>
										<input id="showDeleted" v-model="urlFilterData.del" @click="showDeleted" type="checkbox"> Show Deleted
									</label>
								</div>
							</div>
						</div>
						<hr>
						<div>
							<table id="urlTable" class="table table-bordered">
								<thead>
									<tr>
										<th>#</th>
										<th>Long Url</th>
										<th>Short Url</th>
										<th>Created</th>
										<th>Category</th>
										<th>Delete</th>
										<th>Hits</th>
									</tr>
								</thead>
								<tbody >
									<tr v-for="url in urls">
										<td>@{{urlData.from + $index}}</td>
										<td><a target='_blank' href="@{{url.long_url}}">@{{url.long_url}}</a></td>
										<td><a target='_blank' href="@{{url.short_url}}">@{{url.short_url}}</a></td>
										<td>@{{url.time}}</td>
										<td>@{{url.category}}</td>
										<td><button type='button' v-on:click.prevent="deleteUrl(url.id)" class='btn btn-default btn-xs'>Delete</button></td>
										<td><button type='button' v-on:click.prevent="analyse(url.id)" class='btn btn-default btn-xs'>@{{url.clicks}} analyse</button></td>
									</tr>
								</tbody>
							</table>
							<div class="row">
								<div class="col-md-6">
									<span class="pull-left btn-group" role="group" aria-label="...">
										showing: @{{urlData.to - urlData.from + 1}} of @{{urlData.total}}
										<br/>
										page: @{{urlData.current_page}} of @{{urlData.last_page}}
									</span>
								</div>
								<div class="col-md-6">
									<span id="" class="pull-right btn-group" role="group" aria-label="...">
										<button type="button" id="prevButton" v-on:click="prevPage()" :disabled="urlData.current_page == 1" class="btn btn-sm btn-default">Prev</button>
										<button type="button" id="nextButton" v-on:click="nextPage()" :disabled="urlData.current_page == urlData.last_page" class="btn btn-sm btn-default">Next</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="col-md-6">
				<div class="panel panel-default">
					<div class="panel-heading text-center stats-panel-header">Analytics of Short Urls</div>
					<div class="panel-body" id="analyticsPanel">
						<div id="clickPanel">
							<div class="btn-group btn-group-sm pull-right" role="group" aria-label="...">
								<button type="button" onclick="return changeUnit('year')" class="btn btn-info">Year</button>
								<button type="button" onclick="return changeUnit('month')" class="btn btn-info">Month</button>
								<button type="button" onclick="return changeUnit('week')" class="btn btn-info">Week</button>
								<button type="button" onclick="return changeUnit('date')" class="btn btn-info">Date</button>
								<button type="button" onclick="return changeUnit('hour')" class="btn btn-info">Hour</button>
								<button type="button" onclick="return changeUnit('minute')" class="btn btn-info">Minute</button>
								<button type="button" onclick="return changeUnit('second')" class="btn btn-info">Second</button>
							</div>
							<div class="pull-left">
								<div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
									<i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
									<span></span> <b class="caret"></b>
								</div>
							</div>
							<div class="row">

							</div>

							<div class="row">
								<div class="col-md-12">
									<div id="clickGraph" style="height: 300px; width: 100%;"></div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									Session : <span id="sessionCount"></span>,
									User : <span id="cookieCount"></span>,
									Total : <span id="totalCount"></span>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-6 mycontent-left" id="platformPanel">
								<div id="platformGraph" style="height: 300px; width: 100%;"></div>
							</div>
							<div class="col-md-6" id="referrerPanel">
								<div id="referrerGraph" style="height: 300px; width: 100%;"></div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 mycontent-left" id="countryPanel">
								<div id="countryGraph" style="height: 300px; width: 100%;"></div>
							</div>
							<div class="col-md-6" id="referrerPanel">
								<div id="referrerGraph" style="height: 100%; width: 100%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div> -->

			<script src="{{ elixir('assets/js/everything.js')}}"></script>
		</body>
		</html>
