import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  }

  const addGoalHandler = () => {
    //console.log(enteredGoal);
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }


  return (
    <View style = {styles.screen} >
      <View style = {styles.inputContainer}>
        <TextInput  placeholder = "Course Goal" 
         style = {styles.input}  
         onChangeText = {goalInputHandler}
         value = {enteredGoal}
         />
        <Button title = "ADD" onPress = {addGoalHandler} />
      </View>

      <View>
        {courseGoals.map((goal) => 
        <View key = {goal} style = {styles.listItems}> 
          <Text>{goal}</Text> 
        </View> )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center"
  },
  input:{
    width: "80%", 
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    padding: 10
  },
  listItems:{
    padding:10,
    marginVertical: 10,
    backgroundColor: "#ccc" ,
    borderColor: 'black',
    borderWidth:1
  }
});
 