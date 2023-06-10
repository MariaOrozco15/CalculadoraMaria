import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {create, all} from 'mathjs'; 
//proporciona una API matemática completa para realizar
//cálculos complejos y manipulación de expresiones.

const math = create(all); //(all)es una función de mathjs que crea una instancia
//de la calculadora matemática con todas las funciones y constantes disponibles.
const Calculadora = () => {
  const [resultado, setResultado] = useState(''); //mostrar
  //el resultado de las operaciones matemáticas (+, -, *, /):
 
  const handleButtonPress = value => {
    setResultado( resultado + value);
  };
  const calculadoraResultado = () => {
    try {
      const evaluatedResult = math.evaluate(resultado);
      setResultado(evaluatedResult.toString());
    } catch (error) {
        setResultado('Error');
    }
  };
  //punto 12
  const limpiarResultado = () => {
    setResultado('');
  };
 
};



export default Calculadora;
