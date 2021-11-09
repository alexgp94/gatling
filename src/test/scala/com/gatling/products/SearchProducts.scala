package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object SearchProducts {

  def searchFilters = {
    exec(
      http("Search Filters IKF")
        .post("/search-filters")
        .body(RawFileBody("data/search-filters.json")).asJson)
  }

  def filteredProducts = {
    exec(
      http("Filtered Products IKF")
        .post("/filtered-products")
        .body(RawFileBody("data/filtered-products.json")).asJson)
  }

}
