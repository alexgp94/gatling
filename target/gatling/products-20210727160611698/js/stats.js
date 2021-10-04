var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1604",
        "ko": "396"
    },
    "minResponseTime": {
        "total": "572",
        "ok": "572",
        "ko": "11433"
    },
    "maxResponseTime": {
        "total": "32255",
        "ok": "29497",
        "ko": "32255"
    },
    "meanResponseTime": {
        "total": "14778",
        "ok": "11597",
        "ko": "27661"
    },
    "standardDeviation": {
        "total": "9489",
        "ok": "7634",
        "ko": "3424"
    },
    "percentiles1": {
        "total": "13773",
        "ok": "10427",
        "ko": "29136"
    },
    "percentiles2": {
        "total": "22702",
        "ok": "17158",
        "ko": "29229"
    },
    "percentiles3": {
        "total": "29232",
        "ok": "25829",
        "ko": "29466"
    },
    "percentiles4": {
        "total": "29482",
        "ok": "28862",
        "ko": "29821"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1596,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 396,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.096",
        "ok": "19.325",
        "ko": "4.771"
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
        "ok": "980",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "1146",
        "ok": "1146",
        "ko": "11433"
    },
    "maxResponseTime": {
        "total": "29990",
        "ok": "29497",
        "ko": "29990"
    },
    "meanResponseTime": {
        "total": "9377",
        "ok": "9000",
        "ko": "27843"
    },
    "standardDeviation": {
        "total": "7332",
        "ok": "6866",
        "ko": "5466"
    },
    "percentiles1": {
        "total": "7819",
        "ok": "7536",
        "ko": "29655"
    },
    "percentiles2": {
        "total": "13569",
        "ok": "13290",
        "ko": "29740"
    },
    "percentiles3": {
        "total": "25607",
        "ok": "23524",
        "ko": "29951"
    },
    "percentiles4": {
        "total": "29639",
        "ok": "28226",
        "ko": "29982"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 974,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 20,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.048",
        "ok": "11.807",
        "ko": "0.241"
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
        "ok": "624",
        "ko": "376"
    },
    "minResponseTime": {
        "total": "572",
        "ok": "572",
        "ko": "14705"
    },
    "maxResponseTime": {
        "total": "32255",
        "ok": "29376",
        "ko": "32255"
    },
    "meanResponseTime": {
        "total": "20178",
        "ok": "15675",
        "ko": "27651"
    },
    "standardDeviation": {
        "total": "8245",
        "ok": "6967",
        "ko": "3280"
    },
    "percentiles1": {
        "total": "20984",
        "ok": "16260",
        "ko": "29132"
    },
    "percentiles2": {
        "total": "29114",
        "ok": "21100",
        "ko": "29219"
    },
    "percentiles3": {
        "total": "29261",
        "ok": "26862",
        "ko": "29339"
    },
    "percentiles4": {
        "total": "29356",
        "ok": "29008",
        "ko": "29445"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 622,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 376,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.048",
        "ok": "7.518",
        "ko": "4.53"
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
