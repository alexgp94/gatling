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
        http("revgeocode.search.hereapi")
//          .post("/IKF/testfarmaciasperuanas")
//          .post("https://intercorp-mp-non-vtex-qa.mysellercenter.com/marketplace/testfarmaciasperuanas/simulation?an=farmacias-peruanas")
          .get("https://revgeocode.search.hereapi.com/v1/revgeocode?at=-11.99523,-77.07186&lang=es-PE&types=address&apiKey=94HLp-xcC0zzqlh5WDoeAlTvQxh5DWtqoiVYqxqZG_g")
//          .body(RawFileBody("data/cartSimulator.json")).asJson
      ).pause(1)
    }
  }

  val httpConfig = http
//    .baseUrl("http://sellercenteruat.backend.cindibyinkafarma.com/sellercenter/create/simulationCart/")
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