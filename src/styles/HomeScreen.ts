import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Body: {
    top: 5,
    bottom: 5,
    width: "90%",
    margin: "auto",
    padding: 5,
  },

  Title: {
    fontSize: 35,
    color: "#f8fcfd",
  },

  Profile: {
    width: "99%",
    height: 250,
    margin: "auto",
    top: 10,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#06b6d4",
    borderRadius: 12,
    shadowColor: "#06b6d4",
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  AboutMe: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
  },

  AMTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "white",
  },

  AMContent: {
    fontSize: 16,
    lineHeight: 26,
    color: "#cbd5e1",
    textAlign: "justify",
    textAlignVertical: "center",
  },

  MyProjects: {},

  MyProjectsTitle: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  MyProjectsCard: {},

  MyAbilities: {
    marginBottom: 20,
  },

  AbilitiesTitle: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },

  Abilities: {
    fontSize: 18,
  },
});
