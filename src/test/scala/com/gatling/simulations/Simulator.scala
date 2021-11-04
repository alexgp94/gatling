package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class Simulator extends Simulation {

  object Simulator {
    val CartSimulator = {
      //      repeat(1) {
      exec(
        http("Cart Simulator")
          .post("/IKF/testfarmaciasperuanas")
          .body(RawFileBody("data/cartSimulator.json")).asJson
      ).pause(1)
    }
  }

  val httpConfig = http
    .baseUrl("http://sellercenteruat.backend.cindibyinkafarma.com/sellercenter/create/simulationCart")
    .header("Content-Type", "application/json")

 val cartSimulator = scenario("Users CartSimulator").exec(Simulator.CartSimulator)

 //  setUp(
  //    searchProducts.inject(
  //      nothingFor(1),
  //      rampUsers(10) during (30 seconds)
  //    )
  //      .protocols(httpConfig))

  setUp(
    cartSimulator.inject(
      constantConcurrentUsers(200) during (30 seconds),
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
//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Simulator