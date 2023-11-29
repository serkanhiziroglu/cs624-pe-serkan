## Input

Application includes an interface to add city and country and see them seperately in different tabs. City and Country tabs are responsible for displaying these items while AddCity and AddCountry is responsible for adding new items. Both of them includes a form to add them. Later, data stroed in the state renders dynamically. Also, each City and Country object has its own locations and currencies.

## Process

This application is built using React Native, with getting help from Expo Go for easier development environment. When a tab is selected, corresponding screen renders for the user. When addCity and addCountry functions are called, state is updates immediately and reflects changes. After user navigates to a specific one, CitiesStackScreen or CountriesStackScreen is called to get input from user using stack navigation.

## Output

Application provides 4 different tabs for adding city, adding country and viewing them and their individual properties (locations and currencies). The app's layout is designed to provide easy navigation and user interaction.