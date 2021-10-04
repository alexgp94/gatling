var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5669",
        "ok": "5669",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "905",
        "ok": "905",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1330",
        "ok": "1330",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1730",
        "ok": "1730",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3202",
        "ok": "3202",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1918,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 404,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1678,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "64.516",
        "ok": "64.516",
        "ko": "-"
    }
},
contents: {
"req_search-filters-285d2": {
        type: "REQUEST",
        name: "Search-filters",
path: "Search-filters",
pathFormatted: "req_search-filters-285d2",
stats: {
    "name": "Search-filters",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1078",
        "ok": "1078",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5431",
        "ok": "5431",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1434",
        "ok": "1434",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1324",
        "ok": "1324",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1455",
        "ok": "1455",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2067",
        "ok": "2067",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3783",
        "ok": "3783",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 360,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1640,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.258",
        "ok": "32.258",
        "ko": "-"
    }
}
    },"req_filtered-produc-17c88": {
        type: "REQUEST",
        name: "Filtered-products",
path: "Filtered-products",
pathFormatted: "req_filtered-produc-17c88",
stats: {
    "name": "Filtered-products",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5669",
        "ok": "5669",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "percentiles1": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "percentiles2": {
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "percentiles3": {
        "total": "739",
        "ok": "739",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1778",
        "ok": "1778",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1918,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 44,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 38,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.258",
        "ok": "32.258",
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
