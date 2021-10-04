var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "395",
        "ko": "2605"
    },
    "minResponseTime": {
        "total": "2524",
        "ok": "2524",
        "ko": "29408"
    },
    "maxResponseTime": {
        "total": "30279",
        "ok": "30279",
        "ko": "29847"
    },
    "meanResponseTime": {
        "total": "27896",
        "ok": "17327",
        "ko": "29499"
    },
    "standardDeviation": {
        "total": "5061",
        "ok": "8113",
        "ko": "67"
    },
    "percentiles1": {
        "total": "29461",
        "ok": "18283",
        "ko": "29498"
    },
    "percentiles2": {
        "total": "29528",
        "ok": "24705",
        "ko": "29537"
    },
    "percentiles3": {
        "total": "29610",
        "ok": "28733",
        "ko": "29612"
    },
    "percentiles4": {
        "total": "29689",
        "ok": "29671",
        "ko": "29689"
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
    "count": 395,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 2605,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.868",
        "ok": "2.616",
        "ko": "17.252"
    }
},
contents: {
"req_mf-products-8-964fa": {
        type: "REQUEST",
        name: "MF Products 8",
path: "MF Products 8",
pathFormatted: "req_mf-products-8-964fa",
stats: {
    "name": "MF Products 8",
    "numberOfRequests": {
        "total": "3000",
        "ok": "395",
        "ko": "2605"
    },
    "minResponseTime": {
        "total": "2524",
        "ok": "2524",
        "ko": "29408"
    },
    "maxResponseTime": {
        "total": "30279",
        "ok": "30279",
        "ko": "29847"
    },
    "meanResponseTime": {
        "total": "27896",
        "ok": "17327",
        "ko": "29499"
    },
    "standardDeviation": {
        "total": "5061",
        "ok": "8113",
        "ko": "67"
    },
    "percentiles1": {
        "total": "29461",
        "ok": "18283",
        "ko": "29498"
    },
    "percentiles2": {
        "total": "29528",
        "ok": "24705",
        "ko": "29537"
    },
    "percentiles3": {
        "total": "29610",
        "ok": "28733",
        "ko": "29612"
    },
    "percentiles4": {
        "total": "29689",
        "ok": "29671",
        "ko": "29689"
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
    "count": 395,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 2605,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.868",
        "ok": "2.616",
        "ko": "17.252"
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
