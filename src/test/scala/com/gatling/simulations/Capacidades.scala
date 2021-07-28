package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class Capacidades extends Simulation {

  object Call {
    val coordenas = {
      exec(
        http("Get Coordenadas")
          .get("&latitude=-12.11158840&longitude=-77.01873040"))
    }
    val ubigeo = {
      exec(
        http("Get Ubigeo")
          .get("&ubigeo=150130"))
    }
    val localCode = {
      exec(
        http("Get LocalCode")
          .get("&localCode=EO3"))
    }
  }

  val httpConfig = http
    .baseUrl("http://fpsappcapacityomnichanneluat.backend.cindibyinkafarma.com/coverage/api/v1.0.0/schedules?cia=IKF&channel=CALL")
    .header("Content-Type", "application/json")



//  val admin = scenario("Admins").exec(Call.coordenas,Call.ubigeo,Call.localCode)
//  val admin = scenario("Admins").exec(Call.coordenas,Call.ubigeo,Call.localCode)
  val admin = scenario("Admins").exec(Call.ubigeo)
  /*setUp(
    admin.inject(
      nothingFor(1),
      rampUsers(2000) during (60 seconds)
    ).protocols(httpConfig))*/

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


  setUp(
    admin.inject(
      constantConcurrentUsers(1000) during (30 seconds),
      //        rampConcurrentUsers(100) to (800) during (40 seconds)
      //            incrementConcurrentUsers(10)
      //              .times(5)
      //              .eachLevelLasting(20)
      //              .separatedByRampsLasting(20 seconds)
      //              .startingFrom(200)
    )
      .protocols(httpConfig))
}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Capacidades

