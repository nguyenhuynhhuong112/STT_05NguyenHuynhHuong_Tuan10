import { View, Text, Pressable, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./style";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoAction } from "../../redux/Action";
export const Todolist = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const dispatch = useDispatch()
  const getData = () => {
    fetch("https://654640dcfe036a2fa955674f.mockapi.io/todo/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        dispatch(TodoAction.todoGet.fulfill(data))
        console.log("Data ", data);
      })
      .catch((error) => console.error("Error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    const deleteTodo = (id) => {
      console.log("id ", id);
      fetch(`https://654640dcfe036a2fa955674f.mockapi.io/todo/todos/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
           dispatch(TodoAction.todoDelete.fulfill(id))
          } else {
            console.error("Không thể xóa todo.");
          }
        })
        .catch((error) => {
          console.error("Lỗi", error);
        });
    };

    const updateTodo = (id) => {
      console.log("id ", id);
      console.log("todo update: ", editTodo);
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todos: editTodo };
        }
        return todo;
      });
      fetch(`https://654640dcfe036a2fa955674f.mockapi.io/todo/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todos: editTodo }),
      }).then((response)=>{
        if (response.ok) {
            // setTodos(updatedTodos);
            dispatch(TodoAction.todoUpdate.fulfill(updatedTodos))
            console.log("update ",updatedTodos)
          } else {
            console.error("Lỗi khi cập nhật công việc.");
          }
      })
      setEditingItemId(null);
    };

    return (
      <View style={styles.todo}>
        <Pressable onPress={() => deleteTodo(item.id)}>
          <Ionicons
            name="checkmark-done-circle-outline"
            size={30}
            style={styles.checkDone}
          />
        </Pressable>
        <TextInput
          value={editingItemId === item.id ? editTodo : item.todos}
          style={styles.content}
          underlineColor="transparent"
          theme={{ colors: { primary: "transparent" } }}
          onChangeText={(text) => setEditTodo(text)}
          onFocus={() => setEditingItemId(item.id)}
          onBlur={() => setEditingItemId(null)}
        />
        <Pressable
          onPress={() => {
            updateTodo(item.id);
          }}
        >
          <AntDesign name="edit" size={25} style={styles.edit} />
        </Pressable>
      </View>
    );
  };

  const addTodo = () => {

    navigation.navigate('add')
  };
const {data:todoList} = useSelector((state:any)=>state.todo) 
  console.log("todolist ", todoList)
return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputSearch}
          underlineColor="transparent"
          theme={{ colors: { primary: "transparent" } }}
          placeholder="Search"
          defaultValue={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.add}>
          <Pressable style={styles.buttonAdd} onPress={addTodo}>
            <Ionicons name="add" size={20} style={styles.iconAdd} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
