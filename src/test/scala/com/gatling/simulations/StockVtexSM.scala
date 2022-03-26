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

  def userCount: Int = getProperty("USERS", "20").toInt

  def rampDuration: Int = getProperty("RAMP_DURATION", "1").toInt

  def testDuration: Int = getProperty("TEST_DURATION", "5").toInt

  val environments = s"$environment"
  val domain = "qainkafarma00"
  val httpProtocol = http
    .baseUrl("https://agoraqa.myvtex.com")
    .header("Cookie", "VtexWorkspace=master:-; VtexRCMacIdv7=3ad23ec1-c6ee-451c-b07b-01150608d4fd; VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IkQ1NEM2NkJERkVGNTFCQkQ4NjUwQ0ZFQTEyMUM5MDJEOTM3RDA0RkUiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJjZ2FyY2lhQGZhcm1hY2lhc3BlcnVhbmFzLnBlIiwiYWNjb3VudCI6ImFnb3JhcWEiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6IjQxZTM4OTdjLWZhOGMtNGZlMS1iZTA1LWRkZjM4YmY4OTcwMCIsImV4cCI6MTY0ODEzNzE2NywidXNlcklkIjoiZjNhM2I4NjMtOGRlNS00ZmFkLWI4NTMtNGZhN2Y4MDEzYzA5IiwiaWF0IjoxNjQ4MDUwNzY3LCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiODk5MjcyOTItNDE2ZC00ZDk4LThmNzYtMDMwMzNhMGYyZmM3In0.tldf460ImF9xATZaqrh_BMs71VRBTcJRheVZV4vhMW4j7PeLvSzz8PnCFcnhvd6kJotS4qKD0Mvv5PQllU_5RA; vtex_binding_address=agoraqa.myvtex.com/admin; _ga=GA1.2.960403479.1648050793; _gid=GA1.2.1214876695.1648050793; _hjSessionUser_959471=eyJpZCI6IjhiMzFiYmM1LTc2NzItNWIyZi04ZThlLTViYzUyN2E4MWVhNiIsImNyZWF0ZWQiOjE2NDgwNTA3OTMzMjksImV4aXN0aW5nIjpmYWxzZX0=; amp_051cbc=oOQ7ue9NAIT0ziah7QMwjX.ZjNhM2I4NjM4ZGU1NGZhZGI4NTM0ZmE3ZjgwMTNjMDk=..1furnmsqr.1furnmsr0.0.3.3; intercom-id-bs8us8hw=489bace8-4b25-4ab0-aa2d-f39650bd2988; AWSELB=6F97954918AF7EE2B27FE7653D7E35926A6DA74EE281BD478E9FD8DBCDB54B3C759FBB5676A0B03DC0A0086E42DD1095C1960746F46ED6A1D0F94F2D86847882B084A8BE73; intercom-session-bs8us8hw=NUNUYitLNzR4eUxpTHUvS2dMbkhKVE5QU2kwckhDWjF3ZG03NkZQOGxKZ2djWStiQ0hnNzk5VGhkK0hHMXgwaC0tTDcrenNrTkFHdWdEbHpmWjFkY1p1UT09--a0104bcaec3daa84d42a1ef336b5661fd579b60c; vtex_session=eyJhbGciOiJFUzI1NiIsImtpZCI6IjE4OERFMTNCQ0E3MDkyRUQyNDExNDZDQzY1RUUxMEVBRDUyOTUyQUQiLCJ0eXAiOiJqd3QifQ.eyJhY2NvdW50LmlkIjoiZGUzZjI1OTQtM2Y5Yi00OGY3LWI1MmEtNzFkZDUxYWNkMjM2IiwiaWQiOiJkM2U1N2VkYS01NGY1LTQwYjEtYjdlNC0zMTllMGZkZDMxYTIiLCJ2ZXJzaW9uIjozLCJzdWIiOiJzZXNzaW9uIiwiYWNjb3VudCI6InNlc3Npb24iLCJleHAiOjE2NDg3NDQ2NjIsImlhdCI6MTY0ODA1MzQ2MiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6ImIyYjY0NzAzLThjOTgtNDlhMS1iYjhjLWEwNTAzZWVlNjczNSJ9.UEd5sXP3pYZCE_tCG4lK07G9SFkQ7jltiTIfiEhH85VcJ55ROl8lGzfvGaxKVB0HwGDLqVX01VIYo3ja3nKNHQ; vtex_segment=eyJjYW1wYWlnbnMiOm51bGwsImNoYW5uZWwiOiIxIiwicHJpY2VUYWJsZXMiOm51bGwsInJlZ2lvbklkIjoidjIuRDhFQUFERTA1NjM5NTk3RTFBMTQ3NzdEMjEzOTYzRDciLCJ1dG1fY2FtcGFpZ24iOm51bGwsInV0bV9zb3VyY2UiOm51bGwsInV0bWlfY2FtcGFpZ24iOm51bGwsImN1cnJlbmN5Q29kZSI6IlBFTiIsImN1cnJlbmN5U3ltYm9sIjoiUy8iLCJjb3VudHJ5Q29kZSI6IlBFUiIsImN1bHR1cmVJbmZvIjoiZXMtUEUiLCJhZG1pbl9jdWx0dXJlSW5mbyI6ImVuLVVTIiwiY2hhbm5lbFByaXZhY3kiOiJwdWJsaWMifQ")

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

  object UserJourneys {
    def minPause: FiniteDuration = 200.milliseconds

    def maxPause: FiniteDuration = 500.milliseconds

    def updateStockWL1 = {
      exec(StockVtex.updateWithLabel1).pause(minPause, maxPause)
    }

    def updatePrice = {
      exec(StockVtex.updatePriceVtex).pause(minPause, maxPause)
    }

    def updateStockWL2 = {
      exec(StockVtex.updateWithLabel2).pause(minPause, maxPause)
    }

    def updatePrice2 = {
      exec(StockVtex.updatePriceVtex2).pause(minPause, maxPause)
    }

    def agora1 = {
      exec(StockVtex.agora).pause(minPause, maxPause)
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
    def updateWL1 = scenario("1. Stocks Update and Get Vtex")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL1))
      }

    def updatePriceVtex = scenario("1. Price Update and Get Vtex")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updatePrice))
      }

    def updateWL2 = scenario("2. Stocks Update and Get Vtex")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updateStockWL2))
      }

    def updatePriceVtex2 = scenario("2. Price Update and Get Vtex")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.updatePrice2))
      }

    def agora = scenario("3. Agora Get Stocks and Prices")
      .during(testDuration.seconds) {
        randomSwitch(100d -> exec(UserJourneys.agora1))
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

  val default = scenario("update Stocks and prices").exec(UserJourneys.updateStockWL1)

  setUp(
    Scenarios.
      updateWL1
      //      .inject(atOnceUsers(userCount)).protocols(httpProtocol1),
      .inject(rampUsers(userCount) during (testDuration seconds)).protocols(httpProtocol1).
      andThen(
        Scenarios.
          updateWL2
          .inject(rampUsers(userCount) during (testDuration seconds)).protocols(httpProtocol1)
      ),
    Scenarios.
      updatePriceVtex
      //      .inject(atOnceUsers(userCount)).protocols(httpProtocol1),
      .inject(rampUsers(userCount) during (testDuration seconds)).protocols(httpProtocol1).
      andThen(
        Scenarios.
          updatePriceVtex2
          .inject(rampUsers(userCount) during (testDuration seconds)).protocols(httpProtocol1)).
      andThen(
        Scenarios.
          agora
          .inject(rampUsers(userCount) during (testDuration seconds)).protocols(httpProtocol)),
    //    Scenarios.
    //      updateWL2
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol2),
    //    Scenarios.
    //      updateWL3
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol3),
    //    Scenarios.
    //      updateWL4
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol4),
    //    Scenarios.
    //      updateWL5
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol5),
    //    Scenarios.
    //      updateWL6
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol6),
    //     Scenarios.
    //      updateWL7
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol7),
    //     Scenarios.
    //      updateWL8
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol8),
    //     Scenarios.
    //      updateWL9
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol9),
    //     Scenarios.
    //      updateWL10
    //      .inject(atOnceUsers(userCount)).protocols(httpProtocol10),

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

//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.StockVtexSM