import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import React, {useState} from 'react'
import { style } from "./style";
import { useDispatch } from "react-redux";
import { TodoAction } from "../../redux/Action";
export const AddTodo = ({navigation}) => {
  const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState("");
    const addTodo = () => {
        console.log("todo ", newTodo);
        const newTodoItem = {
          name: "Huỳnh Hương",
          todos: newTodo,
        };
        fetch("https://654640dcfe036a2fa955674f.mockapi.io/todo/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodoItem),
        })
          .then((response) => response.json())
          .then((data) => {
            setNewTodo("");
            console.log("new data ", data)
            dispatch(TodoAction.todoCreate.fulfill(data))
          })
          .catch((error) => {
            console.error("Lỗi", error);
          });
      };
  return (
    <View style={style.container}>
      <View>
        <View style={style.title}>
          <Text style={style.textTitle}>add your job</Text>
        </View>
        <TextInput
          underlineColor="transparent"
          theme={{ colors: { primary: "transparent" } }}
          style={style.input}
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <View style={style.containerButton}>
          <Pressable
            style={style.button}
            onPress={addTodo}
          >
            <Text style={style.textButton}>finish</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
