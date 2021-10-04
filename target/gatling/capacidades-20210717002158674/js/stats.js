var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1046",
        "ok": "753",
        "ko": "293"
    },
    "minResponseTime": {
        "total": "14542",
        "ok": "14542",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "59996",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "54030",
        "ok": "51706",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "9120",
        "ok": "9810",
        "ko": "1"
    },
    "percentiles1": {
        "total": "55875",
        "ok": "54621",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "56172",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "57434",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59879",
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
    "count": 753,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 293,
    "percentage": 28
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.763",
        "ok": "9.908",
        "ko": "3.855"
    }
},
contents: {
"req_get-ubigeo-73159": {
        type: "REQUEST",
        name: "Get Ubigeo",
path: "Get Ubigeo",
pathFormatted: "req_get-ubigeo-73159",
stats: {
    "name": "Get Ubigeo",
    "numberOfRequests": {
        "total": "1046",
        "ok": "753",
        "ko": "293"
    },
    "minResponseTime": {
        "total": "14542",
        "ok": "14542",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "59996",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "54030",
        "ok": "51706",
        "ko": "60004"
    },
    "standardDeviation": {
        "total": "9120",
        "ok": "9810",
        "ko": "1"
    },
    "percentiles1": {
        "total": "55875",
        "ok": "54621",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "56172",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "57434",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59879",
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
    "count": 753,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 293,
    "percentage": 28
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.763",
        "ok": "9.908",
        "ko": "3.855"
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
