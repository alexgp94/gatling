var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3966",
        "ok": "3960",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "29449"
    },
    "maxResponseTime": {
        "total": "32664",
        "ok": "32664",
        "ko": "29562"
    },
    "meanResponseTime": {
        "total": "11121",
        "ok": "11094",
        "ko": "29510"
    },
    "standardDeviation": {
        "total": "11837",
        "ok": "11824",
        "ko": "45"
    },
    "percentiles1": {
        "total": "4021",
        "ok": "3850",
        "ko": "29515"
    },
    "percentiles2": {
        "total": "25099",
        "ok": "25090",
        "ko": "29551"
    },
    "percentiles3": {
        "total": "28435",
        "ok": "28382",
        "ko": "29560"
    },
    "percentiles4": {
        "total": "30564",
        "ok": "30567",
        "ko": "29562"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1767,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 85,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2108,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.1",
        "ok": "66",
        "ko": "0.1"
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
        "total": "1983",
        "ok": "1977",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "3218",
        "ok": "3218",
        "ko": "29449"
    },
    "maxResponseTime": {
        "total": "32664",
        "ok": "32664",
        "ko": "29562"
    },
    "meanResponseTime": {
        "total": "21730",
        "ok": "21706",
        "ko": "29510"
    },
    "standardDeviation": {
        "total": "7409",
        "ok": "7408",
        "ko": "45"
    },
    "percentiles1": {
        "total": "25099",
        "ok": "25095",
        "ko": "29515"
    },
    "percentiles2": {
        "total": "27078",
        "ok": "27066",
        "ko": "29551"
    },
    "percentiles3": {
        "total": "29336",
        "ok": "29265",
        "ko": "29560"
    },
    "percentiles4": {
        "total": "31074",
        "ok": "31077",
        "ko": "29562"
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
    "count": 1977,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.05",
        "ok": "32.95",
        "ko": "0.1"
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
        "total": "1983",
        "ok": "1983",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4699",
        "ok": "4699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles1": {
        "total": "373",
        "ok": "373",
        "ko": "-"
    },
    "percentiles2": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1372",
        "ok": "1372",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2823",
        "ok": "2823",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1767,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 85,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 131,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.05",
        "ok": "33.05",
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
