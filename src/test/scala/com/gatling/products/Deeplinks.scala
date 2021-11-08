package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Deeplinks {

  def deeplinks = {
    exec(
      http("Deeplinks IKF")
        .get("/department-tree?keyword=fortalece-tu-cabello-con-tio-nacho")
        .check(status.is(200)))

    exec(
      http("Filtered Products IKF")
        .post("/filtered-products")
        .body(RawFileBody("data/deeplink-filtered-products.json")).asJson)

    exec(
      http("Deeplinks IKF")
        .get("/department-tree?keyword=fortalece-tu-cabello-con-tio-nacho")
        .check(status.is(200)))

  }

}
