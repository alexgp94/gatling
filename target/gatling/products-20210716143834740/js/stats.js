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
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7044",
        "ok": "7044",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "874",
        "ok": "874",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "674",
        "ok": "674",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1671",
        "ok": "1671",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3605",
        "ok": "3605",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1950,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 888,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1162,
    "percentage": 29
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
        "total": "1024",
        "ok": "1024",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7044",
        "ok": "7044",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1378",
        "ok": "1378",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "595",
        "ok": "595",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1223",
        "ok": "1223",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1330",
        "ok": "1330",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2417",
        "ok": "2417",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4252",
        "ok": "4252",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 864,
    "percentage": 43
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1136,
    "percentage": 57
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
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3307",
        "ok": "3307",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles1": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "percentiles2": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "percentiles3": {
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1950,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 24,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 1
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
