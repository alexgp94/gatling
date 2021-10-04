var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12218",
        "ok": "12218",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3920",
        "ok": "3920",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2144",
        "ok": "2144",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3610",
        "ok": "3610",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5382",
        "ok": "5382",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7851",
        "ok": "7851",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9554",
        "ok": "9554",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 986,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.027",
        "ok": "27.027",
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1117",
        "ok": "1117",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9914",
        "ok": "9914",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2669",
        "ok": "2669",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1334",
        "ok": "1334",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2267",
        "ok": "2267",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3338",
        "ok": "3338",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5146",
        "ok": "5146",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6700",
        "ok": "6700",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 496,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.514",
        "ok": "13.514",
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12218",
        "ok": "12218",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5171",
        "ok": "5171",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2069",
        "ok": "2069",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5225",
        "ok": "5225",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6403",
        "ok": "6403",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8462",
        "ok": "8462",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10298",
        "ok": "10298",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 490,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.514",
        "ok": "13.514",
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
