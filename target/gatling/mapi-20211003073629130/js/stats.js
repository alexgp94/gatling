var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "325",
        "ko": "5675"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "310",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "59703",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "22826",
        "ok": "25630",
        "ko": "22665"
    },
    "standardDeviation": {
        "total": "24290",
        "ok": "19159",
        "ko": "24542"
    },
    "percentiles1": {
        "total": "11460",
        "ok": "20829",
        "ko": "11187"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "47554",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "56713",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "58920",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 305,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 5675,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.5",
        "ok": "2.031",
        "ko": "35.469"
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
        "total": "6000",
        "ok": "325",
        "ko": "5675"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "310",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "59703",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "22826",
        "ok": "25630",
        "ko": "22665"
    },
    "standardDeviation": {
        "total": "24290",
        "ok": "19159",
        "ko": "24542"
    },
    "percentiles1": {
        "total": "11460",
        "ok": "20829",
        "ko": "11187"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "47554",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "56713",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "58920",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 305,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 5675,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.5",
        "ok": "2.031",
        "ko": "35.469"
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
