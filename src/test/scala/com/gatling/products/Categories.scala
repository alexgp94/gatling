package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Categories {

  def departments = {
    exec(
      http("WEB Departments IKF")
        .get("/departments"))
  }

  def categories = {
    exec(
      http("APP Categories IKF")
        .get("/getcategories"))
  }

}


