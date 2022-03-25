package com.gatling.simulations

import com.gatling.products.{Categories, Deeplinks, Products, SearchProducts}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps

class ProductsSM extends Simulation {

  private def getProperty(propertyName: String, defaultValue: String) = {
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def environment: String = getProperty("ENVIRONMENT", "PROD")

  def userCount: Int = getProperty("USERS", "50").toInt

  def rampDuration: Int = getProperty("RAMP_DURATION", "10").toInt

  def testDuration: Int = getProperty("DURATION", "10").toInt

  val environments = s"$environment"
  val domain = "5doa19p9r7.execute-api.us-east-1.amazonaws.com"
  val httpProtocol = http
    .baseUrl("https://" + domain + "/" + environments)
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("authorization", "")
    .header("x-access-token", "")

  before {
    println(s"Running test with $userCount users")
    println(s"Ramping users over $rampDuration seconds")
    println(s"Total test duration: $testDuration seconds")
  }
  after {
    println("Stress testing complete")
  }

  object UserJourneys {
    def minPause: FiniteDuration = 200.milliseconds

    def maxPause: FiniteDuration = 800.milliseconds

    def products = {
      exec(Products.products1).pause(minPause, maxPause)
        .exec(Products.products2).pause(minPause, maxPause)
        .exec(Products.products3).pause(minPause, maxPause)
        .exec(Products.products4).pause(minPause, maxPause)
        .exec(Products.products5).pause(minPause, maxPause)
        .exec(Products.products6).pause(minPause, maxPause)
        .exec(Products.products7).pause(minPause, maxPause)
        .exec(Products.products8).pause(minPause, maxPause)
    }

    def categories = {
      exec(Categories.departments).pause(minPause, maxPause)
        .exec(Categories.categories).pause(minPause, maxPause)
    }

    def deeplinks = {
      exec(Deeplinks.departmentTree).pause(minPause, maxPause)
        .exec(Deeplinks.filteredProducts).pause(maxPause)
    }

    def searchProducts = {
      exec(SearchProducts.searchFilters).pause(maxPause)
        .exec(SearchProducts.filteredProducts).pause(maxPause)
    }
  }

  object Scenarios {
    def default = scenario("Default Load Test")
      .during(testDuration.seconds) {
        randomSwitch(
          100d -> exec(UserJourneys.products)
                      //40d -> exec(UserJourneys.categories),
                      //10d -> exec(UserJourneys.deeplinks),
                      //10d -> exec(UserJourneys.searchProducts)
        )
      }

    def highPurchase = scenario("High Purhcase Load Test")
      .during(60.seconds) {
        randomSwitch(
          20d -> exec(UserJourneys.products),
                      20d -> exec(UserJourneys.categories),
                      30d -> exec(UserJourneys.deeplinks),
                      30d -> exec(UserJourneys.searchProducts)
        )
      }
  }
    setUp(
      Scenarios.default
//        .inject(constantConcurrentUsers(userCount) during (testDuration seconds)).protocols(httpProtocol)
        .inject(rampUsers(userCount) during (testDuration seconds)).protocols(httpProtocol),
      //    Scenarios.highPurchase
      //      .inject(rampUsers(5) during (10.seconds)).protocols(httpProtocol)
    )



    //  val products = scenario("Users Products").exec(Products.products1, Products.products2, Products.products3, Products.products4, Products.products5, Products.products6, Products.products7, Products.products8)
    //  val departmentsCategories = scenario("Users departmentsCategories").exec(Products.departments, Products.categories)
    //  val deeplinks = scenario("Users Deeplinks").exec(Home.deeplinks)
    //  val searchProducts = scenario("Users Search Products").exec(Search.searchFiltersProducts)
    //  val allProducts = scenario("Users Products").exec(Products.products1, Products.products2, Products.products3, Products.products4, Products.products5, Products.products6, Products.products7, Products.products8, Products.departments, Products.categories, Home.deeplinks, Search.searchFiltersProducts)

    //  setUp(
    //    products.inject(
    //      nothingFor(1),
    //      rampUsers(50) during (10 seconds)
    //    )
    //      .protocols(httpConfig))

    //  setUp(
    //    departmentsCategories.inject(
    //      nothingFor(1),
    //      rampUsers(10) during (30 seconds)
    //    )
    //      .protocols(httpConfig))
    //
    //  setUp(
    //    deeplinks.inject(
    //      nothingFor(1),
    //      rampUsers(10) during (30 seconds)
    //    )
    //      .protocols(httpConfig))
    //


    /*  setUp(
      products.inject(
        nothingFor(1),
        //atOnceUsers(4000)
        //rampUsers(2000) during (60 seconds)
        constantUsersPerSec(20) during (10 second))
        .throttle(reachRps(10) in (10 second)
          //            constantUsersPerSec(20) during (10),                  //numberOfRequests = (constantUsersPerSec * during)
          //            rampUsersPerSec(50) to (100) during (10 seconds))      //numberOfRequests = (averageRampUsersPerSec * during)
        ).protocols(httpConfig))*/


    //  setUp(
    //    searchProducts.inject(
    //      nothingFor(1),
    //      rampUsers(10) during (30 seconds)
    //    )
    //      .protocols(httpConfig))
    /*  setUp(
    products.inject(
      constantConcurrentUsers(50) during (10 seconds),
//      rampConcurrentUsers(2000) to (4000) during (60 seconds),
      //                  incrementConcurrentUsers(10)
      //                    .times(5)
      //                    .eachLevelLasting(20)
      //                    .separatedByRampsLasting(20 seconds)
      //                    .startingFrom(200)
    )
      .protocols(httpConfig))*/
    //    .maxDuration(2 minute)



}

//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.ProductsSM