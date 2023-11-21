import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
  },
  inputSearch: {
    backgroundColor: "#FFFFFF",
    width: 350,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    height: 50,
  },
  checkDone: {
    color: "#00CC33",
  },
  content: {
    fontSize: 25,
    backgroundColor: "#FFFFFF",
    height:45,
    width:200
  },
  edit: {
    color: "red",
  },
  add: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonAdd: {
    borderRadius: 50,
    backgroundColor: "rgba(0, 189, 214, 1)",
    width: 69,
    height: 69,
    justifyContent: "center",
    alignItems: "center",
  },
  iconAdd:{
    color:'white'
  }
});
