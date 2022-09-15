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
const Intro = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/fondoEstrellas.jpg')}>
        <View style={style.details}>
          <Text style={{color: colores.blanco, fontSize: 35, fontWeight: 'bold'}}>
            Descubre
          </Text>
          <Text style={{color: colores.blanco, fontSize: 35, fontWeight: 'bold'}}>
            el universo con nosotros
          </Text>
          <Text style={{color: colores.blanco, lineHeight: 25, marginTop: 15}}>
            Adentrate en una experiecia única, explora personalmente galaxias y fenómenos espaciales.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Inicia tu viaje</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
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
export default Intro;