var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7119",
        "ok": "7110",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "10698"
    },
    "maxResponseTime": {
        "total": "32605",
        "ok": "32605",
        "ko": "11621"
    },
    "meanResponseTime": {
        "total": "3948",
        "ok": "3939",
        "ko": "10885"
    },
    "standardDeviation": {
        "total": "3617",
        "ok": "3611",
        "ko": "267"
    },
    "percentiles1": {
        "total": "2895",
        "ok": "2890",
        "ko": "10850"
    },
    "percentiles2": {
        "total": "5149",
        "ok": "5132",
        "ko": "10859"
    },
    "percentiles3": {
        "total": "11178",
        "ok": "11171",
        "ko": "11316"
    },
    "percentiles4": {
        "total": "17926",
        "ok": "17930",
        "ko": "11560"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 757,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 534,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5819,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "158.2",
        "ok": "158",
        "ko": "0.2"
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
        "total": "4746",
        "ok": "4737",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "10698"
    },
    "maxResponseTime": {
        "total": "32605",
        "ok": "32605",
        "ko": "11621"
    },
    "meanResponseTime": {
        "total": "4650",
        "ok": "4638",
        "ko": "10885"
    },
    "standardDeviation": {
        "total": "3834",
        "ok": "3828",
        "ko": "267"
    },
    "percentiles1": {
        "total": "3916",
        "ok": "3911",
        "ko": "10850"
    },
    "percentiles2": {
        "total": "6054",
        "ok": "6042",
        "ko": "10859"
    },
    "percentiles3": {
        "total": "12188",
        "ok": "12190",
        "ko": "11316"
    },
    "percentiles4": {
        "total": "18856",
        "ok": "18857",
        "ko": "11560"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 411,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 239,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4087,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "105.467",
        "ok": "105.267",
        "ko": "0.2"
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
        "total": "2373",
        "ok": "2373",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "27852",
        "ok": "27852",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2543",
        "ok": "2543",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2626",
        "ok": "2626",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1923",
        "ok": "1923",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2888",
        "ok": "2888",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7422",
        "ok": "7422",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14915",
        "ok": "14915",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 346,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 295,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1732,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "52.733",
        "ok": "52.733",
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
