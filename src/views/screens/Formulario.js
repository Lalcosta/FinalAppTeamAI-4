import React, { useState, useCallback } from 'react';
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
  Alert,
} from 'react-native';
import colores from '../../consts/colores';

import SelectList from 'react-native-dropdown-picker';
import {CheckBox} from 'react-native-elements'
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Formulario = ({navigation}) => {
  const [europa,setEuropa] = useState(true);
  const [tierra,setTierra] = useState(false);
  const [marte,setMarte] = useState(false);
  
  const [trap,setTrap] = useState(true);
  const [pso,setPSO] = useState(false);
  const [cancri,setCancri] = useState(false);

  const [nino,setNino] = useState(true);
  const [joven,setJoven] = useState(false);
  const [adulto,setAdulto] = useState(false);

  const [roomserv,setRoomserv] = useState(0);
  const [foodc,setFoodc] = useState(0);
  const [shopm,setShopm] = useState(0);
  const [spa,setSpa] = useState(0);
  const [vrd,setVrd] = useState(0);
  const [cabde,setCabde] = useState(0);
  const [cabnum,setCabnum] = useState(0);

  const [cabside,setCabside] = useState(false);

  const [cryo,setCryo] = useState(false);

  const [vip,setVip] = useState(false);

  const [exp,setExp] = useState(0);

  const [noexp,setNoexp] = useState(false);


  var dict = {};

  const onSubmit = async (data) => {
    //Aquí debes cambiar por la ip de donde se encuentre el servidor
    //Ip de EC2: 3.95.5.45
    const response = await fetch("http://54.205.105.245:8080/app", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }})

    const json = await response.json();
    console.log(data);
    console.log(json);  
    if (json["Viajas"]==="1"){
      navigation.navigate('Noviaja')
    }
    if (json["Viajas"]==="0"){
      navigation.navigate('Siviaja')
    }
  }

  const click = () =>{
    if(europa===true){
      dict['hp']=0;
    }
    if(tierra===true){
      dict['hp']=1;
    }
    if(marte===true){
      dict['hp']=2;
    }
    if(trap===true){
      dict['des']=0;
    }
    if(pso===true){
      dict['des']=1;
    }
    if(cancri===true){
      dict['des']=2;
    }
    if(nino===true){
      dict['age']=0;
    }
    if(joven===true){
      dict['age']=1;
    }
    if(adulto===true){
      dict['age']=2;
    }

    dict["rs"]=roomserv;

    dict["fc"]=foodc;

    dict["sm"] = shopm

    dict["spa"] = spa

    dict["vrd"] = vrd

    dict["cabde"] = cabde

    dict["cabnum"] = cabnum

    cabside === true ? dict["cabsde"]=1 : dict["cabsde"]=0

    cryo === true ? dict["cryo"]=1 : dict["cryo"]=0

    vip === true ? dict["vip"]=1 : dict["vip"]=0

    dict["exp"] =exp

    noexp === true ? dict["noexp"]=1 : dict["noexp"]=0
    
    
    
    onSubmit(dict)
    
  }

  return (
    
    <View style={{flex: 2}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex:1}}
        source={require('../../assets/fondoEstrellas.jpg')}>
        <ScrollView style={style.details} showsVerticalScrollIndicator={false} nestedScrollEnabled = {true}> 
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Llena los siguientes campos</Text>
            <Text style={style.headerTitle}> </Text>
            <Text style={style.question}>Elige tu origen </Text>
            <CheckBox
              title="Europa"
              checked={europa}
              onPress = {() => {
                setEuropa(!europa)
                setMarte(false)
                setTierra(false)
              }}
            />
            <CheckBox
              title="Tierra"
              checked={tierra}
              onPress = {() => { 
                setEuropa(false)
                setMarte(false)
                setTierra(!tierra)
              }}
            />
            <CheckBox
              title="Marte"
              checked={marte}
              onPress = {() => { 
                setEuropa(false)
                setMarte(!marte)
                setTierra(false)
              }}
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Elige tu destino </Text>
            <CheckBox
              title="TRAPPIST-1e"
              checked={trap}
              onPress = {() => { 
                  setTrap(!trap)
                  setPSO(false)
                  setCancri(false)
              }}
            />
            <CheckBox
              title="PSO J318.5-22"
              checked={pso}
              onPress = {() => { 
                setTrap(false)
                setPSO(!pso)
                setCancri(false)
              }}
            />
            <CheckBox
              title="55 Cancri e"
              checked={cancri}
              onPress = {() => { 
                setTrap(false)
                setPSO(false)
                setCancri(!cancri)
              }}
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Selecciona tu grupo de edad </Text>
            <CheckBox
              title="De 0 a 18 años"
              checked={nino}
              onPress = {() => { 
                setNino(!nino)
                setJoven(false)
                setAdulto(false)
              }}
            />
            <CheckBox
              title="De 19 a 25 años"
              checked={joven}
              onPress = {() => { 
                setNino(false)
                setJoven(!joven)
                setAdulto(false)
              }}
            />
            <CheckBox
              title="Mayor de 25 años"
              checked={adulto}
              onPress = {() => { 
                setNino(false)
                setJoven(false)
                setAdulto(!adulto)
              }}
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Presupuesto para servicio a la habitación: $ {Math.floor(roomserv)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={20000}
              onValueChange={(value1)=>setRoomserv(value1)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Presupuesto para la zona de comida: $ {Math.floor(foodc)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={20000}
              onValueChange={(value2)=>setFoodc(value2)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Presupuesto para compras en el centro comercial: $ {Math.floor(shopm)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={20000}
              onValueChange={(value3)=>setShopm(value3)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Presupuesto para Spa: $ {Math.floor(spa)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={20000}
              onValueChange={(value4)=>setSpa(value4)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Presupuesto para uso de realidad virtual: $ {Math.floor(vrd)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={20000}
              onValueChange={(value5)=>setVrd(value5)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Grupo de cabinas deseado: {Math.floor(cabde)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={7}
              onValueChange={(value6)=>setCabde(value6)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />
            <Text style={style.question}> </Text>
            <Text style={style.question}>Número de cabina deseado:  {Math.floor(cabnum)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={919}
              onValueChange={(value7)=>setCabnum(value7)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />

            <Text style={style.question}> </Text>
            <Text style={style.question}>Ubicación de la cabina </Text>
            <CheckBox
              title="Este"
              checked={cabside}
              checkedTitle="Oeste"
              onPress = {() => { 
                setCabside(!cabside)
              }}
            />

            <Text style={style.question}> </Text>
            <Text style={style.question}>Cámara de Crio-Sueño</Text>
            <CheckBox
              title="No"
              checked={cryo}
              checkedTitle="Si"
              onPress = {() => { 
                setCryo(!cryo)
              }}
            />

            <Text style={style.question}> </Text>
            <Text style={style.question}>Contratación de servicio VIP</Text>
            <CheckBox
              title="No"
              checked={vip}
              checkedTitle="Si"
              onPress = {() => { 
                setVip(!vip)
              }}
            />

            <Text style={style.question}> </Text>
            <Text style={style.question}>Presupuesto para expediciones:     $ {Math.floor(exp)} </Text>
            <Slider
              style={{width:300,height:50}}
              minimumValue={0}
              maximumValue={20000}
              onValueChange={(value8)=>setExp(value8)}
              thumbTintColor="white"
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
            />

            <Text style={style.question}> </Text>
            <Text style={style.question}>¿Tendrás gastos extras?</Text>
            <CheckBox
              title="No"
              checked={noexp}
              checkedTitle="Si"
              onPress = {() => { 
                setNoexp(!noexp)
              }}
            />

            <Text style={style.question}> </Text>
            <Text style={style.question}> </Text>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={click}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold', fontSize:20}}>Enviar mis datos</Text>
            </View>
            </TouchableOpacity>
            <Text style={style.question}> </Text>
            <Text style={style.question}> </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
btn: {
    height: 50,
    width: 120,
    backgroundColor: colores.blanco,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
},
details: {
  height: '90%',
  bottom: 0,
  position: 'absolute',
  padding: 20,
},
question:{
  color: colores.blanco,
  fontWeight: 'bold',
  fontSize:20,
},
headerTitle: {
  color: colores.blanco,
  fontWeight: 'bold',
  fontSize: 23,
},
btn: {
  height: 50,
  width: 300,
  backgroundColor: colores.blanco,
  marginTop: 20,
  borderRadius: 7,
  justifyContent: 'center',
  alignItems: 'center',
},
});


export default Formulario;
