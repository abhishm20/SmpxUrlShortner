<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>Bootstrap Login Form</title>
	<meta name="generator" content="Bootply" />
	<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="{{ asset('assets/css/bootstrap.min.css')}}" rel="stylesheet">

	<link href="{{ asset('assets/css/dataTables.bootstrap.min.css')}}" rel="stylesheet">
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
					<div class="panel-heading text-center stats-panel-header">Analyticsof Short Urls</div>
					<div class="panel-body" id="loader">
						<div class="row">
							<div class="col-md-12">
								<div id="clicks" style="height: 300px; width: 100%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- script references -->
	<script src="{{ asset('assets/js/jquery.min.js')}}"></script>
	<script src="{{ asset('assets/js/bootstrap.min.js')}}"></script>
	<script src="{{ asset('assets/js/jquery.dataTables.min.js')}}"></script>
	<script src="{{ asset('assets/js/dataTables.bootstrap.min.js')}}"></script>
	<script src="{{ asset('assets/js/canvasjs.min.js')}}"></script>
	<script src="{{ asset('assets/js/spin.min.js')}}"></script>
	<script src="{{ asset('assets/js/script.js')}}"></script>
	<script src="{{ asset('assets/js/analytics.js')}}"></script>

</body>
</html>
