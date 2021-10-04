var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4317",
        "ok": "1556",
        "ko": "2761"
    },
    "minResponseTime": {
        "total": "4513",
        "ok": "4513",
        "ko": "8528"
    },
    "maxResponseTime": {
        "total": "60089",
        "ok": "59988",
        "ko": "60089"
    },
    "meanResponseTime": {
        "total": "51846",
        "ok": "37402",
        "ko": "59986"
    },
    "standardDeviation": {
        "total": "14546",
        "ok": "16098",
        "ko": "979"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "38303",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "52850",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "58621",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59705",
        "ko": "60006"
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
    "count": 1556,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 2761,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.54",
        "ok": "5.962",
        "ko": "10.579"
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
        "total": "4317",
        "ok": "1556",
        "ko": "2761"
    },
    "minResponseTime": {
        "total": "4513",
        "ok": "4513",
        "ko": "8528"
    },
    "maxResponseTime": {
        "total": "60089",
        "ok": "59988",
        "ko": "60089"
    },
    "meanResponseTime": {
        "total": "51846",
        "ok": "37402",
        "ko": "59986"
    },
    "standardDeviation": {
        "total": "14546",
        "ok": "16098",
        "ko": "979"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "38303",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "52850",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "58621",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59705",
        "ko": "60006"
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
    "count": 1556,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 2761,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.54",
        "ok": "5.962",
        "ko": "10.579"
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
