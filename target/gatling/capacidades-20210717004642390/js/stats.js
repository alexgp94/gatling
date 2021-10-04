var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1810",
        "ok": "462",
        "ko": "1348"
    },
    "minResponseTime": {
        "total": "10483",
        "ok": "14605",
        "ko": "10483"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59970",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "31342",
        "ok": "52877",
        "ko": "23961"
    },
    "standardDeviation": {
        "total": "16095",
        "ok": "4788",
        "ko": "11249"
    },
    "percentiles1": {
        "total": "23304",
        "ok": "53138",
        "ko": "21435"
    },
    "percentiles2": {
        "total": "49747",
        "ok": "56606",
        "ko": "23781"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "59147",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "59745",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 462,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 1348,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.548",
        "ok": "5.5",
        "ko": "16.048"
    }
},
contents: {
"req_get-ubigeo-73159": {
        type: "REQUEST",
        name: "Get Ubigeo",
path: "Get Ubigeo",
pathFormatted: "req_get-ubigeo-73159",
stats: {
    "name": "Get Ubigeo",
    "numberOfRequests": {
        "total": "1810",
        "ok": "462",
        "ko": "1348"
    },
    "minResponseTime": {
        "total": "10483",
        "ok": "14605",
        "ko": "10483"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59970",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "31342",
        "ok": "52877",
        "ko": "23961"
    },
    "standardDeviation": {
        "total": "16095",
        "ok": "4788",
        "ko": "11249"
    },
    "percentiles1": {
        "total": "23304",
        "ok": "53138",
        "ko": "21435"
    },
    "percentiles2": {
        "total": "49747",
        "ok": "56606",
        "ko": "23781"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "59147",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "59745",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 462,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 1348,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.548",
        "ok": "5.5",
        "ko": "16.048"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
