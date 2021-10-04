var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "40552",
        "ok": "40552",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58576",
        "ok": "58576",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "47275",
        "ok": "47275",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3813",
        "ok": "3813",
        "ko": "-"
    },
    "percentiles1": {
        "total": "46933",
        "ok": "46933",
        "ko": "-"
    },
    "percentiles2": {
        "total": "49909",
        "ok": "49909",
        "ko": "-"
    },
    "percentiles3": {
        "total": "54245",
        "ok": "54245",
        "ko": "-"
    },
    "percentiles4": {
        "total": "56450",
        "ok": "56450",
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
    "count": 2000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.699",
        "ok": "17.699",
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
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "40552",
        "ok": "40552",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58576",
        "ok": "58576",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "47275",
        "ok": "47275",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3813",
        "ok": "3813",
        "ko": "-"
    },
    "percentiles1": {
        "total": "46933",
        "ok": "46933",
        "ko": "-"
    },
    "percentiles2": {
        "total": "49909",
        "ok": "49909",
        "ko": "-"
    },
    "percentiles3": {
        "total": "54245",
        "ok": "54245",
        "ko": "-"
    },
    "percentiles4": {
        "total": "56450",
        "ok": "56450",
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
    "count": 2000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.699",
        "ok": "17.699",
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
