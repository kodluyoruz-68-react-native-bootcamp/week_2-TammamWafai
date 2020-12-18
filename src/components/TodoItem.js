import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function TodoItem({ todo, deleleTodo, onToggle }) {
    return (
        <TouchableOpacity
            testID="button"
            style={styles[todo.isDone ? 'inActive' : 'active']}
            onPress={onToggle(todo.id)}
            onLongPress={deleleTodo(todo.id)}>
            <Text style={styles[todo.isDone ? 'textDone' : 'text']}>{todo.task}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    active: {
        padding: 10, backgroundColor: '#cc0000', margin: 9, borderRadius: 10
    },
    inActive: {
        padding: 10, backgroundColor: '#eebbbb', margin: 9, borderRadius: 10
    },
    text: { color: '#ffffff', fontWeight: 'bold', padding: 4, fontSize: 17 },
    textDone: {
        color: '#ffffff', fontWeight: 'bold', padding: 4, fontSize: 12,
        textDecorationLine: 'line-through',
    },
});

export default TodoItem;