package com.gatling.products

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Products {

  def products1 = {
    exec(
      http("IKF Products 1")
        .get("/products/029939,017423,029194,026706,005104,006878")
        .check(status.is(200)))
  }

  def products2 = {
    exec(
      http("IKF Products 2")
        .get("/products/009817,024715,108010,141084,198002,428242")
        .check(status.is(200)))
  }

  def products3 = {
    exec(
      http("IKF Products 3")
        .get("/products/006878,011296,025460,026706,424827,023736,002057,030271,034726,034729")
        .check(status.is(200)))
  }

  def products4 = {
    exec(
      http("IKF Products 4")
        .get("/products/032606,013433,011527,011530,024933,003387,028259,028258,011515,028257")
        .check(status.is(200)))
  }

  def products5 = {
    exec(
      http("IKF Products 5")
        .get("/products/017528,024306,024307,001956,034177,034178,034130,012464,004824,032603")
        .check(status.is(200)))

  }

  def products6 = {
    exec(
      http("IKF Products 6")
        .get("/products/029884,024327,029892,004818,006036,924005,010767,026124,011681,002952")
        .check(status.is(200)))
  }

  def products7 = {
    exec(
      http("IKF Products 7")
        .get("/products/012077,425222,029724,034471,010200,002994,025396,033014,034518,025763,023736,025399,010808,010802,024674,033048,010754,032806")
        .check(status.is(200)))
  }

  def products8 = {
    exec(
      http("IKF Products 8")
        .get("/products/034441,029747,011639,003408,034431,034409,011642,431493")
        .check(status.is(200)))
  }

}
