package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class Mapi extends Simulation {

  object Test {
    val test = {
      exec(
        http("Test")
          .get("/results/10/000000")
      ).pause(1, 2)
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
            .get("UAT/user/v2/api/${localId}")
        )

        .exec(
          http("updateAnonymous")
            .post("UAT/updateAnonymous")
            .body(RawFileBody("data/anonymous.json")).asJson
            .header("x-access-token", "${idToken}")
        ).pause(1)

        .exec(
          http("AddToCart")
            .post("UAT/cart")
            .body(RawFileBody("data/addToCart.json")).asJson
            .header("x-access-token", "${idToken}")
        ).pause(1)

    }
  }

  val httpConfig = http
    //    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/")
    .baseUrl("https://api.resultadossep.eleccionesgenerales2021.pe")
    .header("Content-Type", "application/json")
  //    .header("androidversion", "100000")

  val users = scenario("Users").exec(Test.test)

  setUp(
    users.inject(
      atOnceUsers(10)
      //              constantUsersPerSec(10) during (100),                 //numberOfRequests = (constantUsersPerSec * during)
      //              rampUsersPerSec(500) to (100) during (20 seconds)      //numberOfRequests = (averageRampUsersPerSec * during)
      //    )
    ).protocols(httpConfig))

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