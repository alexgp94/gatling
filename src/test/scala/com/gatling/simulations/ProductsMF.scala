package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class ProductsMF extends Simulation {

  object Products {
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


    val departments = {
      exec(
        http("WEB Departments")
          .get("/departments")
      )
      //        
    }
    val categories = {
      exec(
        http("APP Categories")
          .get("/getcategories")
      )
    }
    val departmentsTree = {
      exec(
        http("Promociones Exclusivas")
          .get("/department-tree?keyword=promociones-exclusivas")
      )
    }
  }

  object Search {
    val searchFiltersProductsMF = {
      //      repeat(1) {
      exec(
        http("MF Search-filters")
          .post("/search-filters")
          .body(RawFileBody("data/search-filters.json")).asJson
      )

        .exec(
          http("MF Filtered-products")
            .post("/filtered-products")
            .body(RawFileBody("data/filtered-products.json")).asJson
        ) //
    }
  }

  object Home {
    val deeplinks = {
      exec(
        http("MF burts-bees-en-promocion")
          .get("/department-tree?keyword=burts-bees-en-promocion"))
        .pause(1)

        .exec(
          http("MF Filtered-Products")
            .post("/filtered-products")
            .body(RawFileBody("data/MFdeeplink-filtered-products.json")).asJson)
        .pause(1)

        .exec(
          http("MF burts-bees-en-promocion")
            .get("/department-tree?keyword=burts-bees-en-promocion"))
        .pause(1)
    }
  }


  val httpConfig = http
    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/MFPRD")
    //    .baseUrl("http://algoliauat.backend.cindibyinkafarma.com")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("x-access-token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjOGUyYjI5NmM2ZjMyODRlYzMwYjg4NjVkNzI5M2U2MjdmYTJiOGYiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9pbmthZmFybWEtcHJvZCIsImF1ZCI6Imlua2FmYXJtYS1wcm9kIiwiYXV0aF90aW1lIjoxNjE4NjkxMTI1LCJ1c2VyX2lkIjoiTGI3YmtNYkdnWVhPRHF6S2U1V1k2dWdTbFp0MiIsInN1YiI6IkxiN2JrTWJHZ1lYT0RxektlNVdZNnVnU2xadDIiLCJpYXQiOjE2MTg3MDU4MTcsImV4cCI6MTYxODcwOTQxNywiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.iR8CZOdB0NPTsVexvyEApNjVlgZtE8dHxAgMSAgi2TkFVXIpEO0MXHhx6EygdvkXP9IT_YuLDDnLxCLF18vXveUFvV8yGgNy8TONpc33B-7NbzheLxiQwoXwjloKI6NAhOcppFChU4cBz2PisdQrXA1X1JzD6m9DMAV_2sc5RBGczNysS1foW--8t8GZ2554C70ICDsIDTMVYwWf-Qn8YkISw9r1WxDn0lAkY1Ge9OGMpOByU7g8UKLLwpFWHM61Qi7gIQniHI31s5gXOud7b1TMhyLZ9aUQ8_9hh-MNarNaCi4Qe9ZO88IH4SAos8MhaOjxOGfCIvTQDA9GlFR69A")

  //    val users = scenario("Users").exec(Products.products1, Products.products2, Products.departments, Products.categories, Products.departmentsTree, Products.searchFilters, Products.filteredProducts)
      val users = scenario("Users").exec(Products.products1, Products.products2, Products.products3, Products.products4, Products.products5, Products.products6, Products.products7, Products.products8)
  //  val users = scenario("Users").exec(Products.products1, Products.products2)
  //    val users = scenario("Users").exec(Products.searchFilters)
  //    val users = scenario("Admins").exec(Products.departments, Products.categories, Products.departmentsTree)
  //    val users = scenario("Admins").exec(Products.filteredProducts)
  //  val admins = scenario("Admins").exec(Products.products1, Products.products2, Products.departments, Products.categories, Products.departmentsTree, Products.searchFilters, Products.filteredProducts)
  //  val users = scenario("Users").exec(Identify.identityDocumentType)

//  val admin = scenario("Admins").exec(Search.searchFiltersProductsMF, Home.deeplinks)
  //  val users = scenario("Admins").exec(Home.deeplinks)

  //  setUp(
  //    admin.inject(
  //      nothingFor(1),
  //      //                  atOnceUsers(4000)
  //      rampUsers(2000) during (60 seconds)
  ////            constantUsersPerSec(2000) during (60 second))
  ////            .throttle(reachRps(100) in (40 second)
  //      //            constantUsersPerSec(20) during (10),                    //numberOfRequests = (constantUsersPerSec * during)
  //      //            rampUsersPerSec(50) to (100) during (10 seconds))      //numberOfRequests = (averageRampUsersPerSec * during)
  //    ).protocols(httpConfig))


  setUp(
    users.inject(
      constantConcurrentUsers(2000) during (100 seconds)
//              rampConcurrentUsers(100) to (800) during (40 seconds),
//                  incrementConcurrentUsers(10)
//                    .times(5)
//                    .eachLevelLasting(20)
//                    .separatedByRampsLasting(20 seconds)
//                    .startingFrom(200)
    )
      .protocols(httpConfig)
  )
    .maxDuration(2 minute)
}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.ProductsMF