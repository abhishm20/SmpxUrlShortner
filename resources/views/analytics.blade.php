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
                            <div class="pull-left">
                                <h3 style="margin-top: 0px; margin-bottom: 0px;">
                                    Session: @{{clickData.sessionCount}},
                                    User: @{{clickData.cookieCount}},
                                    Total: @{{clickData.totalCount}}
                                </h3>
                            </div>
                            <div class="pull-right">
                                <div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
                                    <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
                                    <span></span> <b class="caret"></b>
                                </div>
                            </div>
                            <div class="btn-group btn-group-sm pull-right" style="margin-right: 12px;" role="group" aria-label="...">
                                <button type="button" @click="changeUnit('yr')" :disabled="filterData.u=='yr'" class="btn btn-default">Year</button>
                                <button type="button" @click="changeUnit('mnth')" :disabled="filterData.u=='mnth'" class="btn btn-default">Month</button>
                                <button type="button" @click="changeUnit('wk')" :disabled="filterData.u=='wk'" class="btn btn-default">Week</button>
                                <button type="button" @click="changeUnit('dt')" :disabled="filterData.u=='dt'" class="btn btn-default">Date</button>
                                <button type="button" @click="changeUnit('hr')" :disabled="filterData.u=='hr'" class="btn btn-default">Hour</button>
                                <button type="button" @click="changeUnit('min')" :disabled="filterData.u=='min'" class="btn btn-default">Minute</button>
                                <button type="button" @click="changeUnit('sec')" :disabled="filterData.u=='sc'" class="btn btn-default">Second</button>
                            </div>
                        </div>
                        <div class="container-fluid container-main">
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="clickGraph" style="height: 300px; width: 100%;"></div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6 mycontent-left" id="osPanel">
                                <div id="osGraph" style="height: 300px; width: 100%;"></div>
                            </div>
                            <div class="col-md-6" id="referrerPanel">
                                <div id="referrerGraph" style="height: 300px; width: 100%;"></div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6 mycontent-left" id="countryPanel">
                                <div>
                                    <p>Country Analysis</p>
                                </div>
                                <div id="countryGraph" style="height: 300px; width: 100%;"></div>
                            </div>
                            <div class="col-md-6">
                                <div id="cityGraph" style="height: 300px; width: 100%;"></div>
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
