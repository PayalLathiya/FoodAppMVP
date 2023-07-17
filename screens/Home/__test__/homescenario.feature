Feature: HomeScreen

    Scenario: User navigates to HomeScreen
        Given I am a User loading HomeScreen
        When I navigate to the HomeScreen
        Then HomeScreen will load with out errors
        Then I can search product
        Then I can select menu
        Then I can see recomanded
        Then I can see popular
        Then I can see and select food category
        Then I can see list of product