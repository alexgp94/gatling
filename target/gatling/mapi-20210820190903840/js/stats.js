var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "-",
        "ko": "180"
    },
    "maxResponseTime": {
        "total": "267",
        "ok": "-",
        "ko": "267"
    },
    "meanResponseTime": {
        "total": "229",
        "ok": "-",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "-",
        "ko": "32"
    },
    "percentiles1": {
        "total": "231",
        "ok": "-",
        "ko": "231"
    },
    "percentiles2": {
        "total": "260",
        "ok": "-",
        "ko": "260"
    },
    "percentiles3": {
        "total": "266",
        "ok": "-",
        "ko": "266"
    },
    "percentiles4": {
        "total": "267",
        "ok": "-",
        "ko": "267"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.263",
        "ok": "-",
        "ko": "0.263"
    }
},
contents: {
"req_test-0cbc6": {
        type: "REQUEST",
        name: "Test",
path: "Test",
pathFormatted: "req_test-0cbc6",
stats: {
    "name": "Test",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "-",
        "ko": "180"
    },
    "maxResponseTime": {
        "total": "267",
        "ok": "-",
        "ko": "267"
    },
    "meanResponseTime": {
        "total": "229",
        "ok": "-",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "-",
        "ko": "32"
    },
    "percentiles1": {
        "total": "231",
        "ok": "-",
        "ko": "231"
    },
    "percentiles2": {
        "total": "260",
        "ok": "-",
        "ko": "260"
    },
    "percentiles3": {
        "total": "266",
        "ok": "-",
        "ko": "266"
    },
    "percentiles4": {
        "total": "267",
        "ok": "-",
        "ko": "267"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.263",
        "ok": "-",
        "ko": "0.263"
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
