import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };


    return (

        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputScreen}>
                <View style={styles.inputContianer}>
                    <TextInput
                        placeholder="Work ToDo"
                        style={styles.input}
                        onChangeText={goalInputHandler}
                        value={enteredGoal}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="ADD" onPress={addGoalHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="CANCEL" color="red" onPress={props.onCancel} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>

    );
}
const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    inputScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'

    },
    button: {
        width: '40%'
    }, inputContianer: {
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',

    }


})




export default GoalInput;
