var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles1": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles2": {
        "total": "576",
        "ok": "576",
        "ko": "-"
    },
    "percentiles3": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1008",
        "ok": "1008",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2884,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 105,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.619",
        "ok": "47.619",
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
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles1": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "percentiles2": {
        "total": "677",
        "ok": "677",
        "ko": "-"
    },
    "percentiles3": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1387,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 102,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "23.81",
        "ko": "-"
    }
}
    },"req_am---pm-95da9": {
        type: "REQUEST",
        name: "AM / PM",
path: "AM / PM",
pathFormatted: "req_am---pm-95da9",
stats: {
    "name": "AM / PM",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "886",
        "ok": "886",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles1": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "percentiles2": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    },
    "percentiles3": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "percentiles4": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1497,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "23.81",
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
