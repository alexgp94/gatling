package com.gatling.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Setupp {

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
    .baseUrl("https://" + domain + "/" + environmentt)

  before {
    println(s"Running test with ${userCount} users")
    println(s"Ramping users over ${rampDuration} seconds")
    println(s"Total test duration: ${testDuration} seconds")
  }

  after {
    println("Stress testing complete")
  }

}
