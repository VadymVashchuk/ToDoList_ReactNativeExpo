import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleWrapper: {
    minHeight: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f1f1f1",
  },
  headerContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addBtnWrapper: {
    fontWeight: "bold",
    color: "black",
    width: 140,
  },
  addBtn: {
    padding: 0,
    margin: 0,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
  },
});
