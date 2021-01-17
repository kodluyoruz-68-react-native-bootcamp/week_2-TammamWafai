import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, keyboardVerticalOffset, Keyboard, KeyboardAvoidingView } from 'react-native';

function InputComponent({ addTodo }) {
    const [task, setTask] = useState('');

    const handleAddTodo = () => {
        Keyboard.dismiss();
        task && addTodo(task);
        setTask('');
    };

    return (

        <View style={styles.inputConatiner}>
            <TextInput
                style={styles.input}
                testID="input"
                value={task}
                placeholder="Enter something to do..."
                onChangeText={(value) => setTask(value)}
            />
            <TouchableOpacity
                style={styles.button}
                testID="button"
                onPress={handleAddTodo}>
                <Text style={styles.buttonText}>ADD TODO</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    inputConatiner: {
        backgroundColor: '#999999', borderRadius: 15, margin: 10, padding: 5
    },
    input: {
        padding: 10, borderRadius: 10, backgroundColor: '#ffffff', margin: 5
    },
    button: {
        padding: 10, backgroundColor: '#eeeeee', margin: 5, borderRadius: 15
    },
    buttonText: {
        color: '#000', fontWeight: 'bold', textAlign: "center", padding: 5
    },
});

export default InputComponent;