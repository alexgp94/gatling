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
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10663",
        "ok": "10663",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "percentiles1": {
        "total": "497",
        "ok": "497",
        "ko": "-"
    },
    "percentiles2": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "percentiles3": {
        "total": "716",
        "ok": "716",
        "ko": "-"
    },
    "percentiles4": {
        "total": "867",
        "ok": "867",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 983,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.493",
        "ok": "14.493",
        "ko": "-"
    }
},
contents: {
"req_prog-8ad53": {
        type: "REQUEST",
        name: "PROG",
path: "PROG",
pathFormatted: "req_prog-8ad53",
stats: {
    "name": "PROG",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "492",
        "ok": "492",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10663",
        "ok": "10663",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "631",
        "ok": "631",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "percentiles1": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "percentiles2": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "percentiles3": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "percentiles4": {
        "total": "948",
        "ok": "948",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 483,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.246",
        "ok": "7.246",
        "ko": "-"
    }
}
    },"req_am---pm-95da9": {
        type: "REQUEST",
        name: "AM / PM",
path: "AM / PM",
pathFormatted: "req_am---pm-95da9",
stats: {
    "name": "AM / PM",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "754",
        "ok": "754",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "percentiles3": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "percentiles4": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 500,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.246",
        "ok": "7.246",
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
