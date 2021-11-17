package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class Mapi extends Simulation {

  object Test {
    val test = {
      exec(
        http("test")
          .post("https://simple.ripley.com.pe/api/v1/cart/item")
          .body(RawFileBody("data/deeplink-filtered-productsMF.json")).asJson
      ).pause(1)
        .exec(
          http("test1")
            .post("https://simple.ripley.com.pe/api/v1/cart/item")
            .body(RawFileBody("data/deeplink-filtered-productsMF.json")).asJson
        ).pause(1)
        .exec(
          http("test2")
            .post("https://simple.ripley.com.pe/api/v1/cart/item")
            .body(RawFileBody("data/deeplink-filtered-productsMF.json")).asJson
        ).pause(1)

      //        .exec(
      //          http("AM / PM")
      //            .get("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/PROD/deliveryinfo/schedule?day=2021-08-24&isToday=N&userAddressId=1796865&drugstoreId=0&deliveryTypeId=AM_PM")
      //        ).pause(1)
    }
  }

  object Mapi {
    val cart = {
      exec(
        http("Get Token")
          .post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDDiuzQN76HTaSP1ddlVpIjFLeSB70xFN8")
          .body(RawFileBody("data/token.json")).asJson
          .check(jsonPath("$.idToken").saveAs("idToken"))
          .check(jsonPath("$.localId").saveAs("localId")))
        .pause(1, 2)

        .exec(
          http("Get User")
            .get("/user/v2/api/${localId}")
        )

        .exec(
          http("updateAnonymous")
            .post("/updateAnonymous")
            .body(RawFileBody("data/anonymous.json")).asJson
            .header("x-access-token", "${idToken}")
        ).pause(1)

        .exec(
          http("AddToCart")
            .post("/cart")
            .body(RawFileBody("data/addToCart.json")).asJson
            .header("x-access-token", "${idToken}")
        ).pause(1)

    }
  }


  object Mapi2 {
    val cart = {
      exec(
        http("AddToCart")
          .post("/cart")
          .body(RawFileBody("data/addToCart.json")).asJson
        //          .header("x-access-token", "${idToken}")
      ).pause(1)
    }
  }


  val httpConfig = http
    .baseUrl("https://simple.ripley.com.pe/api/products/2004272770393P")
    //    .baseUrl("https://api.resultadossep.eleccionesgenerales2021.pe")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("x-access-token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwMDk1YmM2ZGM2ZDY3NzkxZDdkYTFlZWIxYTU1OWEzZDViMmM0ODYiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9pbmthZmFybWEtcHJvZCIsImF1ZCI6Imlua2FmYXJtYS1wcm9kIiwiYXV0aF90aW1lIjoxNjI5Nzc0NjIwLCJ1c2VyX2lkIjoiOUkwNzE4NnpMZWJTVng2cDVSanlRWmFOM0VrMSIsInN1YiI6IjlJMDcxODZ6TGViU1Z4NnA1Ump5UVphTjNFazEiLCJpYXQiOjE2Mjk3Nzc5MjAsImV4cCI6MTYyOTc4MTUyMCwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.pEtfJLywkxgrVbzi3h5mKmmAGcz7P-b8EOI6GmuAgWEF3cLlS7lswbje7wsliX1G_SJQTK4sZ9rXmihZxUkF62Q3cbbjtp2bqqx5ndACLuOrsXgMaVbc5UppX5Ea-AgJ5-jv51jfWttjtdsRoy0QlBEuLRBn52dk7LsA4AdC0qTO-eg9nqwTMciIFWBsconOhkKPpAgM2yj28s09G4Nye1i5u9OqJLm9GL7uis0htNKN8W96Qn3JeEA8aHrvS7IwPEqyJz2wvhEjKlWOAVjO3A6pjzXn05tsVIe4s4dXQwkBP1YVaiNJKGZQ2Fgm2YWXEKJRLVAFQNXGH8t0D87L2g")

  val admin = scenario("Admins").exec(Test.test)
  setUp(
    admin.inject(
      constantConcurrentUsers(400) during (300 seconds),
      rampConcurrentUsers(1000) to (1800) during (400 seconds)
      //                  .incrementConcurrentUsers(10)
      //                    .times(5)
      //                    .eachLevelLasting(20)
      //                    .separatedByRampsLasting(20 seconds)
      //                    .startingFrom(200)
    )
      .protocols(httpConfig))



//    val admin = scenario("Admins").exec(Test.test)
//    setUp(
//      admin.inject(
//        nothingFor(1),
//        atOnceUsers(700),
//        rampUsers(1100) during (300 seconds),
//        constantUsersPerSec(800) during(100 seconds) randomized,
//      ).protocols(httpConfig))

  //  setUp(
  //    users.inject(
  //      constantConcurrentUsers(1000) during (250 seconds),
  //      rampConcurrentUsers(1000) to (5000) during (250 seconds)
  //      //      incrementConcurrentUsers(10)
  //      //        .times(5)
  //      //        .eachLevelLasting(20)
  //      //        .separatedByRampsLasting(20 seconds)
  //      //        .startingFrom(200)
  //    ).protocols(httpConfig)
  //  )
  //    .maxDuration(1 minute)


}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Mapi