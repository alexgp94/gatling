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
        "total": "1394",
        "ok": "1394",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26697",
        "ok": "26697",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5974",
        "ok": "5974",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3631",
        "ok": "3631",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4808",
        "ok": "4808",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7599",
        "ok": "7599",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12906",
        "ok": "12906",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14877",
        "ok": "14877",
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
        "total": "14.286",
        "ok": "14.286",
        "ko": "-"
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1394",
        "ok": "1394",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26697",
        "ok": "26697",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5974",
        "ok": "5974",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3631",
        "ok": "3631",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4808",
        "ok": "4808",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7599",
        "ok": "7599",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12906",
        "ok": "12906",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14877",
        "ok": "14877",
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
        "total": "14.286",
        "ok": "14.286",
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
