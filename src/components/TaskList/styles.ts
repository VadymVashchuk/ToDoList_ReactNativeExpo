import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  singleTaskContainer: {
    minHeight: 80,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "rgba(253, 253, 253, 0.6)",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  taskIsDone: {
    backgroundColor: "rgba(134, 134, 134, 0.589)",
  },
  checkboxWrapper: {
    flex: 1,
    transform: [{ scale: 1.4 }],
  },
  textWrapper: {
    flex: 6,
    right: 5,
  },
  textEl: {
    textAlign: "center",
    fontSize: 20,
    width: "90%",
  },
  btnsWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
