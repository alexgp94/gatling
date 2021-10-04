var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33634",
        "ok": "33634",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "40724",
        "ok": "40724",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40242",
        "ok": "40242",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "477",
        "ok": "477",
        "ko": "-"
    },
    "percentiles1": {
        "total": "40291",
        "ok": "40291",
        "ko": "-"
    },
    "percentiles2": {
        "total": "40320",
        "ok": "40320",
        "ko": "-"
    },
    "percentiles3": {
        "total": "40395",
        "ok": "40395",
        "ko": "-"
    },
    "percentiles4": {
        "total": "40441",
        "ok": "40441",
        "ko": "-"
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
    "count": 400,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.634",
        "ok": "5.634",
        "ko": "-"
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
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33634",
        "ok": "33634",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "40724",
        "ok": "40724",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40242",
        "ok": "40242",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "477",
        "ok": "477",
        "ko": "-"
    },
    "percentiles1": {
        "total": "40291",
        "ok": "40291",
        "ko": "-"
    },
    "percentiles2": {
        "total": "40320",
        "ok": "40320",
        "ko": "-"
    },
    "percentiles3": {
        "total": "40395",
        "ok": "40395",
        "ko": "-"
    },
    "percentiles4": {
        "total": "40441",
        "ok": "40441",
        "ko": "-"
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
    "count": 400,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.634",
        "ok": "5.634",
        "ko": "-"
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
