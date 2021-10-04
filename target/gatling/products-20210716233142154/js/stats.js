var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "11900",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "10116"
    },
    "maxResponseTime": {
        "total": "29617",
        "ok": "8894",
        "ko": "29617"
    },
    "meanResponseTime": {
        "total": "688",
        "ok": "504",
        "ko": "22586"
    },
    "standardDeviation": {
        "total": "2276",
        "ok": "694",
        "ko": "8992"
    },
    "percentiles1": {
        "total": "285",
        "ok": "282",
        "ko": "29117"
    },
    "percentiles2": {
        "total": "651",
        "ok": "625",
        "ko": "29147"
    },
    "percentiles3": {
        "total": "1555",
        "ok": "1240",
        "ko": "29471"
    },
    "percentiles4": {
        "total": "5719",
        "ok": "4180",
        "ko": "29585"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9859,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1421,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 620,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "126.316",
        "ok": "125.263",
        "ko": "1.053"
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
        "total": "8000",
        "ok": "7933",
        "ko": "67"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "10116"
    },
    "maxResponseTime": {
        "total": "29617",
        "ok": "8177",
        "ko": "29617"
    },
    "meanResponseTime": {
        "total": "635",
        "ok": "470",
        "ko": "20209"
    },
    "standardDeviation": {
        "total": "2097",
        "ok": "648",
        "ko": "9429"
    },
    "percentiles1": {
        "total": "229",
        "ok": "226",
        "ko": "29110"
    },
    "percentiles2": {
        "total": "700",
        "ok": "691",
        "ko": "29145"
    },
    "percentiles3": {
        "total": "1061",
        "ok": "1028",
        "ko": "29519"
    },
    "percentiles4": {
        "total": "5730",
        "ok": "4223",
        "ko": "29596"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6502,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1207,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 224,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 67,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.211",
        "ok": "83.505",
        "ko": "0.705"
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
        "total": "4000",
        "ok": "3967",
        "ko": "33"
    },
    "minResponseTime": {
        "total": "125",
        "ok": "125",
        "ko": "10116"
    },
    "maxResponseTime": {
        "total": "29177",
        "ok": "8894",
        "ko": "29177"
    },
    "meanResponseTime": {
        "total": "795",
        "ok": "574",
        "ko": "27411"
    },
    "standardDeviation": {
        "total": "2595",
        "ok": "774",
        "ko": "5451"
    },
    "percentiles1": {
        "total": "315",
        "ok": "313",
        "ko": "29134"
    },
    "percentiles2": {
        "total": "490",
        "ok": "478",
        "ko": "29150"
    },
    "percentiles3": {
        "total": "2500",
        "ok": "2250",
        "ko": "29158"
    },
    "percentiles4": {
        "total": "5654",
        "ok": "4070",
        "ko": "29172"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3357,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 214,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 396,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 33,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.105",
        "ok": "41.758",
        "ko": "0.347"
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
