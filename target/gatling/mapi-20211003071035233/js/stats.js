var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "774",
        "ko": "2226"
    },
    "minResponseTime": {
        "total": "1703",
        "ok": "1703",
        "ko": "6317"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59825",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "48238",
        "ok": "14467",
        "ko": "59980"
    },
    "standardDeviation": {
        "total": "21223",
        "ok": "14320",
        "ko": "1138"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "8231",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "18784",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "53418",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59153",
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
    "count": 774,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 2226,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.634",
        "ok": "4.807",
        "ko": "13.826"
    }
},
contents: {
"req_colegiomedico-50fe7": {
        type: "REQUEST",
        name: "colegiomedico",
path: "colegiomedico",
pathFormatted: "req_colegiomedico-50fe7",
stats: {
    "name": "colegiomedico",
    "numberOfRequests": {
        "total": "3000",
        "ok": "774",
        "ko": "2226"
    },
    "minResponseTime": {
        "total": "1703",
        "ok": "1703",
        "ko": "6317"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59825",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "48238",
        "ok": "14467",
        "ko": "59980"
    },
    "standardDeviation": {
        "total": "21223",
        "ok": "14320",
        "ko": "1138"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "8231",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "18784",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "53418",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59153",
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
    "count": 774,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 2226,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.634",
        "ok": "4.807",
        "ko": "13.826"
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
