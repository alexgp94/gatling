var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "4043",
        "ko": "1957"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "29102"
    },
    "maxResponseTime": {
        "total": "29635",
        "ok": "29360",
        "ko": "29635"
    },
    "meanResponseTime": {
        "total": "10546",
        "ok": "1544",
        "ko": "29143"
    },
    "standardDeviation": {
        "total": "13473",
        "ok": "4577",
        "ko": "59"
    },
    "percentiles1": {
        "total": "654",
        "ok": "550",
        "ko": "29129"
    },
    "percentiles2": {
        "total": "29114",
        "ok": "656",
        "ko": "29147"
    },
    "percentiles3": {
        "total": "29157",
        "ok": "11157",
        "ko": "29229"
    },
    "percentiles4": {
        "total": "29282",
        "ok": "25941",
        "ko": "29471"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3713,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 265,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 1957,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.667",
        "ok": "28.076",
        "ko": "13.59"
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
        "ok": "3857",
        "ko": "143"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "29106"
    },
    "maxResponseTime": {
        "total": "29635",
        "ok": "29360",
        "ko": "29635"
    },
    "meanResponseTime": {
        "total": "1693",
        "ok": "674",
        "ko": "29197"
    },
    "standardDeviation": {
        "total": "5634",
        "ok": "1958",
        "ko": "133"
    },
    "percentiles1": {
        "total": "549",
        "ok": "545",
        "ko": "29138"
    },
    "percentiles2": {
        "total": "654",
        "ok": "645",
        "ko": "29190"
    },
    "percentiles3": {
        "total": "3391",
        "ok": "775",
        "ko": "29512"
    },
    "percentiles4": {
        "total": "29183",
        "ok": "8844",
        "ko": "29609"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3713,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 79,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 143,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.778",
        "ok": "26.785",
        "ko": "0.993"
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
        "ok": "186",
        "ko": "1814"
    },
    "minResponseTime": {
        "total": "8739",
        "ok": "8739",
        "ko": "29102"
    },
    "maxResponseTime": {
        "total": "29593",
        "ok": "29203",
        "ko": "29593"
    },
    "meanResponseTime": {
        "total": "28252",
        "ok": "19601",
        "ko": "29139"
    },
    "standardDeviation": {
        "total": "3293",
        "ok": "5835",
        "ko": "45"
    },
    "percentiles1": {
        "total": "29126",
        "ok": "19888",
        "ko": "29129"
    },
    "percentiles2": {
        "total": "29144",
        "ok": "25041",
        "ko": "29146"
    },
    "percentiles3": {
        "total": "29204",
        "ok": "28172",
        "ko": "29215"
    },
    "percentiles4": {
        "total": "29325",
        "ok": "28792",
        "ko": "29332"
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
    "count": 186,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 1814,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.889",
        "ok": "1.292",
        "ko": "12.597"
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
