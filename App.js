import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text, Alert } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'
import Header from './components/Header';


export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle != "") {
      setCourseGoal(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
      setIsAddMode(false);
    }
    else {
      Alert.alert('Oops! No text found', 'Kindly enter the work to be added',
        [{
          text: 'Okay',
          style: 'destructive',
          onPress: () => {
            <GoalInput visible={isAddMode}
              onAddGoal={addGoalHandler}
              onCancel={cancelGoalAdditionHandler} />
          }
        }])
    }
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goals) => goals.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.appStyle}>
      <Header title="Todo List" />
      <View style={styles.screen}>
        <Button title="Add new work" onPress={() => setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  appStyle: {
    flex: 1
  }
});
