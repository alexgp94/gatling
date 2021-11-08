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
          .get("/products/006878,011296,025460,026706,424827,023736,002057,030271,034726,034729")).pause(1)
    }
    val products4 = {
      exec(
        http("IKF Products 4")
          .get("/products/032606,013433,011527,011530,024933,003387,028259,028258,011515,028257")).pause(1)
    }
    val products5 = {
      exec(
        http("IKF Products 5")
          .get("/products/017528,024306,024307,001956,034177,034178,034130,012464,004824,032603")).pause(1)
    }
    val products6 = {
      exec(
        http("IKF Products 6")
          .get("/products/029884,024327,029892,004818,006036,924005,010767,026124,011681,002952")).pause(1)
    }
    val products7 = {
      exec(
        http("IKF Products 7")
          .get("/products/012077,425222,029724,034471,010200,002994,025396,033014,034518,025763,023736,025399,010808,010802,024674,033048,010754,032806")).pause(1)

    }
    val products8 = {
      exec(
        http("IKF Products 8")
          .get("/products/034441,029747,011639,003408,034431,034409,011642,431493")).pause(1)
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
          .get("/department-tree?keyword=fortalece-tu-cabello-con-tio-nacho"))
        .pause(1)

        .exec(
          http("Filtered Products IKF")
            .post("/filtered-products")
            .body(RawFileBody("data/deeplink-filtered-products.json")).asJson)
        .pause(1)

        .exec(
          http("Deeplinks IKF")
            .get("/department-tree?keyword=fortalece-tu-cabello-con-tio-nacho"))
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
    .header("authorization", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmYmRmMjQxZTdjM2E2NTEzNTYwNmRkYzFmZWQyYzU1MjI2MzBhODciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWxleGFuZGVyIGdhcmNpYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHakFwVnpRd2d0SFF3NHpvODZRb3hKbkNrU2ZDekFSSjRLREh3MmsiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaW5rYWZhcm1hLXByb2QiLCJhdWQiOiJpbmthZmFybWEtcHJvZCIsImF1dGhfdGltZSI6MTYzMjUyMzUxNSwidXNlcl9pZCI6IlZQQm9xWElNR2lPelhTVnZFOXdaa0RCOEV3ZTIiLCJzdWIiOiJWUEJvcVhJTUdpT3pYU1Z2RTl3WmtEQjhFd2UyIiwiaWF0IjoxNjM1MDU3ODA4LCJleHAiOjE2MzUwNjE0MDgsImVtYWlsIjoiYWxleGNncDk0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE2MjQzNDI3ODc5NDUwODgwNjI1Il0sImVtYWlsIjpbImFsZXhjZ3A5NEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.f-ZWC3NdmUbvvi557fQICO8wamJHrdfAroP94SuK-ciVYyJ4thWNFWKTYjih_qIENtUMzI963unW8pWCGf_WZ3ya3LQEcFBQ2_cjhBJs39A-j5nFww3bVE8A8UrJK4zObgs8ArtUyAYBjI-fIAbOh2gAkh6SnE3fotqlmPVcVHd85s-U8pOW39gUczP_l3Z5OJSskQid3DgxXqij1Xp9R1hIdlk06dCIJM5XscoPFXt_Y7plSL-OBncwZwks5PbWujqLY_JzyzswVo6UY6e7npb2H_YtqHm7tpq-diqhQBSRl2e0mZriMvAiizeFH2oPUifqgHTlyBeFr0tErTKIiQ")
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
      constantConcurrentUsers(50) during (10 seconds),
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