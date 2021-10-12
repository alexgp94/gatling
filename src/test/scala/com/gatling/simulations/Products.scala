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
          .get("/products/420863,427640,144052,139064,425313,425311,426130,424202,406774,406195,406713,428666,261241")).pause(1)
    }
    val products2 = {
      exec(
        http("Products 2")
          .get("/products/261327,238072,425029,428509,425278,424773,427122,427123,429265,429264,423594,425691,922782")).pause(1)
    }
    val products3 = {
      exec(
        http("Products 3")
          .get("/products/922779,922775,922888,424157,424158,426227,425222,904163,189039,189003,189002,911915,429782")).pause(1)
    }
    val products4 = {
      exec(
        http("Products 4")
          .get("/products/908188,908473,428189,121030,428857,906201,429164,428856,170195,150086,150087,150030,150044,150055,150032")).pause(1)
    }
    val products5 = {
      exec(
        http("MF Products 5")
          .get("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/MFPRD/products/261099,427564,426068,426074,426069,900034,429961,423708,900137,426598,900573,908561")).pause(1)
    }
    val products6 = {
      exec(
        http("MF Products 6")
          .get("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/MFPRD/products/900420,900421,701197,424008,701389,108024,108020,424234,424236,138117,420573,427809")).pause(1)
    }
    val products7 = {
      exec(
        http("MF Products 7")
          .get("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/MFPRD/products/427714,506055,429584,428499,421958,424744,421375,264050,324071,324070")).pause(1)

    }
    val products8 = {
      exec(
        http("MF Products 8")
          .get("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/MFPRD/products/011666,431639,431637,003485,025737,431634,425278,009235,012398,005135,422700,003411,016450,424773")).pause(1)
    }


    val departments = {
      exec(
        http("WEB Departments cyber-wow2")
          .get("/departments")
      ).pause(1)
    }
    val categories = {
      exec(
        http("APP Categories cyber-wow2")
          .get("/getcategories")
      ).pause(1)
    }
    val departmentsTree = {
      exec(
        http("WEB Cyber-INKA")
          .get("/department-tree?keyword=cyber-inka")
      ).pause(1)
    }

  }

  object Search {
    val searchFiltersProducts = {
      //      repeat(1) {
      exec(
        http("Search-filters")
          .post("/search-filters")
          .body(RawFileBody("data/search-filters.json")).asJson
      ).pause(1)

        .exec(
          http("Filtered-products")
            .post("/filtered-products")
            .body(RawFileBody("data/filtered-products.json")).asJson
        ) //
    }
  }

  object Home {
    val deeplinks = {
      exec(
        http("deeplinks IKF")
          .get("PROD/department-tree?keyword=este-invierno-tu-salud-es-primero"))
        .pause(1)

        .exec(
          http("Filtered-Products IKF")
            .post("PROD/filtered-products")
            .body(RawFileBody("data/deeplink-filtered-products.json")).asJson)
        .pause(1)

        .exec(
          http("deeplinks IKF")
            .get("PROD/department-tree?keyword=este-invierno-tu-salud-es-primero"))
        .pause(1)
    }
  }

  object HomeMF {
    val deeplinksMF = {
      exec(
        http("deeplinks MF")
          .get("MFPRD/department-tree?keyword=loreal-descuentos"))
        .pause(1)

        .exec(
          http("Filtered-Products MF")
            .post("MFPRD/filtered-products")
            .body(RawFileBody("data/deeplink-filtered-productsMF.json")).asJson)
        .pause(1)

        .exec(
          http("deeplinks MF")
            .get("MFPRD/department-tree?keyword=loreal-descuentos"))
        .pause(1)
    }
  }


  val httpConfig = http
        .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/PROD")
    //    .baseUrl("http://algoliauat.backend.cindibyinkafarma.com")
    .header("Content-Type","application/json")
    .header("androidversion","100000")
    .header("x-access-token","eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjOGUyYjI5NmM2ZjMyODRlYzMwYjg4NjVkNzI5M2U2MjdmYTJiOGYiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9pbmthZmFybWEtcHJvZCIsImF1ZCI6Imlua2FmYXJtYS1wcm9kIiwiYXV0aF90aW1lIjoxNjE4NjkxMTI1LCJ1c2VyX2lkIjoiTGI3YmtNYkdnWVhPRHF6S2U1V1k2dWdTbFp0MiIsInN1YiI6IkxiN2JrTWJHZ1lYT0RxektlNVdZNnVnU2xadDIiLCJpYXQiOjE2MTg3MDU4MTcsImV4cCI6MTYxODcwOTQxNywiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.iR8CZOdB0NPTsVexvyEApNjVlgZtE8dHxAgMSAgi2TkFVXIpEO0MXHhx6EygdvkXP9IT_YuLDDnLxCLF18vXveUFvV8yGgNy8TONpc33B-7NbzheLxiQwoXwjloKI6NAhOcppFChU4cBz2PisdQrXA1X1JzD6m9DMAV_2sc5RBGczNysS1foW--8t8GZ2554C70ICDsIDTMVYwWf-Qn8YkISw9r1WxDn0lAkY1Ge9OGMpOByU7g8UKLLwpFWHM61Qi7gIQniHI31s5gXOud7b1TMhyLZ9aUQ8_9hh-MNarNaCi4Qe9ZO88IH4SAos8MhaOjxOGfCIvTQDA9GlFR69A")

  //    val users = scenario("Users").exec(Products.products1,Products.products2,Products.departments,Products.categories,Products.departmentsTree,Products.searchFilters,Products.filteredProducts)

  //  val users = scenario("Users").exec(Products.products1,Products.products2)
  //    val users = scenario("Users").exec(Products.searchFilters)
  //    val users = scenario("Admins").exec(Products.departments,Products.categories,Products.departmentsTree)
  //    val users = scenario("Admins").exec(Products.filteredProducts)
  //  val admins = scenario("Admins").exec(Products.products1,Products.products2,Products.departments,Products.categories,Products.departmentsTree,Products.searchFilters,Products.filteredProducts)
  //  val users = scenario("Users").exec(Identify.identityDocumentType)


  //  val admin = scenario("Admins").exec(Search.searchFiltersProducts)
  //    val admin = scenario("Admins").exec(Products.categories,Products.departmentsTree,Products.departmentsTreeMifa)
  //  val users = scenario("Admins").exec(Home.deeplinks)
//    val admin = scenario("Users").exec(Products.products1,Products.products2,Products.products3,Products.products4,Products.products5,Products.products6,Products.products7,Products.products8)
  //  val admin = scenario("Users").exec(Products.products1,Products.products2,Products.products3,Products.products4)
//  val admin = scenario("Users").exec(Products.products8)
    val admin = scenario("Admins").exec(Search.searchFiltersProducts)
  //  val admin = scenario("Admins").exec(Home.deeplinks,HomeMF.deeplinksMF)

  setUp(
    admin.inject(
      nothingFor(1),
      rampUsers(10) during (30 seconds)
    )
      .protocols(httpConfig))
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