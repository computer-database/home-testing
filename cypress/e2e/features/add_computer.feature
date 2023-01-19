Feature: Add computer to the list

  Scenario: Computer in the list
    Given User has access to the portal
    When he add a new computer
    Then he sees the computer added to the list
