var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41053",
        "ok": "41053",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58306",
        "ok": "58306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "48815",
        "ok": "48815",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3900",
        "ok": "3900",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49055",
        "ok": "49055",
        "ko": "-"
    },
    "percentiles2": {
        "total": "51589",
        "ok": "51589",
        "ko": "-"
    },
    "percentiles3": {
        "total": "54952",
        "ok": "54952",
        "ko": "-"
    },
    "percentiles4": {
        "total": "57346",
        "ok": "57346",
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
    "count": 500,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.944",
        "ok": "6.944",
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41053",
        "ok": "41053",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58306",
        "ok": "58306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "48815",
        "ok": "48815",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3900",
        "ok": "3900",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49055",
        "ok": "49055",
        "ko": "-"
    },
    "percentiles2": {
        "total": "51589",
        "ok": "51589",
        "ko": "-"
    },
    "percentiles3": {
        "total": "54952",
        "ok": "54952",
        "ko": "-"
    },
    "percentiles4": {
        "total": "57346",
        "ok": "57346",
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
    "count": 500,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.944",
        "ok": "6.944",
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
