package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object StockVtex {

  val csvfeeder = csv("src/test/resources/data/getProductId.csv").circular

  def updateWithLabel1 = {

    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("1 PUT STOCK >> 3500")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/977")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("1 GET STOCK >> 3500")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  def updatePriceVtex = {

    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("1 PUT PRICES >> 150")
          .put("/api/pricing/prices/${productId}")
          .body(RawFileBody("data/priceVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("1 GET PRICES >> 150")
          .get("/api/pricing/prices/${productId}")
          .check(jsonPath("$.basePrice").is("150"))
          .check(status.is(200))
      )
  }

  //  }
  def updateWithLabel2 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("2 PUT STOCK >> 6000")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/977")
          .body(RawFileBody("data/stockVtex2.json")).asJson)
      .pause(1, 2)
      .exec(
        http("2 GET STOCK >> 6000")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("6000"))
          .check(status.is(200))
      )
  }
  def updatePriceVtex2 = {

    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("2 PUT PRICES >> 690")
          .put("/api/pricing/prices/${productId}")
          .body(RawFileBody("data/priceVtex2.json")).asJson)
      .pause(1, 2)
      .exec(
        http("2 GET PRICES >> 690")
          .get("/api/pricing/prices/${productId}")
          .check(jsonPath("$.basePrice").is("690"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel3 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL03")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel3}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL03")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel4 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL04")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel4}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL04")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel5 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL05")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel5}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL05")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel6 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL06")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel6}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL06")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel7 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL07")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel7}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL07")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel8 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL08")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel8}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL08")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel9 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL09")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel9}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL09")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }
  def updateWithLabel10 = {
    //    repeat(3) {
    feed(csvfeeder)
      .exec(
        http("update WL10")
          .put("/api/logistics/pvt/inventory/skus/${productId}/warehouses/${withlabel10}")
          .body(RawFileBody("data/stockVtex.json")).asJson)
      .pause(1, 2)
      .exec(
        http("Get Stock WL10")
          .get("/api/logistics/pvt/inventory/skus/${productId}")
          .check(jsonPath("$..totalQuantity").is("3500"))
          .check(status.is(200))
      )
  }
  //  }


}