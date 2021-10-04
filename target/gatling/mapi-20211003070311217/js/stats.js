var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1503",
        "ko": "497"
    },
    "minResponseTime": {
        "total": "1083",
        "ok": "1083",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59704",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "30019",
        "ok": "20104",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "22232",
        "ok": "16190",
        "ko": "1"
    },
    "percentiles1": {
        "total": "23439",
        "ok": "14280",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "58857",
        "ok": "30513",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "55245",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "56465",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1497,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 497,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.422",
        "ok": "9.335",
        "ko": "3.087"
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
        "total": "2000",
        "ok": "1503",
        "ko": "497"
    },
    "minResponseTime": {
        "total": "1083",
        "ok": "1083",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59704",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "30019",
        "ok": "20104",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "22232",
        "ok": "16190",
        "ko": "1"
    },
    "percentiles1": {
        "total": "23439",
        "ok": "14280",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "58857",
        "ok": "30513",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "55245",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "56465",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1497,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 497,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.422",
        "ok": "9.335",
        "ko": "3.087"
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
