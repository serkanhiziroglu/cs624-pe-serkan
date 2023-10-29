import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';
import TabBar from './TabBar';


let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {
    this.setState({ inputValue })
  }
  setType(type) {
    this.setState({ type });
}

inputChange(inputValue) {
  this.setState({ inputValue });
}

 
  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }
  
  toggleComplete (todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }
  
  
  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }


  

  render() {
    const { inputValue, todos } = this.state;
    const { type } = this.state;
    const todosFiltered = todos.filter((todo) => {
       if (type === 'All') return true;
       if (type === 'Complete') return todo.complete;
       if (type === 'Active') return !todo.complete;
    });
    
  
    return (
      <View style={styles.container}>
       <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
    <Heading />
    <Input
        inputValue={inputValue}
        inputChange={text => this.inputChange(text)}
    />
    <TodoList 
        toggleComplete={this.toggleComplete}
        deleteTodo={this.deleteTodo}
        todos={todosFiltered} 
    />
    <View style={styles.buttonContainer}>
        <Button
            title="Add Todo"
            onPress={this.submitTodo}
            color="#007BFF" 
        />
    </View>
</ScrollView>
<TabBar setType={this.setType} type={this.state.type} />


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