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

  return (
    <View style={styles.container}>
    <View style={styles.resultcontainer}>
      <Text style={styles.resultText}> {resultado}</Text> 
    </View >
    <View style={styles.buttonContainer}>
        <View style={styles.row}>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('7')}
            >
                <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('8')}
            >
                <Text style={styles.buttonText}> 8 </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('9')}
            >
                <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('4')}
            >
                <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('5')}
            >
                <Text style={styles.buttonText}> 5 </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('6')}
            >
                <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('1')}
            >
                <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('2')}
            >
                <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('3')}
            >
                <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('0')}
            >
                <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('.')}
            >
                <Text style={styles.buttonText}> . </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {calculadoraResultado}
            >
                <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('+')}
            >
                <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('-')}
            >
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('*')}
            >
                <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {() => handleButtonPress('/')}
            >
                <Text style={styles.buttonText}> / </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress= {limpiarResultado}
            >
                <Text style={styles.buttonText}> C </Text>
            </TouchableOpacity>
            
          
        </View>

    </View>
        
</View>
  );

 
};

const styles = StyleSheet.create({

  
    resultcontainer: {
        marginBottom: 20,
        color: 'white'
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
         color: 'white'
    },
    buttonContainer: {
        width: 300,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 4
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

});


export default Calculadora;
