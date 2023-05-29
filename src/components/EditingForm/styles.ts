import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  editingFormWrapper: {
    flex: 1,
  },
  modalWindowContentWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    width: "90%",
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "white",
  },
  addNewTaskBtn: {
    borderRadius: 12,
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 15,
  },
  operationBtnsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
