<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>Smartprix Url Shortner</title>
	<meta name="generator" content="Bootply" />
	<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="{{ asset('assets/css/bootstrap.min.css')}}" rel="stylesheet">

	<link href="{{ asset('assets/css/dataTables.bootstrap.min.css')}}" rel="stylesheet">
	<link href="{{ asset('assets/css/morris.css')}}" rel="stylesheet">
	<!--[if lt IE 9]>
	<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link href="{{ asset('assets/css/styles.css')}}" rel="stylesheet">
</head>
<body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5">
				<div class="panel panel-default">
					<div class="panel-heading text-center main-panel-header">Smartprix Url Shortening</div>
					<div class="panel-body">
						<form id="short_url_form" onsubmit="return postUrl()" name="short_url_form">
							<div class="form-group">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Long Url</span>
									<input id="longUrl" name="longUrl" type="text" class="form-control" placeholder="Long Url" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Cotegory</span>
									<input style="margin-right: -70px;" id="cotegory" name="cotegory" type="text" class="form-control" placeholder="default: None" aria-describedby="basic-addon1">
									<span class="input-group-addon" id="basic-addon1">Custom Key</span>
									<input id="customKey" name="customKey" type="text" class="form-control" placeholder="default: None" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="form-group text-right">
								<button id="submit" type="submit" class="btn center	btn-success  btn-default">Submit</button>
							</div>
						</form>
						<table id="dataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">

						</table>
					</div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="panel panel-default">
					<div class="panel-heading text-center stats-panel-header">Analytics of Short Urls</div>
					<div class="panel-body">
						<div id="clickPanel">
							<div class="btn-group btn-group-xs" role="group" aria-label="...">
								<button type="button" onclick="return changeClicksAnalytics('year')" class="btn btn-info">Year</button>
								<button type="button" onclick="return changeClicksAnalytics('month')" class="btn btn-info">Month</button>
								<button type="button" onclick="return changeClicksAnalytics('week')" class="btn btn-info">Week</button>
								<button type="button" onclick="return changeClicksAnalytics('day')" class="btn btn-info">Day</button>
								<button type="button" onclick="return changeClicksAnalytics('hour')" class="btn btn-info">Hour</button>
								<button type="button" onclick="return changeClicksAnalytics('minute')" class="btn btn-info">Minute</button>
								<button type="button" onclick="return changeClicksAnalytics('second')" class="btn btn-info">Second</button>
							</div>

							<div class="row">
								<div class="col-md-12">
									<div id="clickGraph" style="height: 300px; width: 100%;"></div>
								</div>
							</div>
						</div>
						<hr>
						<div>
							<div class="row">
								<div class="col-md-6" id="platformPanel">
									<div id="platformGraph" style="height: 300px; width: 100%;"></div>
								</div>
								<div class="col-md-6" id="referrerPanel">
									<div id="referrerGraph" style="height: 300px; width: 100%;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- script references -->
			<script src="{{ asset('assets/js/jquery.min.js')}}"></script>
			<script src="{{ asset('assets/js/bootstrap.min.js')}}"></script>
			<!-- datatable -->
			<script src="{{ asset('assets/js/jquery.dataTables.min.js')}}"></script>
			<script src="{{ asset('assets/js/dataTables.bootstrap.min.js')}}"></script>
			<!-- spin -->
			<script src="{{ asset('assets/js/spin.min.js')}}"></script>
			<!-- Charts -->
			<script src="{{ asset('assets/js/canvasjs.min.js')}}"></script>
			<!-- xustom -->
			<script src="{{ asset('assets/js/script.js')}}"></script>
			<script src="{{ asset('assets/js/analytics.js')}}"></script>

		</body>
		</html>
