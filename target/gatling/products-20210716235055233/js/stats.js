var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4034",
        "ok": "3908",
        "ko": "126"
    },
    "minResponseTime": {
        "total": "221",
        "ok": "221",
        "ko": "29438"
    },
    "maxResponseTime": {
        "total": "36741",
        "ok": "36687",
        "ko": "36741"
    },
    "meanResponseTime": {
        "total": "10678",
        "ok": "10013",
        "ko": "31307"
    },
    "standardDeviation": {
        "total": "11751",
        "ok": "11322",
        "ko": "2486"
    },
    "percentiles1": {
        "total": "3717",
        "ok": "1245",
        "ko": "29619"
    },
    "percentiles2": {
        "total": "24669",
        "ok": "22224",
        "ko": "34233"
    },
    "percentiles3": {
        "total": "29467",
        "ok": "28448",
        "ko": "35706"
    },
    "percentiles4": {
        "total": "34471",
        "ok": "32214",
        "ko": "36268"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1792,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 152,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1964,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 126,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "72.036",
        "ok": "69.786",
        "ko": "2.25"
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
        "total": "2017",
        "ok": "1891",
        "ko": "126"
    },
    "minResponseTime": {
        "total": "1213",
        "ok": "1213",
        "ko": "29438"
    },
    "maxResponseTime": {
        "total": "36741",
        "ok": "36687",
        "ko": "36741"
    },
    "meanResponseTime": {
        "total": "20815",
        "ok": "20116",
        "ko": "31307"
    },
    "standardDeviation": {
        "total": "8390",
        "ok": "8176",
        "ko": "2486"
    },
    "percentiles1": {
        "total": "24671",
        "ok": "23244",
        "ko": "29619"
    },
    "percentiles2": {
        "total": "27045",
        "ok": "26688",
        "ko": "34233"
    },
    "percentiles3": {
        "total": "30833",
        "ok": "29369",
        "ko": "35706"
    },
    "percentiles4": {
        "total": "34944",
        "ok": "33304",
        "ko": "36268"
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
    "count": 1891,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 126,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "36.018",
        "ok": "33.768",
        "ko": "2.25"
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
        "total": "2017",
        "ok": "2017",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5463",
        "ok": "5463",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "540",
        "ok": "540",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "percentiles1": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "percentiles2": {
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1023",
        "ok": "1023",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3672",
        "ok": "3672",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1792,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 152,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "36.018",
        "ok": "36.018",
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
