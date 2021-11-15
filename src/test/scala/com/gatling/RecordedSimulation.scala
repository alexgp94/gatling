package com.gatling

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://www.venp.pe")
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "en-US,en;q=0.9,es;q=0.8",
		"Cache-Control" -> "no-cache",
		"Pragma" -> "no-cache",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1",
		"sec-ch-ua" -> """Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "macOS")

	val headers_1 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "en-US,en;q=0.9,es;q=0.8",
		"Cache-Control" -> "no-cache",
		"Pragma" -> "no-cache",
		"Sec-Fetch-Dest" -> "style",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "macOS")

	val headers_3 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "en-US,en;q=0.9,es;q=0.8",
		"Cache-Control" -> "no-cache",
		"Pragma" -> "no-cache",
		"Sec-Fetch-Dest" -> "script",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "macOS")

	val headers_5 = Map(
		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "en-US,en;q=0.9,es;q=0.8",
		"Cache-Control" -> "no-cache",
		"Pragma" -> "no-cache",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin",
		"sec-ch-ua" -> """Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "macOS")

	val headers_14 = Map(
		"sec-ch-ua" -> """Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "macOS")



	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("/venp/inicio.do")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/venp/css/estilos.css")
			.headers(headers_1),
            http("request_2")
			.get("/venp/css/estilos_responsive.css")
			.headers(headers_1),
            http("request_3")
			.get("/venp/js/jquery.anoslide.js")
			.headers(headers_3),
            http("request_4")
			.get("/venp/js/jquery-1.10.2.min.js")
			.headers(headers_3),
            http("request_5")
			.get("/venp/img/loader.gif")
			.headers(headers_5),
            http("request_6")
			.get("/venp/img/logo_onpe.png")
			.headers(headers_5),
            http("request_7")
			.get("/venp/img/logo-voto-electronico.png")
			.headers(headers_5),
            http("request_8")
			.get("/venp/img/btn_fond.png")
			.headers(headers_5),
            http("request_9")
			.get("/venp/img/fondo_dos.jpg")
			.headers(headers_5),
            http("request_10")
			.get("/venp/onpe.ico")
			.headers(headers_5),
            http("request_11")
			.get("/venp/img/001.jpg")
			.headers(headers_5),
            http("request_12")
			.get("/venp/img/next.png")
			.headers(headers_5),
            http("request_13")
			.get("/venp/onpe.ico")
			.headers(headers_5)))
		.pause(6)
		.exec(http("request_14")
			.get("/venp/img/003.jpg")
			.headers(headers_14)
			.resources(http("request_15")
			.get("/venp/img/prev.png")
			.headers(headers_14)))
		.pause(6)
		.exec(http("request_16")
			.get("/venp/img/002.jpg")
			.headers(headers_14))
		.pause(6)
		.exec(http("request_17")
			.get("/venp/img/005.jpg")
			.headers(headers_14))

	setUp(scn.inject(atOnceUsers(4000))).protocols(httpProtocol)
}