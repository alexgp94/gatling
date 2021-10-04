var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
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
        "total": "9038",
        "ok": "9038",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "935",
        "ok": "935",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "973",
        "ok": "973",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1093",
        "ok": "1093",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1246",
        "ok": "1246",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2111",
        "ok": "2111",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5737",
        "ok": "5737",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 985,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 355,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 660,
    "percentage": 33
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
        "total": "1080",
        "ok": "1080",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9038",
        "ok": "9038",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1560",
        "ok": "1560",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1040",
        "ok": "1040",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1241",
        "ok": "1241",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1348",
        "ok": "1348",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3945",
        "ok": "3945",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6104",
        "ok": "6104",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 350,
    "percentage": 35
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 650,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.129",
        "ok": "16.129",
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
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2692",
        "ok": "2692",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "176",
        "ok": "176",
        "ko": "-"
    },
    "percentiles1": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "percentiles2": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "percentiles3": {
        "total": "446",
        "ok": "446",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1147",
        "ok": "1147",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 985,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.129",
        "ok": "16.129",
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
