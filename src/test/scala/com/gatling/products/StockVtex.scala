package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object StockVtex {

  val csvfeeder = csv("src/test/resources/data/getProductId.csv").circular

  def updateWithLabel1 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL1")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel1}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }

  //  }
  def updateWithLabel2 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 2")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel2}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel3 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 3")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel3}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel4 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 4")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel4}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel5 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 5")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel5}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel6 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 6")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel6}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel7 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 7")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel7}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel8 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 8")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel8}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel9 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 9")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel9}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }
  def updateWithLabel10 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("updateWL 10")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel10}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
    //            .check(status.is(200)))
  }
  //  }


}