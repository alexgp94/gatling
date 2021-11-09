package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Deeplinks {

  def departmentTree = {
    exec(
      http("Deeplinks")
        .get("/department-tree?keyword=fortalece-tu-cabello-con-tio-nacho")
        .check(status.is(200)))
  }

  def filteredProducts = {
    exec(
      http("Filtered Products")
        .post("/filtered-products")
        .body(RawFileBody("data/deeplink-filtered-products.json")).asJson)
  }

  def departmentTreeMF = {
    exec(
      http("Deeplinks MF")
        .get("/department-tree?keyword=fortalece-tu-cabello-con-tio-nacho")
        .check(status.is(200)))
  }

  def filteredProductsMF = {
    exec(
      http("Filtered Products MF")
        .post("/filtered-products")
        .body(RawFileBody("data/deeplink-filtered-productsMF.json")).asJson)
  }

}
