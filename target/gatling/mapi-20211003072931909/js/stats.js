var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "948",
        "ko": "5052"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "1247",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59980",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "23479",
        "ok": "25004",
        "ko": "23193"
    },
    "standardDeviation": {
        "total": "24348",
        "ok": "19567",
        "ko": "25134"
    },
    "percentiles1": {
        "total": "11630",
        "ok": "16336",
        "ko": "10758"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "46346",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "57809",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59328",
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
    "count": 948,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 5052,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.267",
        "ok": "5.888",
        "ko": "31.379"
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
        "total": "6000",
        "ok": "948",
        "ko": "5052"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "1247",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59980",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "23479",
        "ok": "25004",
        "ko": "23193"
    },
    "standardDeviation": {
        "total": "24348",
        "ok": "19567",
        "ko": "25134"
    },
    "percentiles1": {
        "total": "11630",
        "ok": "16336",
        "ko": "10758"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "46346",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "57809",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59328",
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
    "count": 948,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 5052,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.267",
        "ok": "5.888",
        "ko": "31.379"
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
