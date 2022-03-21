package com.gatling.simulations

import com.gatling.products.{Categories, Deeplinks, Products, SearchProducts, StockVtex}
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class StockVtexSM extends Simulation {

  private def getProperty(propertyName: String, defaultValue: String) = {
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def environment: String = getProperty("ENVIRONMENT", "PROD")

  def userCount: Int = getProperty("USERS", "10").toInt

  def rampDuration: Int = getProperty("RAMP_DURATION", "1").toInt

  def testDuration: Int = getProperty("DURATION", "2").toInt

  val environments = s"$environment"
  val domain = "qainkafarma00"
  val httpProtocol1 = http
    .baseUrl("https://" + domain + "01" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0001-ZHXSIJ")
    .header("X-VTEX-API-AppToken", "CNYIGAAHCSEYDKDSWZZWEDVFKAIOEVBCFRHODCDKMCLYDGRUDGIKIBWYSSXGSMCGQCSLCOPUVOKBSWCEIOKYMQTEVJWKEXSAAFHBNFROQOPUQVGVQTYDBETAIOQTSFQY")
  val httpProtocol2 = http
    .baseUrl("https://" + domain + "02" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0002-YASLVI")
    .header("X-VTEX-API-AppToken", "VZOECXUVZIKNHDLZWEIQUQFUTGWBPIYJJFALWJAYZTQXHPKPDSJPZLTEUTLWBSFRKADBDACNEKRAZHNEWGYXYIKXLVQDYEXGNZNGLIMCPWKPUSFNGGZUUISCQFQHJZOA")
  val httpProtocol3 = http
    .baseUrl("https://" + domain + "03" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0003-LSXKRP")
    .header("X-VTEX-API-AppToken", "SVTAVYXYFLWDCUSWNUMNJKEYQYYBPXNLHKULHIRJLKZWJGHDJFUYTZZHQVJXZWIIXKWRZHOECDBZLHOKQURKDOSHLMUMZUJPBRZZKPECRPVPXZWJGZGEEYEIROGMMCFI")
  val httpProtocol4 = http
    .baseUrl("https://" + domain + "04" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0004-SMFEXE")
    .header("X-VTEX-API-AppToken", "WVKMZSHGFAAXBTLGCYABXYFJUYTSXDRTFXMJTXTRBRRQUFKJQHDPCLTXQBSAYOIBIGSEHBNFFIZFHOOOOJBPABRTDOTSFSTMIQHONFCPUYKULOQBMDMONTBGOZASIVZN")
  val httpProtocol5 = http
    .baseUrl("https://" + domain + "05" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0005-BCXAUR")
    .header("X-VTEX-API-AppToken", "UFDEECIGRXHXINCPPXLCGARKWLAWUDIGLDBKNKUMQCOVNPHNKBOHKBNTOTHSBMLNPBMEMRCEDZMEMVXHEMLSPAWJPHWTDBKDRAFLCCBTZKEKOJHTWAOPBSYPEDPEVIBB")
  val httpProtocol6 = http
    .baseUrl("https://" + domain + "06" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0006-UOWIPO")
    .header("X-VTEX-API-AppToken", "JPJFJXUSBTANVBXHGPTUTTYESGHSONKGMDWRBUFNNPAMNRAIDISBAVAPQEMCPCDOJTBREGFLJGGETMRBGZOGUJFQDHAXIDXLLMCUPIDWCHRUPWWENLVQNXUANLNXGIDG")
  val httpProtocol7 = http
    .baseUrl("https://" + domain + "07" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0007-OZACCM")
    .header("X-VTEX-API-AppToken", "CGRFPKFLXBVDHMLQYUOXURCFDLDDMUYZWFSIEUHMWXNPAQZLCUIRKXULDLCEHBZDDWHCUCLEMCAXDMFNLSBRMGOYKGESSDEVYKMEIXQZIDFHXXHRGOSPAIRWIJRNXTMJ")
  val httpProtocol8 = http
    .baseUrl("https://" + domain + "08" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0008-LOKJPM")
    .header("X-VTEX-API-AppToken", "HPDUMHRWTFSWNPUJYULREVORBHAELPWYNHUSRFJRTSPXMBYNPVJIQBILBLSFGNKDITIGVBRTLUXMGREAINOQGNHLYIQFMDKGHLOSSRRNDQXWEVFKHSWTYUXUMXHNLLGH")
  val httpProtocol9 = http
    .baseUrl("https://" + domain + "09" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0009-UHVFMS")
    .header("X-VTEX-API-AppToken", "ATNPKLAOKDPRWGJHSMOUZJOPWURGNRNVOHYYYJMKQTRQPXENOMHOKGCRFYSPTTBTQTCPILIIZEEFRXZZPESAKYKIEGTAQXQWSYAWUPEDEYPGBWZHYTAPBAISJULBRISC")
  val httpProtocol10 = http
    .baseUrl("https://" + domain + "10" + ".vtexcommercestable.com.br")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("X-VTEX-API-AppKey", "vtexappkey-qainkafarma0010-QWQFNH")
    .header("X-VTEX-API-AppToken", "BYDKTQZSILLRCMDPXUYBWNIGBXDJQUHHXARMVWFNESCQWRSXGSKBOXNOPWIVMPCODEUBURTAPLWEKRJKFGDYJGSZMDXYOJBPPONSXQDPZJLDBIEXNYQFMEEXLUPRUUMF")

  before {
    println(s"Running test with $userCount users")
    println(s"Ramping users over $rampDuration seconds")
    println(s"Total test duration: $testDuration seconds")
  }
  after {
    println("Stress testing complete")
  }
val alex = "ss"
  object UserJourneys {
    def minPause: FiniteDuration = 200.milliseconds

    def maxPause: FiniteDuration = 500.milliseconds

    def updateStockWL1 = {
      exec(StockVtex.updateWithLabel1).pause(minPause, maxPause)
    }
    def updateStockWL2 = {
      exec(StockVtex.updateWithLabel2).pause(minPause, maxPause)
    }
    def updateStockWL3 = {
      exec(StockVtex.updateWithLabel3).pause(minPause, maxPause)
    }
    def updateStockWL4 = {
      exec(StockVtex.updateWithLabel4).pause(minPause, maxPause)
    }
    def updateStockWL5 = {
      exec(StockVtex.updateWithLabel5).pause(minPause, maxPause)
    }
    def updateStockWL6 = {
      exec(StockVtex.updateWithLabel6).pause(minPause, maxPause)
    }
    def updateStockWL7 = {
      exec(StockVtex.updateWithLabel7).pause(minPause, maxPause)
    }
    def updateStockWL8 = {
      exec(StockVtex.updateWithLabel8).pause(minPause, maxPause)
    }
    def updateStockWL9 = {
      exec(StockVtex.updateWithLabel9).pause(minPause, maxPause)
    }
    def updateStockWL10 = {
      exec(StockVtex.updateWithLabel10).pause(minPause, maxPause)
    }

  }

  object Scenarios {
    def updateWL1 = scenario("update WL01")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL1))
      }
    def updateWL2 = scenario("update WL02")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL2))
      }
    def updateWL3 = scenario("update WL03")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL3))
      }
    def updateWL4 = scenario("update WL04")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL4))
      }
    def updateWL5 = scenario("update WL05")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL5))
      }
    def updateWL6 = scenario("update WL06")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL6))
      }
    def updateWL7 = scenario("update WL07")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL7))
      }
    def updateWL8 = scenario("update WL08")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL8))
      }
    def updateWL9 = scenario("update WL09")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL9))
      }
    def updateWL10 = scenario("update WL10")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL10))
      }

  }

  val default = scenario("update Stocks").exec(UserJourneys.updateStockWL1)

  setUp(
    Scenarios.
      updateWL1
      .inject(atOnceUsers(userCount)).protocols(httpProtocol1),
//            .inject(rampUsers(userCount) during (rampDuration seconds)).protocols(httpProtocol1),
    Scenarios.
      updateWL2
      .inject(atOnceUsers(userCount)).protocols(httpProtocol2),
    Scenarios.
      updateWL3
      .inject(atOnceUsers(userCount)).protocols(httpProtocol3),
    Scenarios.
      updateWL4
      .inject(atOnceUsers(userCount)).protocols(httpProtocol4),
    Scenarios.
      updateWL5
      .inject(atOnceUsers(userCount)).protocols(httpProtocol5),
    Scenarios.
      updateWL6
      .inject(atOnceUsers(userCount)).protocols(httpProtocol6),
     Scenarios.
      updateWL7
      .inject(atOnceUsers(userCount)).protocols(httpProtocol7),
     Scenarios.
      updateWL8
      .inject(atOnceUsers(userCount)).protocols(httpProtocol8),
     Scenarios.
      updateWL9
      .inject(atOnceUsers(userCount)).protocols(httpProtocol9),
     Scenarios.
      updateWL10
      .inject(atOnceUsers(userCount)).protocols(httpProtocol10),

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

//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Products