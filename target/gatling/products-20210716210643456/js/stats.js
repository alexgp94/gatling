var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2000",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "29105"
    },
    "maxResponseTime": {
        "total": "29519",
        "ok": "6702",
        "ko": "29519"
    },
    "meanResponseTime": {
        "total": "11205",
        "ok": "2232",
        "ko": "29152"
    },
    "standardDeviation": {
        "total": "12809",
        "ok": "2130",
        "ko": "41"
    },
    "percentiles1": {
        "total": "4451",
        "ok": "1655",
        "ko": "29144"
    },
    "percentiles2": {
        "total": "29129",
        "ok": "4451",
        "ko": "29159"
    },
    "percentiles3": {
        "total": "29173",
        "ok": "5683",
        "ko": "29227"
    },
    "percentiles4": {
        "total": "29260",
        "ok": "6629",
        "ko": "29337"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 990,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1000,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 1000,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75",
        "ok": "50",
        "ko": "25"
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
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6702",
        "ok": "6702",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2232",
        "ok": "2232",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2130",
        "ok": "2130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1655",
        "ok": "1655",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4451",
        "ok": "4451",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5683",
        "ok": "5683",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6629",
        "ok": "6629",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 990,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1000,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
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
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "29105",
        "ok": "-",
        "ko": "29105"
    },
    "maxResponseTime": {
        "total": "29519",
        "ok": "-",
        "ko": "29519"
    },
    "meanResponseTime": {
        "total": "29152",
        "ok": "-",
        "ko": "29152"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "percentiles1": {
        "total": "29144",
        "ok": "-",
        "ko": "29144"
    },
    "percentiles2": {
        "total": "29159",
        "ok": "-",
        "ko": "29160"
    },
    "percentiles3": {
        "total": "29227",
        "ok": "-",
        "ko": "29227"
    },
    "percentiles4": {
        "total": "29337",
        "ok": "-",
        "ko": "29337"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "-",
        "ko": "25"
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
