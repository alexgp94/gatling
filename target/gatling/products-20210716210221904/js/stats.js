var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7848",
        "ok": "7791",
        "ko": "57"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "151",
        "ko": "138"
    },
    "maxResponseTime": {
        "total": "31816",
        "ok": "31816",
        "ko": "1701"
    },
    "meanResponseTime": {
        "total": "3456",
        "ok": "3476",
        "ko": "688"
    },
    "standardDeviation": {
        "total": "3014",
        "ok": "3016",
        "ko": "294"
    },
    "percentiles1": {
        "total": "2677",
        "ok": "2698",
        "ko": "679"
    },
    "percentiles2": {
        "total": "4967",
        "ok": "4986",
        "ko": "897"
    },
    "percentiles3": {
        "total": "8843",
        "ok": "8904",
        "ko": "1052"
    },
    "percentiles4": {
        "total": "16026",
        "ok": "16039",
        "ko": "1366"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 668,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 516,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6607,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 57,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "191.415",
        "ok": "190.024",
        "ko": "1.39"
    }
},
contents: {
"req_burts-bees-en-p-a5867": {
        type: "REQUEST",
        name: "burts-bees-en-promocion",
path: "burts-bees-en-promocion",
pathFormatted: "req_burts-bees-en-p-a5867",
stats: {
    "name": "burts-bees-en-promocion",
    "numberOfRequests": {
        "total": "5232",
        "ok": "5232",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31816",
        "ok": "31816",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4307",
        "ok": "4307",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3206",
        "ok": "3206",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3414",
        "ok": "3414",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5305",
        "ok": "5305",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11247",
        "ok": "11247",
        "ko": "-"
    },
    "percentiles4": {
        "total": "17069",
        "ok": "17069",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 334,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 81,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4817,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "127.61",
        "ok": "127.61",
        "ko": "-"
    }
}
    },"req_filtered-produc-7045f": {
        type: "REQUEST",
        name: "Filtered-Products",
path: "Filtered-Products",
pathFormatted: "req_filtered-produc-7045f",
stats: {
    "name": "Filtered-Products",
    "numberOfRequests": {
        "total": "2616",
        "ok": "2559",
        "ko": "57"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "151",
        "ko": "138"
    },
    "maxResponseTime": {
        "total": "12688",
        "ok": "12688",
        "ko": "1701"
    },
    "meanResponseTime": {
        "total": "1753",
        "ok": "1777",
        "ko": "688"
    },
    "standardDeviation": {
        "total": "1532",
        "ok": "1540",
        "ko": "294"
    },
    "percentiles1": {
        "total": "1418",
        "ok": "1433",
        "ko": "679"
    },
    "percentiles2": {
        "total": "1821",
        "ok": "1834",
        "ko": "897"
    },
    "percentiles3": {
        "total": "5299",
        "ok": "5310",
        "ko": "1052"
    },
    "percentiles4": {
        "total": "8909",
        "ok": "8957",
        "ko": "1366"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 334,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 435,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1790,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "count": 57,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "63.805",
        "ok": "62.415",
        "ko": "1.39"
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
