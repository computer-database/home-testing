package com.github.prmiguel.cdb;

import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class BasicSimulation extends Simulation {

  private HttpProtocolBuilder httpProtocol = http
    .baseUrl("https://computer-database.gatling.io")
    .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*detectportal\\.firefox\\.com.*"))
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.9")
    .upgradeInsecureRequestsHeader("1")
    .userAgentHeader("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");
  
  private Map<CharSequence, String> headers_0 = Map.ofEntries(
    Map.entry("sec-ch-ua", "Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Linux"),
    Map.entry("sec-fetch-dest", "document"),
    Map.entry("sec-fetch-mode", "navigate"),
    Map.entry("sec-fetch-site", "none"),
    Map.entry("sec-fetch-user", "?1")
  );
  
  private Map<CharSequence, String> headers_1 = Map.ofEntries(
    Map.entry("sec-ch-ua", "Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Linux"),
    Map.entry("sec-fetch-dest", "document"),
    Map.entry("sec-fetch-mode", "navigate"),
    Map.entry("sec-fetch-site", "same-origin"),
    Map.entry("sec-fetch-user", "?1")
  );
  
  private Map<CharSequence, String> headers_8 = Map.ofEntries(
    Map.entry("origin", "https://computer-database.gatling.io"),
    Map.entry("sec-ch-ua", "Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108"),
    Map.entry("sec-ch-ua-mobile", "?0"),
    Map.entry("sec-ch-ua-platform", "Linux"),
    Map.entry("sec-fetch-dest", "document"),
    Map.entry("sec-fetch-mode", "navigate"),
    Map.entry("sec-fetch-site", "same-origin"),
    Map.entry("sec-fetch-user", "?1")
  );


  private ScenarioBuilder scn = scenario("BasicSimulation")
    .exec(
      http("request_0")
        .get("/computers/")
        .headers(headers_0)
    )
    .pause(5)
    .exec(
      http("request_1")
        .get("/computers?f=macbook")
        .headers(headers_1)
    )
    .pause(2)
    .exec(
      http("request_2")
        .get("/computers/6")
        .headers(headers_1)
    )
    .pause(14)
    .exec(
      http("request_3")
        .get("/computers")
        .headers(headers_1)
    )
    .pause(14)
    .exec(
      http("request_4")
        .get("/computers?p=1&n=10&s=name&d=asc")
        .headers(headers_1)
    )
    .pause(1)
    .exec(
      http("request_5")
        .get("/computers?p=2&n=10&s=name&d=asc")
        .headers(headers_1)
    )
    .pause(2)
    .exec(
      http("request_6")
        .get("/computers?p=3&n=10&s=name&d=asc")
        .headers(headers_1)
    )
    .pause(16)
    .exec(
      http("request_7")
        .get("/computers/new")
        .headers(headers_1)
    )
    .pause(29)
    .exec(
      http("request_8")
        .post("/computers")
        .headers(headers_8)
        .formParam("name", "Alienware")
        .formParam("introduced", "2022-12-12")
        .formParam("discontinued", "2023-12-12")
        .formParam("company", "5")
    );

  {
	  setUp(scn.injectOpen(atOnceUsers(1))).protocols(httpProtocol);
  }
}
