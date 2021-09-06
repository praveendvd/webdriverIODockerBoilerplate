Feature: Sort and add to cart functionaloty

Background: User is logged in
  Given User is logged into "https://www.saucedemo.com/" as "admin"

  Scenario: User can add items to cart
    When Adds "Sauce Labs Fleece Jacket" to cart
    Then Total items in cart will be 1




