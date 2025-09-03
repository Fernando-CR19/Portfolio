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
  },

  Profile: {
    width: "99%",
    margin: "auto",
    top: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 12,
  },

  AboutMe: {
    marginBottom: 2,
  },

  AMTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },

  AMContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
    textAlign: "justify",
    marginBottom: 20,
  },

  MyProjects: {},

  MyProjectsTitle: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  MyProjectsCard: {},

  MyAbilities: {},

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
