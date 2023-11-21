import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    alignItems: "center",
    padding: 20,
  },
  textTitle: {
    textTransform: "uppercase",
    fontWeight:'700',
    fontSize:30
  },
  input: {
    width: 350,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFFFFF",
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 189, 214, 1)",
    width: 190,
    height: 44,
  },
  textButton: {
    textTransform: "uppercase",
    color: "white",
  },
});
