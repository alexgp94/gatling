var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1256",
        "ok": "1256",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12353",
        "ok": "12353",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8463",
        "ok": "8463",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2949",
        "ok": "2949",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10314",
        "ok": "10313",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10463",
        "ok": "10463",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11338",
        "ok": "11338",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11927",
        "ok": "11927",
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
    "count": 1000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
        "ko": "-"
    }
},
contents: {
"req_get-coordenadas-a247b": {
        type: "REQUEST",
        name: "Get Coordenadas",
path: "Get Coordenadas",
pathFormatted: "req_get-coordenadas-a247b",
stats: {
    "name": "Get Coordenadas",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1256",
        "ok": "1256",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12353",
        "ok": "12353",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8463",
        "ok": "8463",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2949",
        "ok": "2949",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10314",
        "ok": "10314",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10463",
        "ok": "10463",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11338",
        "ok": "11338",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11927",
        "ok": "11927",
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
    "count": 1000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
