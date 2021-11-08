package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object SearchProducts {

  def searchFiltersProducts = {
    exec(
      http("Search Filters IKF")
        .post("/search-filters")
        .body(RawFileBody("data/search-filters.json")).asJson)

      .exec(
        http("Filtered Products IKF")
          .post("/filtered-products")
          .body(RawFileBody("data/filtered-products.json")).asJson)
  }

}
