var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8000",
        "ok": "8000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16865",
        "ok": "16865",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1113",
        "ok": "1113",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1459",
        "ok": "1459",
        "ko": "-"
    },
    "percentiles1": {
        "total": "861",
        "ok": "861",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1255",
        "ok": "1255",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4003",
        "ok": "4003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6541",
        "ok": "6541",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3987,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1646,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2367,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.716",
        "ok": "43.716",
        "ko": "-"
    }
},
contents: {
"req_app-categories--80526": {
        type: "REQUEST",
        name: "APP Categories cyber-wow2",
path: "APP Categories cyber-wow2",
pathFormatted: "req_app-categories--80526",
stats: {
    "name": "APP Categories cyber-wow2",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16865",
        "ok": "16865",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1996",
        "ok": "1996",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1623",
        "ok": "1623",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1254",
        "ok": "1254",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2458",
        "ok": "2458",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4615",
        "ok": "4615",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8303",
        "ok": "8303",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1637,
    "percentage": 41
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2363,
    "percentage": 59
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.858",
        "ok": "21.858",
        "ko": "-"
    }
}
    },"req_web-cyber-inka-42c97": {
        type: "REQUEST",
        name: "WEB Cyber-Inka",
path: "WEB Cyber-Inka",
pathFormatted: "req_web-cyber-inka-42c97",
stats: {
    "name": "WEB Cyber-Inka",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8592",
        "ok": "8592",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "percentiles1": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles2": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles3": {
        "total": "494",
        "ok": "494",
        "ko": "-"
    },
    "percentiles4": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3987,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.858",
        "ok": "21.858",
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
