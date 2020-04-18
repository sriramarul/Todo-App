import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.ListContainer}>
            <View style={styles.ListItem}>
                <Text>{props.title}</Text>
            </View>
            <TouchableOpacity>
                <Button title="Remove" color="red" onPress={props.onDelete.bind(this, props.id)} style={{ elevation: 8 }} />
            </TouchableOpacity>
        </View>);
};

const styles = StyleSheet.create({
    ListItem: {
        width: '75%',
        height: '90%',
        marginVertical: 0,
        elevation: 8,
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0,
        alignItems: 'center'
    },
    ListContainer: {
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})
export default GoalItem;