import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colores from '../../consts/colores';
import lugares from '../../consts/lugares';
const {width} = Dimensions.get('screen');
const Home = ({navigation}) => {
    
  const categoryIcons = [
    <Icon nombre="flight" size={25} color={colores.primario} />,
    <Icon nombre="beach-access" size={25} color={colores.primario} />,
    <Icon nombre="near-me" size={25} color={colores.primario} />,
    <Icon nombre="place" size={25} color={colores.primario} />,
  ];
  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  }; 
  

  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Destino', place)}>
        <ImageBackground style={style.cardImage} source={place.imagen}>
          <Text
            style={{
              color: colores.blanco,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.nombre}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon nombre="place" size={20} color={colores.blanco} />
              <Text style={{marginLeft: 5, color: colores.blanco}}>
                {place.ubicacion}
              </Text>
            </View>
            
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({place}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.imagen}>
        <Text
          style={{
            color: colores.blanco,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.nombre}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon nombre="place" size={22} color={colores.blanco} />
              <Text style={{color: colores.blanco, marginLeft: 5}}>
                {place.ubicacion}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon nombre="star" size={22} color={colores.blanco} />
              <Text style={{color: colores.blanco, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: colores.blanco, fontSize: 13}}>
            {place.detalles}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colores.blanco}}>
      <StatusBar translucent={false} backgroundColor={colores.primario} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colores.primario,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}> </Text>
            <Text style={style.headerTitle}>Explora</Text>
            <Text style={style.headerTitle}>el universo</Text>
          </View>
        </View>
        <Text style={style.sectionTitle}>Nuestros destinos</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={lugares}
            renderItem={({item}) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recomendados</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={lugares}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colores.primario,
  },
  headerTitle: {
    color: colores.blanco,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: colores.blanco,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: colores.secundario,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default Home;