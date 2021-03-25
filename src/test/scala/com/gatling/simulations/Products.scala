package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class Products extends Simulation {

  object Identify {
    val identityDocumentType = {
      exec(
        http("Get identityDocumentType")
          .get("/UAT/user/v2/api/identityDocumentType")
      ).pause(1, 2)
    }
    }

  object Products {
    val products1 = {
      exec(
        http("Get Products 1")
          .get("/UAT/products/025868,025867,025863,025862,025460,026918,026920,024414,029902,024200,025888,024373,010304,012555,010802,023707,024864,024414,010419,024202,025460,025863,431226,024671,026920,026259,024409,012559,026352,023707,023810,012521,012557,430796")
      ).pause(1, 2)
    }
    val products2 = {
      exec(
        http("Get Products 2")
          .get("/UAT/products/009103,025933,236359,030369,030370,030371,030373,030520,026204,026205,026203,010007,025417,010007,024277,025417,011187,020774,011185,029938,030334,030335,030319,032745,032747")
      ).pause(1, 2)
    }
    val departments = {
      exec(
        http("WEB Departments")
          .get("/UAT/departments")
      )
      //        .pause(1, 2)
    }
    val categories = {
      exec(
        http("APP Categories")
          .get("/UAT/getcategories")
      ).pause(1, 2)
    }
    val departmentsTree = {
      exec(
        http("Promociones Exclusivas")
          .get("/UAT/department-tree?keyword=promociones-exclusivas")
      ).pause(1, 2)
    }
    val searchFilters = {
      repeat(1) {
        exec(
          http("Get Search-filters")
            .post("/UAT/search-filters")
            .body(RawFileBody("data/search-filters.json")).asJson
        ).pause(1, 2)
      }
    }
    val filteredProducts = {
      repeat(2) {
        exec(
          http("Get filtered-products")
            .post("/UAT/filtered-products")
            .body(RawFileBody("data/filtered-products.json")).asJson
        ).pause(1, 2)
      }
    }
  }

  //  def coverage(): Unit ={
  //
  //  }

  //  object Mapi {
  //    val cart = {
  //      exec(
  //        http("AddToCart")
  //          .post("/UAT/cart")
  //          .body(RawFileBody("data/addToCart.json")).asJson
  //      ).pause(1)
  //    }
  //  }


  val httpConfig = http
    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("x-access-token", "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4NDY2MjEyMTQxMjQ4NzUxOWJiZjhlYWQ4ZGZiYjM3ODYwMjk5ZDciLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9pbmthZmFybWEtdWF0IiwiYXVkIjoiaW5rYWZhcm1hLXVhdCIsImF1dGhfdGltZSI6MTYxNjY4MTI2MSwidXNlcl9pZCI6IndvT3ByODJ4WUNPQUhTTFM1djFxTHQ4TEI4cDIiLCJzdWIiOiJ3b09wcjgyeFlDT0FIU0xTNXYxcUx0OExCOHAyIiwiaWF0IjoxNjE2NjgxMjYxLCJleHAiOjE2MTY2ODQ4NjEsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.Xy5dNaD6sh0ug_soaafnsk_p8pQ773-SQueJn4pEEv2X-F3Uoy466pKclzj0sjDdvFbqkO9diO-ZpIvplcfO_eZL0n1lVeKd9767DMCcip6ooAS7m5I3H19dhzZqsNwForpsU--AkUIVHufQ5TIpLjNsL9iBBr0QeJW8OKBTiXsokODfxc9rn2IpM34xBaG_8ZfU9mr_ETwqMuGM6BRTkky9PJV8mu21UJFV0BrcO1vXEULdDJ-ZRsRq_dtlFoa9-GHtukDlHytDqf6RThK0B3bhi0X2JMjW2NF7pyZwHeb8ro8L5l398RYJGBGdx-Mnt--r1ZbA7FqsubezD9Ah2w")

  //  val users = scenario("Users").exec(Products.products1, Products.products2, Products.departments, Products.categories, Products.departmentsTree, Products.searchFilters, Products.filteredProducts)
  //  val admins = scenario("Admins").exec(Products.products1, Products.products2, Products.departments, Products.categories, Products.departmentsTree, Products.searchFilters, Products.filteredProducts)
  val users = scenario("Users").exec(Identify.identityDocumentType)

//        setUp(
//          users.inject(
//            nothingFor(1),
//            atOnceUsers(500)
////            constantUsersPerSec(20) during (10),                    //numberOfRequests = (constantUsersPerSec * during)
////            rampUsersPerSec(50) to (100) during (10 seconds)      //numberOfRequests = (averageRampUsersPerSec * during)
//          )
//        ).protocols(httpConfig)


  setUp(
    users.inject(
      constantConcurrentUsers(1200) during (20 seconds),
//      rampConcurrentUsers(100) to (200) during (40 seconds)
//            incrementConcurrentUsers(10)
//              .times(5)
//              .eachLevelLasting(20)
//              .separatedByRampsLasting(20 seconds)
//              .startingFrom(200)
    )
      .protocols(httpConfig)
  )
//    .maxDuration(4 minute)

}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Products