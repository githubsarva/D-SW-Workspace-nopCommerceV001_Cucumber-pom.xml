$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10863252200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 148608000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2800115400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 289895300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 9270789700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 27872100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add new Customer",
  "description": "",
  "id": "customers;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User click om customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can view Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_om_customers_Menu()"
});
formatter.result({
  "duration": 263040000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 7880754600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 9110103700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "duration": 27942600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 14637476000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Save_button()"
});
formatter.result({
  "duration": 5602862100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 707649800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 154807800,
  "status": "passed"
});
formatter.before({
  "duration": 9627872300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 1094500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2961518100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 223978100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 8650515500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 27932900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Customer by EMailID",
  "description": "",
  "id": "customers;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User click om customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter customer Email",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should found Email in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_om_customers_Menu()"
});
formatter.result({
  "duration": 192151800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 7406263400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_Email()"
});
formatter.result({
  "duration": 494459000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3126509500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "duration": 189179200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 124234500,
  "status": "passed"
});
formatter.before({
  "duration": 11292868700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 2451400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2790149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 236964800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 10105672400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 30958500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Search Customer by Name",
  "description": "",
  "id": "customers;search-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User click om customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Enter customer FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter customer LastName",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User should found Name in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_om_customers_Menu()"
});
formatter.result({
  "duration": 213271800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 6092129400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_FirstName()"
});
formatter.result({
  "duration": 164379900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_LastName()"
});
formatter.result({
  "duration": 3386140400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3204745400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_Search_table()"
});
formatter.result({
  "duration": 120978900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 118976300,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9616993100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 505700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2768491800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 215135200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 11213655900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3114053800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 1893414200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3045621000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 173452200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 29,
      "id": "login;login-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 30,
      "id": "login;login-data-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 31,
      "id": "login;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9676816800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 624100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1626156100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 228015000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 7770275800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3091010400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 2173382400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3041801400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 203405300,
  "status": "passed"
});
formatter.before({
  "duration": 9753808400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 733900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2684101200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 224254600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 9139223200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3090353200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_logout_link()"
});
formatter.result({
  "duration": 2039068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3039736400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 151260600,
  "status": "passed"
});
});