var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "412",
        "ok": "412",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59851",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "9570",
        "ok": "7359",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "17986",
        "ok": "14876",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1506",
        "ok": "1449",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "3042",
        "ok": "2413",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "56157",
        "ok": "54042",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "55950",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 126,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 219,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 613,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 42,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.211",
        "ok": "5.95",
        "ko": "0.261"
    }
},
contents: {
"req_colegiomedico-50fe7": {
        type: "REQUEST",
        name: "colegiomedico",
path: "colegiomedico",
pathFormatted: "req_colegiomedico-50fe7",
stats: {
    "name": "colegiomedico",
    "numberOfRequests": {
        "total": "1000",
        "ok": "958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "412",
        "ok": "412",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59851",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "9570",
        "ok": "7359",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "17986",
        "ok": "14876",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1506",
        "ok": "1449",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "3042",
        "ok": "2413",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "56157",
        "ok": "54042",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "55950",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 126,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 219,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 613,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 42,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.211",
        "ok": "5.95",
        "ko": "0.261"
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
