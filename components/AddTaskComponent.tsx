import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
// Ensure this is the path to your database module
import { tasks } from '@/db/schema'; // Ensure this is the path to your schema
import db from '@/db/database';

const AddTaskComponent = () => {
    const [taskName, setTaskName] = useState('');

    const addTask = async () => {
        if (!taskName.trim()) {
            Alert.alert('Error', 'Task name cannot be empty');
            return;
        }

        try {
            await db.insert(tasks).values({ name: taskName, listId: 1 }).run();
            Alert.alert('Success', 'Task added successfully');
            setTaskName(''); // Clear the input field after adding
        } catch (error) {
            console.error('Error adding task:', error);
            Alert.alert('Error', 'Failed to add task');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter task name"
                value={taskName}
                onChangeText={setTaskName}
            />
            <Button title="Add Task" onPress={addTask} />
        </View>
    );
};

export default AddTaskComponent;
