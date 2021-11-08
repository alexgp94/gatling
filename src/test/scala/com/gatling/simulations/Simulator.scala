package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.{DurationInt, FiniteDuration}
import scala.language.postfixOps

class Simulator extends Simulation {

  private def getProperty(propertyName: String, defaultValue: String) = {
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def userCount: Int = getProperty("USERS", "5").toInt
  def environment: Int = getProperty("ENVIRONMENT", "PRD").toInt
  def rampDuration: Int = getProperty("RAMP_DURATION", "10").toInt
  def testDuration: Int = getProperty("DURATION", "60").toInt

  val environmentt = ${
    environment
  }
  val domain = "intercorp-mp-non-vtex-qa.mysellercenter.com"

  val httpProtocol = http
    .baseUrl("https://" + domain )// + "/" + environmentt)

  before {
    println(s"Running test with ${userCount} users")
    println(s"Ramping users over ${rampDuration} seconds")
    println(s"Total test duration: ${testDuration} seconds")
  }

  after {
    println("Stress testing complete")
  }

  object Simulator {
    val CartSimulator = {
      //      repeat(1) {
      exec(
        http("revgeocode.search.hereapi")
          .post("/marketplace/testfarmaciasperuanas/simulation?an=farmacias-peruanas")
          .body(RawFileBody("data/cartSimulator.json")).asJson
      ).pause(1)
    }
  }


  object UserJourneys {
    def minPause: FiniteDuration = 100.milliseconds

    def maxPause: FiniteDuration = 500.milliseconds

    def browseStore = {
      exec(Simulator.CartSimulator)
    }
  }

  object Scenarios {
    def default = scenario("Default Load Test")
      .during(testDuration.seconds) {
        randomSwitch(
          75d -> exec(UserJourneys.browseStore)
          //          15d -> exec(UserJourneys.abandonCart),
          //          10d -> exec(UserJourneys.completePurchase)
        )
      }

    def highPurchase = scenario("High Purhcase Load Test")
      .during(60.seconds) {
        randomSwitch(
          25d -> exec(UserJourneys.browseStore)
          //          25d -> exec(UserJourneys.abandonCart),
          //          50d -> exec(UserJourneys.completePurchase)
        )
      }
  }

  setUp(
    Scenarios.default
      .inject(rampUsers(userCount) during (rampDuration.seconds)).protocols(httpProtocol),
    //    Scenarios.highPurchase
    //      .inject(rampUsers(5) during (10.seconds)).protocols(httpProtocol)
  )

  /*  setUp(
      cartSimulator.inject(
        constantConcurrentUsers(200) during (30 seconds),
        //      rampConcurrentUsers(20) to (40) during (10 seconds),
        //                  incrementConcurrentUsers(10)
        //                    .times(5)
        //                    .eachLevelLasting(20)
        //                    .separatedByRampsLasting(20 seconds)
        //                    .startingFrom(200)
      )
        .protocols(httpConfig))*/
  //    .maxDuration(2 minute)
}
//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Simulator