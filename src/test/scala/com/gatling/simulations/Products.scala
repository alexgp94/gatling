package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class Products extends Simulation {

  object Products {
    val products1 = {
      exec(
        http("IKF Products 1")
          .get("/products/029939,017423,029194,026706,005104,006878")).pause(1)
    }
    val products2 = {
      exec(
        http("IKF Products 2")
          .get("/products/009817,024715,108010,141084,198002,428242")).pause(1)
    }
    val products3 = {
      exec(
        http("IKF Products 3")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/006878,011296,025460,026706,424827,023736,002057,030271,034726,034729")).pause(1)
    }
    val products4 = {
      exec(
        http("IKF Products 4")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/032606,013433,011527,011530,024933,003387,028259,028258,011515,028257")).pause(1)
    }
    val products5 = {
      exec(
        http("IKF Products 5")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/017528,024306,024307,001956,034177,034178,034130,012464,004824,032603")).pause(1)
    }
    val products6 = {
      exec(
        http("IKF Products 6")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/029884,024327,029892,004818,006036,924005,010767,026124,011681,002952")).pause(1)
    }
    val products7 = {
      exec(
        http("IKF Products 7")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/012077,425222,029724,034471,010200,002994,025396,033014,034518,025763,023736,025399,010808,010802,024674,033048,010754,032806")).pause(1)

    }
    val products8 = {
      exec(
        http("IKF Products 8")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/034441,029747,011639,003408,034431,034409,011642,431493")).pause(1)
    }

    val departments = {
      exec(
        http("WEB Departments IKF")
          .get("/departments")
      ).pause(1)
    }
    val categories = {
      exec(
        http("APP Categories IKF")
          .get("/getcategories")
      ).pause(1)
    }
  }

  object Home {
    val deeplinks = {
      exec(
        http("Deeplinks IKF")
          .get("/department-tree?keyword=proteccion-solar---mascarillas---alcohol"))
        .pause(1)

        .exec(
          http("Filtered Products IKF")
            .post("/filtered-products")
            .body(RawFileBody("data/deeplink-filtered-products.json")).asJson)
        .pause(1)

        .exec(
          http("Deeplinks IKF")
            .get("/department-tree?keyword=proteccion-solar---mascarillas---alcohol"))
        .pause(1)
    }
  }

  object Search {
    val searchFiltersProducts = {
      //      repeat(1) {
      exec(
        http("Search Filters IKF")
          .post("/search-filters")
          .body(RawFileBody("data/search-filters.json")).asJson
      ).pause(1)

        .exec(
          http("Filtered Products IKF")
            .post("/filtered-products")
            .body(RawFileBody("data/filtered-products.json")).asJson
        ).pause(1)
    }
  }


  val httpConfig = http
    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/PROD")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("authorization", "eyJraWQiOiJ0bWxBdm1RQXBZT3hCYU5xQTBSREZjRG5JMjhnT1hiamxrUUJTSEZwSldrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDIyYTJxdjg0YzhybWE0MTNyMzY4OGJrcSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoidGhpcmRfcGFydHlfcnNcL2FwaSIsImF1dGhfdGltZSI6MTYzNDM2MzU2MSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfajNFUFRoRTBNIiwiZXhwIjoxNjM0MzY3MTYxLCJpYXQiOjE2MzQzNjM1NjEsInZlcnNpb24iOjIsImp0aSI6IjkwYmJjNTg0LTk1NDMtNDhmNy05YWM0LTk4OWQ3MjVjNzljYSIsImNsaWVudF9pZCI6IjQwMjJhMnF2ODRjOHJtYTQxM3IzNjg4YmtxIn0.N5ntka55yJrm4hyk0SQyLTSE0759OQn6RiHCODqetrI9ZGAvevxr6sc99e8jPoNIUQcL_lwbrGc-3yYxwRPT-km7YCbFOIBJSfS1hBSPgk7PcfJPgIRFa5xSmdmLK5qntmiJ8sUdRcJRSFs1OvAmzLkH4gsjXRgxzPab6mnhY_hgZEwcjgGK_MocD-PuPIHRklr5fE80VcXP56UynBacvsCehtRoZ-k9M0GnBHfkIyAXeOksoBCQBw7mxMAYoH0geqXwevyZ2c2FJq2cCI2DTXbJARskmX6rFY61EmkiSzUAiIfGDnztsF07ByTSBIRHOgfFRdTmYxM4Sq0jBaMqZQ")
    .header("x-access-token", "")


  val products = scenario("Users Products").exec(Products.products1, Products.products2, Products.products3, Products.products4, Products.products5, Products.products6, Products.products7, Products.products8)

  val departmentsCategories = scenario("Users departmentsCategories").exec(Products.departments, Products.categories)

  val deeplinks = scenario("Users Deeplinks").exec(Home.deeplinks)

  val searchProducts = scenario("Users Search Products").exec(Search.searchFiltersProducts)

  val allProducts = scenario("Users Products").exec(Products.products1, Products.products2, Products.products3, Products.products4, Products.products5, Products.products6, Products.products7, Products.products8, Products.departments, Products.categories, Home.deeplinks, Search.searchFiltersProducts)

  //  setUp(
  //    products.inject(
  //      nothingFor(1),
  //      rampUsers(50) during (10 seconds)
  //    )
  //      .protocols(httpConfig))

  //  setUp(
  //    departmentsCategories.inject(
  //      nothingFor(1),
  //      rampUsers(10) during (30 seconds)
  //    )
  //      .protocols(httpConfig))
  //
  //  setUp(
  //    deeplinks.inject(
  //      nothingFor(1),
  //      rampUsers(10) during (30 seconds)
  //    )
  //      .protocols(httpConfig))
  //


  /*  setUp(
      products.inject(
        nothingFor(1),
        //atOnceUsers(4000)
        //rampUsers(2000) during (60 seconds)
        constantUsersPerSec(20) during (10 second))
        .throttle(reachRps(10) in (10 second)
          //            constantUsersPerSec(20) during (10),                  //numberOfRequests = (constantUsersPerSec * during)
          //            rampUsersPerSec(50) to (100) during (10 seconds))      //numberOfRequests = (averageRampUsersPerSec * during)
        ).protocols(httpConfig))*/


  //  setUp(
  //    searchProducts.inject(
  //      nothingFor(1),
  //      rampUsers(10) during (30 seconds)
  //    )
  //      .protocols(httpConfig))
  setUp(
    products.inject(
      constantConcurrentUsers(2000) during (180 seconds),
//      rampConcurrentUsers(2000) to (4000) during (60 seconds),
      //                  incrementConcurrentUsers(10)
      //                    .times(5)
      //                    .eachLevelLasting(20)
      //                    .separatedByRampsLasting(20 seconds)
      //                    .startingFrom(200)
    )
      .protocols(httpConfig))
  //    .maxDuration(2 minute)


}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Products