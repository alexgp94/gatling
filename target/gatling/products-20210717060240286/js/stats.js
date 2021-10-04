var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2545",
        "ko": "455"
    },
    "minResponseTime": {
        "total": "2976",
        "ok": "2976",
        "ko": "29411"
    },
    "maxResponseTime": {
        "total": "33979",
        "ok": "33979",
        "ko": "32075"
    },
    "meanResponseTime": {
        "total": "22315",
        "ok": "21020",
        "ko": "29560"
    },
    "standardDeviation": {
        "total": "6851",
        "ok": "6653",
        "ko": "268"
    },
    "percentiles1": {
        "total": "24045",
        "ok": "22918",
        "ko": "29513"
    },
    "percentiles2": {
        "total": "27980",
        "ok": "26117",
        "ko": "29580"
    },
    "percentiles3": {
        "total": "29587",
        "ok": "29000",
        "ko": "29746"
    },
    "percentiles4": {
        "total": "29841",
        "ok": "29746",
        "ko": "31075"
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
    "count": 2545,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 455,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "16.967",
        "ko": "3.033"
    }
},
contents: {
"req_mf-products-8-964fa": {
        type: "REQUEST",
        name: "MF Products 8",
path: "MF Products 8",
pathFormatted: "req_mf-products-8-964fa",
stats: {
    "name": "MF Products 8",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2545",
        "ko": "455"
    },
    "minResponseTime": {
        "total": "2976",
        "ok": "2976",
        "ko": "29411"
    },
    "maxResponseTime": {
        "total": "33979",
        "ok": "33979",
        "ko": "32075"
    },
    "meanResponseTime": {
        "total": "22315",
        "ok": "21020",
        "ko": "29560"
    },
    "standardDeviation": {
        "total": "6851",
        "ok": "6653",
        "ko": "268"
    },
    "percentiles1": {
        "total": "24045",
        "ok": "22918",
        "ko": "29513"
    },
    "percentiles2": {
        "total": "27980",
        "ok": "26117",
        "ko": "29580"
    },
    "percentiles3": {
        "total": "29587",
        "ok": "29000",
        "ko": "29746"
    },
    "percentiles4": {
        "total": "29841",
        "ok": "29746",
        "ko": "31075"
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
    "count": 2545,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 455,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "16.967",
        "ko": "3.033"
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
