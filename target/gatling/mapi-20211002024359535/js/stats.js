var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1571",
        "ok": "1175",
        "ko": "396"
    },
    "minResponseTime": {
        "total": "3614",
        "ok": "4168",
        "ko": "3614"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59993",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "36707",
        "ok": "34770",
        "ko": "42455"
    },
    "standardDeviation": {
        "total": "19826",
        "ok": "16821",
        "ko": "25995"
    },
    "percentiles1": {
        "total": "40652",
        "ok": "36833",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "57065",
        "ok": "49009",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "58803",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59836",
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
    "count": 1175,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 396,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.076",
        "ok": "12.772",
        "ko": "4.304"
    }
},
contents: {
"req_prog-8ad53": {
        type: "REQUEST",
        name: "PROG",
path: "PROG",
pathFormatted: "req_prog-8ad53",
stats: {
    "name": "PROG",
    "numberOfRequests": {
        "total": "1571",
        "ok": "1175",
        "ko": "396"
    },
    "minResponseTime": {
        "total": "3614",
        "ok": "4168",
        "ko": "3614"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59993",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "36707",
        "ok": "34770",
        "ko": "42455"
    },
    "standardDeviation": {
        "total": "19826",
        "ok": "16821",
        "ko": "25995"
    },
    "percentiles1": {
        "total": "40652",
        "ok": "36833",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "57065",
        "ok": "49009",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "58803",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59836",
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
    "count": 1175,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 396,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.076",
        "ok": "12.772",
        "ko": "4.304"
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
