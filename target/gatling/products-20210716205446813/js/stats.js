var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8331",
        "ok": "8331",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13752",
        "ok": "13752",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3127",
        "ok": "3127",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2375",
        "ok": "2375",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2421",
        "ok": "2421",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4721",
        "ok": "4721",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7363",
        "ok": "7363",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12306",
        "ok": "12306",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 780,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 651,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6900,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "203.195",
        "ok": "203.195",
        "ko": "-"
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
        "total": "5554",
        "ok": "5554",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13752",
        "ok": "13752",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3887",
        "ok": "3887",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2529",
        "ok": "2529",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3227",
        "ok": "3227",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5307",
        "ok": "5308",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8298",
        "ok": "8298",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12449",
        "ok": "12449",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 349,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 177,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5028,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "135.463",
        "ok": "135.463",
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
        "total": "2777",
        "ok": "2777",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7995",
        "ok": "7995",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1607",
        "ok": "1607",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "814",
        "ok": "814",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1526",
        "ok": "1526",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2028",
        "ok": "2028",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2845",
        "ok": "2845",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4058",
        "ok": "4058",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 431,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 474,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1872,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.732",
        "ok": "67.732",
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
