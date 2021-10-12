package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class Products extends Simulation {

  object Products {
    val products1 = {
      exec(
        http("Products 1")
          .get("/products/029939,017423,029194,026706,005104,006878")).pause(1)
    }
    val products2 = {
      exec(
        http("Products 2")
          .get("/products/009817,024715,108010,141084,198002,428242")).pause(1)
    }
    val products3 = {
      exec(
        http("Products 3")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/006878,011296,025460,026706,424827,023736,002057,030271,034726,034729")).pause(1)
    }
    val products4 = {
      exec(
        http("Products 4")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/032606,013433,011527,011530,024933,003387,028259,028258,011515,028257")).pause(1)
    }
    val products5 = {
      exec(
        http("Products 5")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/017528,024306,024307,001956,034177,034178,034130,012464,004824,032603")).pause(1)
    }
    val products6 = {
      exec(
        http("Products 6")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/029884,024327,029892,004818,006036,924005,010767,026124,011681,002952")).pause(1)
    }
    val products7 = {
      exec(
        http("Products 7")
          .get("https://s3ocavo5l8.execute-api.us-east-1.amazonaws.com/prd/products/012077,425222,029724,034471,010200,002994,025396,033014,034518,025763,023736,025399,010808,010802,024674,033048,010754,032806")).pause(1)

    }
    val products8 = {
      exec(
        http("Products 8")
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

  object Search {
    val searchFiltersProducts = {
      //      repeat(1) {
      exec(
        http("Search-filters IKF")
          .post("/search-filters")
          .body(RawFileBody("data/search-filters.json")).asJson
      ).pause(1)

        .exec(
          http("Filtered-products IKFc")
            .post("/filtered-products")
            .body(RawFileBody("data/filtered-products.json")).asJson
        ).pause(1)
    }
  }

  object Home {
    val deeplinks = {
      exec(
        http("deeplinks IKF")
          .get("/department-tree?keyword=proteccion-solar---mascarillas---alcohol"))
        .pause(1)

        .exec(
          http("Filtered-Products IKF")
            .post("/filtered-products")
            .body(RawFileBody("data/deeplink-filtered-products.json")).asJson)
        .pause(1)

        .exec(
          http("deeplinks IKF")
            .get("/department-tree?keyword=proteccion-solar---mascarillas---alcohol"))
        .pause(1)
    }
  }


  val httpConfig = http
    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/PROD")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("authorization", "eyJraWQiOiJ0bWxBdm1RQXBZT3hCYU5xQTBSREZjRG5JMjhnT1hiamxrUUJTSEZwSldrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDIyYTJxdjg0YzhybWE0MTNyMzY4OGJrcSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoidGhpcmRfcGFydHlfcnNcL2FwaSIsImF1dGhfdGltZSI6MTYzNDA3NzUzOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfajNFUFRoRTBNIiwiZXhwIjoxNjM0MDgxMTM5LCJpYXQiOjE2MzQwNzc1MzksInZlcnNpb24iOjIsImp0aSI6IjMxNWVjYzc5LWJjMTktNDBjOS05MWQ4LTViMTY2ODFjZjM0NyIsImNsaWVudF9pZCI6IjQwMjJhMnF2ODRjOHJtYTQxM3IzNjg4YmtxIn0.RbHFzAZzcLcD1Kg-Rroj69PyuQQwJ3-NeWNSXESMzSXvZFvY8qg-UlII9Z7KY2OKde6WfCBIGSUEqkLwC0p3XYBYbb9JPmlrNUBx4s78FBaIS2clR72zOkhpYmysmMliCmm02uTpph8bhUbcv9F1-_zORLjoTdYQ6wp62dBTKZGWiOtiXzEm5M5d3ny3Bq0vOfX-7zD4TIpBmFNSaWzVJLLubtgJnFDzKwce-f24gyST5gmQjEOoF_LO6zlJBMpJFeWSUtAVkaNV02_l0d_ivhHICLc50oIZdZmSWlMM1d0AnvCxYmYaa-j9RA_7jzWSeQs7s0xdkB-3pqu0tdyRmQ")
    .header("x-access-token", "")


  val products = scenario("Users Products").exec(Products.products1, Products.products2, Products.products3, Products.products4, Products.products5, Products.products6, Products.products7, Products.products8)

  val departmentsCategories = scenario("Users departmentsCategories").exec(Products.departments, Products.categories)

  val deeplinks = scenario("Users Deeplinks").exec(Home.deeplinks)

  val searchProducts = scenario("Users Search Products").exec(Search.searchFiltersProducts)


  setUp(
    products.inject(
      nothingFor(1),
      rampUsers(50) during (10 seconds)
    )
      .protocols(httpConfig))

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
//  setUp(
//    searchProducts.inject(
//      nothingFor(1),
//      rampUsers(10) during (30 seconds)
//    )
//      .protocols(httpConfig))

  /* setUp(
       admin.inject(
         nothingFor(1),
         //                  atOnceUsers(4000)
 //        rampUsers(2000) during (60 seconds)
               constantUsersPerSec(4000) during (60 second))
               .throttle(reachRps(400) in (60 second)
         //            constantUsersPerSec(20) during (10),                  //numberOfRequests = (constantUsersPerSec * during)
         //            rampUsersPerSec(50) to (100) during (10 seconds))      //numberOfRequests = (averageRampUsersPerSec * during)
       ).protocols(httpConfig))
 */

  /*setUp(
    admin.inject(
      constantConcurrentUsers(2000) during (120 seconds)
//              rampConcurrentUsers(1000) to (4000) during (60 seconds))
//                .throttle(reachRps(400) in (60 second)
//                  incrementConcurrentUsers(10)
      //              .times(5)
      //              .eachLevelLasting(20)
      //              .separatedByRampsLasting(20 seconds)
      //              .startingFrom(200)
    )
      .protocols(httpConfig))*/
  //        .maxDuration(2 minute)


  /*   setUp(
     admin.inject(
       constantConcurrentUsers(3000) during (120 seconds)
       //        rampConcurrentUsers(100) to (800) during (40 seconds)
       //            incrementConcurrentUsers(10)
       //              .times(5)
       //              .eachLevelLasting(20)
       //              .separatedByRampsLasting(20 seconds)
       //              .startingFrom(200)
     )
       .protocols(httpConfig))*/

  //      .maxDuration(2 minute)


}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Products