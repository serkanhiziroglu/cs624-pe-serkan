import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  addTodo() {
    const { inputValue, todos } = this.state;
    if (inputValue !== '') {
      const newTodo = {
        title: inputValue,
        isCompleted: false,
      };
      const newTodos = [...todos, newTodo];
      this.setState({ todos: newTodos, inputValue: '' });
      console.log('Added todo:', newTodo);
    }
  }

  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Add Todo"
              onPress={() => this.addTodo()}
              color="#007BFF" 
            />
          </View>
          {todos.map((todo, index) => (
            <Text key={index} style={styles.todoText}>{todo.title}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 50,
  },
  todoText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    borderColor: '#000', 
    borderWidth: 2,      
    borderRadius: 5,       
    padding: 10,          
    backgroundColor: '#fff',
  }

});

export default App;
