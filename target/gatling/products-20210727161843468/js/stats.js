var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1943",
        "ko": "57"
    },
    "minResponseTime": {
        "total": "447",
        "ok": "447",
        "ko": "11184"
    },
    "maxResponseTime": {
        "total": "29710",
        "ok": "29671",
        "ko": "29710"
    },
    "meanResponseTime": {
        "total": "12324",
        "ok": "11838",
        "ko": "28897"
    },
    "standardDeviation": {
        "total": "8029",
        "ok": "7609",
        "ko": "2370"
    },
    "percentiles1": {
        "total": "11052",
        "ok": "10698",
        "ko": "29186"
    },
    "percentiles2": {
        "total": "18431",
        "ok": "17778",
        "ko": "29260"
    },
    "percentiles3": {
        "total": "27188",
        "ok": "25326",
        "ko": "29377"
    },
    "percentiles4": {
        "total": "29217",
        "ok": "28362",
        "ko": "29679"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1927,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 57,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30.303",
        "ok": "29.439",
        "ko": "0.864"
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
        "ok": "997",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "1114",
        "ok": "1114",
        "ko": "11184"
    },
    "maxResponseTime": {
        "total": "29710",
        "ok": "29671",
        "ko": "29710"
    },
    "meanResponseTime": {
        "total": "8402",
        "ok": "8356",
        "ko": "23516"
    },
    "standardDeviation": {
        "total": "6584",
        "ok": "6523",
        "ko": "8720"
    },
    "percentiles1": {
        "total": "6373",
        "ok": "6362",
        "ko": "29655"
    },
    "percentiles2": {
        "total": "11578",
        "ok": "11351",
        "ko": "29683"
    },
    "percentiles3": {
        "total": "21974",
        "ok": "21843",
        "ko": "29705"
    },
    "percentiles4": {
        "total": "28570",
        "ok": "27783",
        "ko": "29709"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 990,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.152",
        "ok": "15.106",
        "ko": "0.045"
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
        "ok": "946",
        "ko": "54"
    },
    "minResponseTime": {
        "total": "447",
        "ok": "447",
        "ko": "29106"
    },
    "maxResponseTime": {
        "total": "29387",
        "ok": "29229",
        "ko": "29387"
    },
    "meanResponseTime": {
        "total": "16246",
        "ok": "15507",
        "ko": "29196"
    },
    "standardDeviation": {
        "total": "7404",
        "ok": "6916",
        "ko": "82"
    },
    "percentiles1": {
        "total": "16481",
        "ok": "15948",
        "ko": "29181"
    },
    "percentiles2": {
        "total": "21624",
        "ok": "20455",
        "ko": "29242"
    },
    "percentiles3": {
        "total": "29109",
        "ok": "26547",
        "ko": "29359"
    },
    "percentiles4": {
        "total": "29273",
        "ok": "28361",
        "ko": "29380"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 937,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 54,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.152",
        "ok": "14.333",
        "ko": "0.818"
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
