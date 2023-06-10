import React from "react";
import Calculadora from "./Calculadora";
import { View, StyleSheet } from "react-native";



const HomeApp = () => {
    return(
        <View style={styles.container}>
            <Calculadora/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default HomeApp;



