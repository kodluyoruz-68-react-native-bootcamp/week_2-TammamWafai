import React, { useState } from 'react';
import { Keyboard, SafeAreaView, View, Text, FlatList, StyleSheet, keyboardVerticalOffset, ScrollView, KeyboardAvoidingView } from 'react-native';
import InputComponent from './components/InputComponent';
import TodoItem from './components/TodoItem';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todoList, setTodos] = useState([]);

  const addTodo = (text) => {
    text !== '' &&
      setTodos([
        ...todoList,
        { id: Math.random().toString(), task: text, isDone: false },
      ]);
  };

  const onRemove = (id) => (e) => {
    setTodos(todoList.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => (e) => {
    setTodos(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
    console.log(todoList);
  };

  const renderList = ({ item }) => (
    <TodoItem todo={item} deleleTodo={onRemove} onToggle={onToggle} />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>

      <View style={styles.todoContainer}>
        <View style={styles.todoHeader}>
          <Text style={styles.todoCounter}>TODO</Text>
          <Text style={styles.todoCounter}>{todoList.length}</Text>
        </View>


        <View style={styles.taskContainer}>
          <FlatList
            testID="list"
            data={todoList}
            //keyExtractor={(item, index) => String(index)}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={renderList}
          />

        </View>

        <View style={styles.todoInput}>
          <InputComponent addTodo={addTodo} />
        </View>

      </View>

    </SafeAreaView>

  );
}
const styles = StyleSheet.create(
  {
    todoContainer: {
      flexDirection: 'column', flex: 1
    },
    todoHeader: {
      flex: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 10, margin: 10
    },
    todoCounter: {
      fontSize: 30, color: '#ff0000', fontWeight: 'bold'
    },
    taskContainer: {
      flex: 60,
      justifyContent: 'space-between',
      margin: 2,
    },
    todoInput: {
      flex: 22,
    },
  });

export default App;