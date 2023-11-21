import React from "react";
import { Image, View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { style } from "./style";
export const LayoutHome = ({navigation}) => {
  const todoList = () =>{
    navigation.navigate('todolist')
  }
  return (
    <View style={style.conatiner}>
      <View style={style.homeContainer}>
        <Image
          source={require("../../../assets/Image 95.png")}
          style={style.image}
        />
      </View>
      <View style={style.bodyContainer}>
        <View style={style.textContainer}>
          <Text style={style.text}>manager your task</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            underlineColor="transparent"
            theme={{ colors: { primary: "transparent" } }}
          />
        </View>
        <View style={style.buttonContainer}>
          <Pressable style={style.button} onPress={todoList}>
            <Text style={style.textButton}>get started</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
