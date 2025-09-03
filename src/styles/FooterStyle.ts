import { StyleSheet } from "react-native";

export default StyleSheet.create({
  FormContainer: {
    width: "90%",
    margin: "auto",
    marginBottom: 15,
  },

  FormTitle: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  FormLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  Form: {
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  FormIcon: {
    fontSize: 20,
    marginRight: 5,
    marginLeft: 5,
  },

  FormInput: {
    fontSize: 15,
    outlineWidth: 0,
    width: "100%",
  },

  FormTextArea: {
    width: "100%",
    height: 120,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    outlineWidth: 0,
  },

  FormButton: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    width: "50%",
    margin: "auto",
  },

  FormButtonText: {
    textAlign: "center",
    fontSize: 20,
  },
});
