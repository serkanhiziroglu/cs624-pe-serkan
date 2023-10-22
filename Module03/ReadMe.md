## Input

Application includes a text input and a Add Todo button to add new todos. While adding a new todo, inputValue and todos state changes.

## Process

This application is built using React Native, with getting help from Expo Go for easier development environment. After adding a new todo, inputChange and addTodo functions are called to manage the state. addTodo function checks for a non-empty input, if it is, creates a new todo object and appends it to todo list.

## Output

Application dynamically renders list of todos added by input field. This is achieved by applying map() function to todo items. Each todo is displayed as a styled text element. 