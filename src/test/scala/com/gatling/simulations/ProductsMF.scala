package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class ProductsMF extends Simulation {

  object ProductsMF {
    val products1 = {
      exec(
        http("MF Products 1")
          .get("/products/016887,003417,033303,030296,026369,025421,029518,029548,029550,024853,024200"))
    }
    val products2 = {
      exec(
        http("MF Products 2")
          .get("/products/020118,015308,013898,016328,011530,011528,023956,023732,012614,427123,427122"))
    }

    val products3 = {
      exec(
        http("MF Products 3")
          .get("/products/008306,030233,011669,033220,033223,033231,004594,431046,033054,026757,025270"))
    }
    val products4 = {
      exec(
        http("MF Products 4")
          .get("/products/024726,011197,020774,025457,005434,922868,024728,922871,011187,922867,424158"))
    }
    val products5 = {
      exec(
        http("MF Products 5")
          .get("/products/032603,028971,011253,024211,428242,024881,024307,024306,024297,023922,011029"))
    }
    val products6 = {
      exec(
        http("MF Products 6")
          .get("/products/162144,024881,011029,024306,025763,227107,014009,101068,108020"))
    }
    val products7 = {
      exec(
        http("MF Products 7")
          .get("/products/016905,025064,017138,019787,024216,017539,027295,014026,025065,006199"))

    }
    val products8 = {
      exec(
        http("MF Products 8")
          .get("/products/034518,013531,101042,025763,023736,029588,144052,032717,032603,032806"))
    }


    val departmentsMF = {
      exec(
        http("WEB Departments MF")
          .get("/departments")
      )
      //
    }
    val categoriesMF = {
      exec(
        http("APP Categories MF")
          .get("/getcategories")
      )
    }
  }

  object SearchMF {
    val searchFiltersProductsMF = {
      //      repeat(1) {
      exec(
        http("Search Filters MF")
          .post("/search-filters")
          .body(RawFileBody("data/search-filters.json")).asJson
      )

        .exec(
          http("Filtered Products MF")
            .post("/filtered-products")
            .body(RawFileBody("data/filtered-products.json")).asJson
        ) //
    }
  }

  object HomeMF {
    val deeplinksMF = {
      exec(
        http("Deeplinks MF")
          .get("/department-tree?keyword=loreal-descuentos"))
        .pause(1)

        .exec(
          http("Filtered Products MF")
            .post("/filtered-products")
            .body(RawFileBody("data/deeplink-filtered-productsMF.json")).asJson)
        .pause(1)

        .exec(
          http("Deeplinks MF")
            .get("/department-tree?keyword=loreal-descuentos"))
        .pause(1)
    }
  }


  val httpConfig = http
    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/MFPRD")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("authorization", "eyJraWQiOiJ0bWxBdm1RQXBZT3hCYU5xQTBSREZjRG5JMjhnT1hiamxrUUJTSEZwSldrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDIyYTJxdjg0YzhybWE0MTNyMzY4OGJrcSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoidGhpcmRfcGFydHlfcnNcL2FwaSIsImF1dGhfdGltZSI6MTYzNDA3NzUzOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfajNFUFRoRTBNIiwiZXhwIjoxNjM0MDgxMTM5LCJpYXQiOjE2MzQwNzc1MzksInZlcnNpb24iOjIsImp0aSI6IjMxNWVjYzc5LWJjMTktNDBjOS05MWQ4LTViMTY2ODFjZjM0NyIsImNsaWVudF9pZCI6IjQwMjJhMnF2ODRjOHJtYTQxM3IzNjg4YmtxIn0.RbHFzAZzcLcD1Kg-Rroj69PyuQQwJ3-NeWNSXESMzSXvZFvY8qg-UlII9Z7KY2OKde6WfCBIGSUEqkLwC0p3XYBYbb9JPmlrNUBx4s78FBaIS2clR72zOkhpYmysmMliCmm02uTpph8bhUbcv9F1-_zORLjoTdYQ6wp62dBTKZGWiOtiXzEm5M5d3ny3Bq0vOfX-7zD4TIpBmFNSaWzVJLLubtgJnFDzKwce-f24gyST5gmQjEOoF_LO6zlJBMpJFeWSUtAVkaNV02_l0d_ivhHICLc50oIZdZmSWlMM1d0AnvCxYmYaa-j9RA_7jzWSeQs7s0xdkB-3pqu0tdyRmQ")
    .header("x-access-token", "")


  val products = scenario("Users Products").exec(ProductsMF.products1, ProductsMF.products2, ProductsMF.products3, ProductsMF.products4, ProductsMF.products5, ProductsMF.products6, ProductsMF.products7, ProductsMF.products8)

  val departmentsCategories = scenario("Users departmentsCategories").exec(ProductsMF.departmentsMF, ProductsMF.categoriesMF)

  val deeplinks = scenario("Users Deeplinks").exec(HomeMF.deeplinksMF)

  val searchProducts = scenario("Users Search Products").exec(SearchMF.searchFiltersProductsMF)

  val allProducts = scenario("Users Products").exec(ProductsMF.products1, ProductsMF.products2, ProductsMF.products3, ProductsMF.products4, ProductsMF.products5, ProductsMF.products6, ProductsMF.products7, ProductsMF.products8, ProductsMF.departmentsMF, ProductsMF.categoriesMF, HomeMF.deeplinksMF, SearchMF.searchFiltersProductsMF)
  //  setUp(
  //    searchProducts.inject(
  //      nothingFor(1),
  //      rampUsers(10) during (30 seconds)
  //    )
  //      .protocols(httpConfig))
  setUp(
    allProducts.inject(
      constantConcurrentUsers(2000) during (120 seconds),
//      rampConcurrentUsers(20) to (40) during (10 seconds),
      //                  incrementConcurrentUsers(10)
      //                    .times(5)
      //                    .eachLevelLasting(20)
      //                    .separatedByRampsLasting(20 seconds)
      //                    .startingFrom(200)
    )
      .protocols(httpConfig))
  //    .maxDuration(2 minute)
}
//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.ProductsMF