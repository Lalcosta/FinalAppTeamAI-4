import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colores from '../../consts/colores';
const Noviaja = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/fondoEstrellas.jpg')}>
        <View style={style.details}>
          <Text style={{color: colores.blanco, fontSize: 35, fontWeight: 'bold'}}>
            LO SENTIMOS
          </Text>
          <Text style={{color: colores.blanco, fontSize: 35, fontWeight: 'bold'}}>
            No eres candidato para explorar el universo
          </Text>
          <Text style={{color: colores.blanco, lineHeight: 25, marginTop: 15}}>
            Si de verdad es tu sueño explorar el espacio puedes volver a intentar
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Formulario')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Volver a intentarlo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '70%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: colores.blanco,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Noviaja;