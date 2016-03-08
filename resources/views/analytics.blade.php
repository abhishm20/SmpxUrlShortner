<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Analytics</title>
    <meta name="generator" content="" />
    <meta name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="{{ elixir('assets/css/analytics.css')}}" rel="stylesheet">

</head>
<body>
    <div id="app" class="container container-main">
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading text-center stats-panel-header">Analytics of Short Urls</div>
                    <div class="panel-body" id="analyticsPanel">
                        <div class="container-fluid">
                            <div class="btn-group btn-group-sm pull-left" role="group" aria-label="...">
                                <button type="button" @click="changeUnit('yr')" class="btn btn-default">Year</button>
                                <button type="button" @click="changeUnit('mnth')" class="btn btn-default">Month</button>
                                <button type="button" @click="changeUnit('wk')" class="btn btn-default">Week</button>
                                <button type="button" @click="changeUnit('dt')" class="btn btn-default">Date</button>
                                <button type="button" @click="changeUnit('hr')" class="btn btn-default">Hour</button>
                                <button type="button" @click="changeUnit('min')" class="btn btn-default">Minute</button>
                                <button type="button" @click="changeUnit('sc')" class="btn btn-default">Second</button>
                            </div>
                            <div class="pull-right">
                                <div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
                                    <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
                                    <span></span> <b class="caret"></b>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid container-main">
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
            </div>
        </div>
    </div>
    <script src="{{ elixir('assets/js/analytics.js')}}"></script>
</body>
</html>
