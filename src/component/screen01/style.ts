import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 271,
    height: 271,
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    width: 200,
  },
  text: {
    textTransform: "uppercase",
    color: "rgba(131, 83, 226, 1)",
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    width: 334,
    height: 43,
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(144, 149, 160, 1)",
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 189, 214, 1)",
    width: 190,
    height: 44,
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textButton: {
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 1)",
  },
});
