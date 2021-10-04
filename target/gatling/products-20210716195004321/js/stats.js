var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3954",
        "ok": "3283",
        "ko": "671"
    },
    "minResponseTime": {
        "total": "225",
        "ok": "225",
        "ko": "29419"
    },
    "maxResponseTime": {
        "total": "36555",
        "ok": "34765",
        "ko": "36555"
    },
    "meanResponseTime": {
        "total": "10872",
        "ok": "6961",
        "ko": "30006"
    },
    "standardDeviation": {
        "total": "12194",
        "ok": "9406",
        "ko": "1558"
    },
    "percentiles1": {
        "total": "3322",
        "ok": "607",
        "ko": "29526"
    },
    "percentiles2": {
        "total": "22963",
        "ok": "13754",
        "ko": "29595"
    },
    "percentiles3": {
        "total": "29609",
        "ok": "25796",
        "ko": "33922"
    },
    "percentiles4": {
        "total": "33759",
        "ok": "31725",
        "ko": "36368"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1882,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 92,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1309,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 671,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.017",
        "ok": "55.644",
        "ko": "11.373"
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
        "total": "1977",
        "ok": "1306",
        "ko": "671"
    },
    "minResponseTime": {
        "total": "3413",
        "ok": "3413",
        "ko": "29419"
    },
    "maxResponseTime": {
        "total": "36555",
        "ok": "34765",
        "ko": "36555"
    },
    "meanResponseTime": {
        "total": "21293",
        "ok": "16816",
        "ko": "30006"
    },
    "standardDeviation": {
        "total": "8954",
        "ok": "7814",
        "ko": "1558"
    },
    "percentiles1": {
        "total": "22964",
        "ok": "17284",
        "ko": "29525"
    },
    "percentiles2": {
        "total": "29489",
        "ok": "22795",
        "ko": "29595"
    },
    "percentiles3": {
        "total": "31671",
        "ok": "29459",
        "ko": "33922"
    },
    "percentiles4": {
        "total": "36017",
        "ok": "32157",
        "ko": "36368"
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
    "count": 1306,
    "percentage": 66
},
    "group4": {
    "name": "failed",
    "count": 671,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.508",
        "ok": "22.136",
        "ko": "11.373"
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
        "total": "1977",
        "ok": "1977",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3230",
        "ok": "3230",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles1": {
        "total": "406",
        "ok": "406",
        "ko": "-"
    },
    "percentiles2": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "percentiles3": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1013",
        "ok": "1013",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1882,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 92,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.508",
        "ok": "33.508",
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
