var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6831",
        "ok": "6823",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "174",
        "ok": "174",
        "ko": "10833"
    },
    "maxResponseTime": {
        "total": "31075",
        "ok": "31075",
        "ko": "11857"
    },
    "meanResponseTime": {
        "total": "3971",
        "ok": "3963",
        "ko": "11464"
    },
    "standardDeviation": {
        "total": "3395",
        "ok": "3387",
        "ko": "300"
    },
    "percentiles1": {
        "total": "2671",
        "ok": "2669",
        "ko": "11474"
    },
    "percentiles2": {
        "total": "6087",
        "ok": "6075",
        "ko": "11625"
    },
    "percentiles3": {
        "total": "11156",
        "ok": "11087",
        "ko": "11835"
    },
    "percentiles4": {
        "total": "14185",
        "ok": "14186",
        "ko": "11853"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 715,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 492,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5616,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.61",
        "ok": "166.415",
        "ko": "0.195"
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
        "total": "4554",
        "ok": "4546",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "10833"
    },
    "maxResponseTime": {
        "total": "31075",
        "ok": "31075",
        "ko": "11857"
    },
    "meanResponseTime": {
        "total": "5049",
        "ok": "5038",
        "ko": "11464"
    },
    "standardDeviation": {
        "total": "3586",
        "ok": "3579",
        "ko": "300"
    },
    "percentiles1": {
        "total": "4087",
        "ok": "4074",
        "ko": "11474"
    },
    "percentiles2": {
        "total": "7316",
        "ok": "7297",
        "ko": "11625"
    },
    "percentiles3": {
        "total": "12253",
        "ok": "12258",
        "ko": "11835"
    },
    "percentiles4": {
        "total": "14950",
        "ok": "14950",
        "ko": "11853"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 307,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 102,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4137,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "111.073",
        "ok": "110.878",
        "ko": "0.195"
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
        "total": "2277",
        "ok": "2277",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12235",
        "ok": "12235",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1816",
        "ok": "1816",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1372",
        "ok": "1372",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2437",
        "ok": "2437",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3744",
        "ok": "3744",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7023",
        "ok": "7023",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 408,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 390,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1479,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.537",
        "ok": "55.537",
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