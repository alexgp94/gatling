var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6107",
        "ok": "2086",
        "ko": "4021"
    },
    "minResponseTime": {
        "total": "5056",
        "ok": "5056",
        "ko": "6286"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "59967",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "53552",
        "ok": "41139",
        "ko": "59991"
    },
    "standardDeviation": {
        "total": "12072",
        "ok": "13829",
        "ko": "847"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "44310",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "52303",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "58264",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59661",
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
    "count": 2086,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 4021,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.917",
        "ok": "5.778",
        "ko": "11.139"
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
        "total": "6107",
        "ok": "2086",
        "ko": "4021"
    },
    "minResponseTime": {
        "total": "5056",
        "ok": "5056",
        "ko": "6286"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "59967",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "53552",
        "ok": "41139",
        "ko": "59991"
    },
    "standardDeviation": {
        "total": "12072",
        "ok": "13829",
        "ko": "847"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "44310",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "52303",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "58264",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59661",
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
    "count": 2086,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 4021,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.917",
        "ok": "5.778",
        "ko": "11.139"
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