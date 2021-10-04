var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "872",
        "ko": "128"
    },
    "minResponseTime": {
        "total": "1983",
        "ok": "1983",
        "ko": "10638"
    },
    "maxResponseTime": {
        "total": "31285",
        "ok": "29403",
        "ko": "31285"
    },
    "meanResponseTime": {
        "total": "11630",
        "ok": "9103",
        "ko": "28845"
    },
    "standardDeviation": {
        "total": "9500",
        "ok": "7213",
        "ko": "3282"
    },
    "percentiles1": {
        "total": "8216",
        "ok": "5839",
        "ko": "29392"
    },
    "percentiles2": {
        "total": "17559",
        "ok": "13474",
        "ko": "29485"
    },
    "percentiles3": {
        "total": "29422",
        "ok": "24939",
        "ko": "29570"
    },
    "percentiles4": {
        "total": "29526",
        "ok": "28477",
        "ko": "31262"
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
    "count": 872,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "count": 128,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.625",
        "ok": "13.625",
        "ko": "2"
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
        "ok": "496",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "2614",
        "ok": "2614",
        "ko": "10638"
    },
    "maxResponseTime": {
        "total": "13559",
        "ok": "13559",
        "ko": "10689"
    },
    "meanResponseTime": {
        "total": "4233",
        "ok": "4181",
        "ko": "10658"
    },
    "standardDeviation": {
        "total": "2123",
        "ok": "2051",
        "ko": "19"
    },
    "percentiles1": {
        "total": "3315",
        "ok": "3312",
        "ko": "10653"
    },
    "percentiles2": {
        "total": "3938",
        "ok": "3881",
        "ko": "10664"
    },
    "percentiles3": {
        "total": "9335",
        "ok": "8925",
        "ko": "10684"
    },
    "percentiles4": {
        "total": "11317",
        "ok": "11354",
        "ko": "10688"
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
    "count": 496,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.812",
        "ok": "7.75",
        "ko": "0.062"
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
        "ok": "376",
        "ko": "124"
    },
    "minResponseTime": {
        "total": "1983",
        "ok": "1983",
        "ko": "29178"
    },
    "maxResponseTime": {
        "total": "31285",
        "ok": "29403",
        "ko": "31285"
    },
    "meanResponseTime": {
        "total": "19027",
        "ok": "15596",
        "ko": "29432"
    },
    "standardDeviation": {
        "total": "8158",
        "ok": "6402",
        "ko": "324"
    },
    "percentiles1": {
        "total": "17559",
        "ok": "15117",
        "ko": "29397"
    },
    "percentiles2": {
        "total": "29188",
        "ok": "19639",
        "ko": "29487"
    },
    "percentiles3": {
        "total": "29503",
        "ok": "27688",
        "ko": "29574"
    },
    "percentiles4": {
        "total": "29638",
        "ok": "29159",
        "ko": "31262"
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
    "count": 376,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 124,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.812",
        "ok": "5.875",
        "ko": "1.938"
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