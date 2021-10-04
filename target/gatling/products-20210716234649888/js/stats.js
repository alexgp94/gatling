var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7949",
        "ok": "7949",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "992",
        "ok": "992",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles1": {
        "total": "994",
        "ok": "994",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2523",
        "ok": "2523",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4319",
        "ok": "4319",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2849,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1423,
    "percentage": 24
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1728,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "65.217",
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
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7949",
        "ok": "7949",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1518",
        "ok": "1518",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1222",
        "ok": "1222",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1529",
        "ok": "1529",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3157",
        "ok": "3157",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4906",
        "ok": "4906",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1390,
    "percentage": 46
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1610,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.609",
        "ok": "32.609",
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
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5607",
        "ok": "5607",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "466",
        "ok": "466",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "percentiles1": {
        "total": "386",
        "ok": "386",
        "ko": "-"
    },
    "percentiles2": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "percentiles3": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2914",
        "ok": "2914",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2849,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 118,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.609",
        "ok": "32.609",
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
