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
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9547",
        "ok": "9547",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "597",
        "ok": "597",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "percentiles1": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "percentiles2": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4472",
        "ok": "4472",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4677,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1085,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 238,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "92.308",
        "ok": "92.308",
        "ko": "-"
    }
},
contents: {
"req_burts-bees-en-p-a5867": {
        type: "REQUEST",
        name: "burts-bees-en-promocion",
path: "burts-bees-en-promocion",
pathFormatted: "req_burts-bees-en-p-a5867",
stats: {
    "name": "burts-bees-en-promocion",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9547",
        "ok": "9547",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "734",
        "ok": "734",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "741",
        "ok": "741",
        "ko": "-"
    },
    "percentiles1": {
        "total": "674",
        "ok": "674",
        "ko": "-"
    },
    "percentiles2": {
        "total": "832",
        "ok": "832",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1187",
        "ok": "1187",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4817",
        "ok": "4817",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2734,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1070,
    "percentage": 27
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 196,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "61.538",
        "ok": "61.538",
        "ko": "-"
    }
}
    },"req_filtered-produc-7045f": {
        type: "REQUEST",
        name: "Filtered-Products",
path: "Filtered-Products",
pathFormatted: "req_filtered-produc-7045f",
stats: {
    "name": "Filtered-Products",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5778",
        "ok": "5778",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles2": {
        "total": "321",
        "ok": "321",
        "ko": "-"
    },
    "percentiles3": {
        "total": "546",
        "ok": "546",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2338",
        "ok": "2338",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1943,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 42,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30.769",
        "ok": "30.769",
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
