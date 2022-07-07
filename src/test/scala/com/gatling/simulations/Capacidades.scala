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
    val cupomaia = {
      exec(
        http("POST Cupomania")
//          .post("farmaciasperuanas/cupomania/v1/api/coupons")
          .post("v1/api/coupons")
//          .post("farmaciasperuanas/cupomania/v1/coupon-search")
          .body(RawFileBody("data/cupomania.json")).asJson).pause(1)
    }

  }

  val httpConfig = http
//    .baseUrl("http://fpsappcapacityomnichanneluat.backend.cindibyinkafarma.com/coverage/api/v1.0.0/schedules?cia=IKF&channel=CALL")
//    .baseUrl("http://cupomaniaprd.backend.inkafarma.pe/")
    .baseUrl("https://ulmtgv7wxa.execute-api.us-east-1.amazonaws.com/PRD/")
//    .baseUrl("https://cupomania-ws.farmaciasperuanas.pe/")
    .header("x-access-token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwYTdhYTlkNzg5MmI1MmE4YzgxMzkwMzIzYzVjMjJlMTkwMzI1ZDgiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9pbmthZmFybWEtcHJvZCIsImF1ZCI6Imlua2FmYXJtYS1wcm9kIiwiYXV0aF90aW1lIjoxNjI5NDgwNzQ4LCJ1c2VyX2lkIjoiSGNoenVoY1FGdldWZElBaVJuaFVPbTZyMHFvMiIsInN1YiI6IkhjaHp1aGNRRnZXVmRJQWlSbmhVT202cjBxbzIiLCJpYXQiOjE2NTcxNzE3OTgsImV4cCI6MTY1NzE3NTM5OCwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.Cqn8vFsCcZCBmJROjydP0zlairRkQA0kpr7ydsj15pr8YAyQQGre3nrvvp0Ca5WVTgqC0Nce3-zt1zei6XC4SNfp5xJOpvKSON5gaTBXGTMLmxUeBB5N26APnO-k2AJSumK_qpsjsEueBj-vAxDZjUrAaEYvg5pDsGh7aixv7Qk3LSoqAE3KFMBHwGC6aMBJIt1rRfSOzZdjv1WfANV4Uv_iU9u1wN8JGnJSgrRx7xo1ByCM5UjTNj3AXgVQTs9oZ3UvWy66tHhws4yJC6BEYARARXdfy0zdnF-wtfVAN7jRsHSkMSQiTtZ3-Wgsr_Eb406ftAz6JtqkKRnWh4W2rw")
    .header("Content-Type", "application/json")



//  val admin = scenario("Admins").exec(Call.coordenas,Call.ubigeo,Call.localCode)
//  val admin = scenario("Admins").exec(Call.coordenas,Call.ubigeo,Call.localCode)
  val admin = scenario("Admins").exec(Call.cupomaia)
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
//      constantConcurrentUsers(1000) during (30 seconds),
              rampConcurrentUsers(50) to (200) during (30 seconds)
      //            incrementConcurrentUsers(10)
      //              .times(5)
      //              .eachLevelLasting(20)
      //              .separatedByRampsLasting(20 seconds)
      //              .startingFrom(200)
    )
      .protocols(httpConfig))
}


//mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Capacidades

