## Input

Application includes a text input and a Add Todo button to add new todos. While adding a new todo, inputValue and todos state changes. Also, user can switch between 3 different tabs to see All, Completed or Ongoing tasks. 

## Process

This application is built using React Native, with getting help from Expo Go for easier development environment. After adding a new todo, inputChange and addTodo functions are called to manage the state. addTodo function checks for a non-empty input, if it is, creates a new todo object and appends it to todo list. Also, application makes possible to delete or complete tasks. If user clicks Done, task's completion attribute becomes completed and it appears on Complete tab and removes itself from ongoing tasks display.

## Output

Application dynamically renders list of todos added by input field. This is achieved by applying map() function to todo items. Also, user can switch between tabs to see all, complete and ongoing tasks. When clicked one of these, application will filter the tasks.