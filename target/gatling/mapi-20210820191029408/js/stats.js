var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "-",
        "ko": "180"
    },
    "maxResponseTime": {
        "total": "1802",
        "ok": "-",
        "ko": "1802"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "-",
        "ko": "804"
    },
    "standardDeviation": {
        "total": "496",
        "ok": "-",
        "ko": "496"
    },
    "percentiles1": {
        "total": "771",
        "ok": "-",
        "ko": "771"
    },
    "percentiles2": {
        "total": "1119",
        "ok": "-",
        "ko": "1119"
    },
    "percentiles3": {
        "total": "1566",
        "ok": "-",
        "ko": "1566"
    },
    "percentiles4": {
        "total": "1755",
        "ok": "-",
        "ko": "1755"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.159",
        "ok": "-",
        "ko": "0.159"
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
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "-",
        "ko": "180"
    },
    "maxResponseTime": {
        "total": "1802",
        "ok": "-",
        "ko": "1802"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "-",
        "ko": "804"
    },
    "standardDeviation": {
        "total": "496",
        "ok": "-",
        "ko": "496"
    },
    "percentiles1": {
        "total": "771",
        "ok": "-",
        "ko": "771"
    },
    "percentiles2": {
        "total": "1119",
        "ok": "-",
        "ko": "1119"
    },
    "percentiles3": {
        "total": "1566",
        "ok": "-",
        "ko": "1566"
    },
    "percentiles4": {
        "total": "1755",
        "ok": "-",
        "ko": "1755"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.159",
        "ok": "-",
        "ko": "0.159"
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