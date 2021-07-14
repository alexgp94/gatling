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
            .get("/user/v2/api/${localId}")
        )

        .exec(
          http("updateAnonymous")
            .post("/updateAnonymous")
            .body(RawFileBody("data/anonymous.json")).asJson
            .header("x-access-token", "${idToken}")
        ).pause(1)

        .exec(
          http("AddToCart")
            .post("/cart")
            .body(RawFileBody("data/addToCart.json")).asJson
            .header("x-access-token", "${idToken}")
        ).pause(1)

    }
  }


  object Mapi2 {
    val cart = {
      exec(
        http("AddToCart")
          .post("/cart")
          .body(RawFileBody("data/addToCart.json")).asJson
//          .header("x-access-token", "${idToken}")
      ).pause(1)
    }
  }


  val httpConfig = http
    .baseUrl("https://td2fvf3nfk.execute-api.us-east-1.amazonaws.com/UAT")
    //    .baseUrl("https://api.resultadossep.eleccionesgenerales2021.pe")
    .header("Content-Type", "application/json")
    .header("androidversion", "100000")
    .header("x-access-token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNDMyMDRhMTc5MTVlOGJlN2NjZDdjYjI2NGRmNmVhMzgzYzQ5YWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWxleGFuZGVyIEdhcmNpYSIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXQxa01GNVg1eDZjL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y21zUk10YWl4bTNzWjcyRFFZSlc4SG5QaHVRY1Evczk2LWMvcGhvdG8uanBnIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2lua2FmYXJtYS11YXQiLCJhdWQiOiJpbmthZmFybWEtdWF0IiwiYXV0aF90aW1lIjoxNjI2MTE0NTIxLCJ1c2VyX2lkIjoiVkU3eVdwczZ5UE5IWjVjalhxem1SU0N0VnprMiIsInN1YiI6IlZFN3lXcHM2eVBOSFo1Y2pYcXptUlNDdFZ6azIiLCJpYXQiOjE2MjYyMTQ0NzAsImV4cCI6MTYyNjIxODA3MCwiZW1haWwiOiJhbGV4YW5kZXIuZ2FyY2lhQGlua2FmYXJtYWRpZ2l0YWwucGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODM5MjE5NTE4NTcyOTk4MjMwNiJdLCJlbWFpbCI6WyJhbGV4YW5kZXIuZ2FyY2lhQGlua2FmYXJtYWRpZ2l0YWwucGUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.PUuxbCWb7bMN5UhRx67vdqy-Fxd_ID8axctZHg0PIdi3TJtHMHAzHWXc6-EtXVGxGCijGwezNBtCvex_Lcdu0LA5tucGDI2th0N_clAMfXcUmwweLxCk46X07_25ZdsqCOpQ75sg3KIWfKUessZMtYdO2VScIBNfoDvgvjlVFiYYJom4RElobKtt823dgzNJfQmhLbGGMza-24naNEiRlRv2EiYzuzYQn6F8ZE33iATiX6FtSVUN_3kll2EZq1anaKlFSwnS_t54xT4sJrCOg_H3lkijlEWHQMYP1b0PFu_ReuREW4Iemo-kMt6bnHxXc14lo8FJSNvT5bSa2tVcNA")


  val admin = scenario("Admins").exec(Mapi2.cart)
  setUp(
    admin.inject(
      nothingFor(1),
      rampUsers(2) during (4 seconds)
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