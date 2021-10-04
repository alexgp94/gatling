var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1214",
        "ko": "786"
    },
    "minResponseTime": {
        "total": "1030",
        "ok": "1030",
        "ko": "29104"
    },
    "maxResponseTime": {
        "total": "29485",
        "ok": "29229",
        "ko": "29485"
    },
    "meanResponseTime": {
        "total": "13524",
        "ok": "3411",
        "ko": "29143"
    },
    "standardDeviation": {
        "total": "13411",
        "ok": "6007",
        "ko": "42"
    },
    "percentiles1": {
        "total": "1736",
        "ok": "1272",
        "ko": "29133"
    },
    "percentiles2": {
        "total": "29124",
        "ok": "1463",
        "ko": "29151"
    },
    "percentiles3": {
        "total": "29165",
        "ok": "19872",
        "ko": "29228"
    },
    "percentiles4": {
        "total": "29281",
        "ok": "28134",
        "ko": "29307"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 361,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 853,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 786,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.978",
        "ok": "13.341",
        "ko": "8.637"
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
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1077",
        "ok": "1077",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2514",
        "ok": "2514",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1275",
        "ok": "1275",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "160",
        "ok": "160",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1238",
        "ok": "1238",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1339",
        "ok": "1339",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1578",
        "ok": "1578",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1897",
        "ok": "1897",
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
    "percentage": 36
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 640,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.989",
        "ok": "10.989",
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
        "total": "1000",
        "ok": "214",
        "ko": "786"
    },
    "minResponseTime": {
        "total": "1030",
        "ok": "1030",
        "ko": "29104"
    },
    "maxResponseTime": {
        "total": "29485",
        "ok": "29229",
        "ko": "29485"
    },
    "meanResponseTime": {
        "total": "25773",
        "ok": "13397",
        "ko": "29143"
    },
    "standardDeviation": {
        "total": "7719",
        "ok": "9139",
        "ko": "42"
    },
    "percentiles1": {
        "total": "29124",
        "ok": "13073",
        "ko": "29133"
    },
    "percentiles2": {
        "total": "29146",
        "ok": "20818",
        "ko": "29151"
    },
    "percentiles3": {
        "total": "29216",
        "ok": "28222",
        "ko": "29228"
    },
    "percentiles4": {
        "total": "29307",
        "ok": "29058",
        "ko": "29307"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 213,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 786,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.989",
        "ok": "2.352",
        "ko": "8.637"
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
