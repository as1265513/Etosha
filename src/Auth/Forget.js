import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View,TouchableOpacity,Image} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  Text,
  Toggle,
} from '@ui-kitten/components';
import LeftTopHand from '../../assets/SVg/LeftTopHand'
import RightTopHand from '../../assets/SVg/RightTopHand'
import Burger from '../../assets/SVg/Burger'

import Pizza from '../../assets/SVg/Pizza'
import BottomRightHand from '../../assets/SVg/BottomRightHand'
import BottomLeftHand from '../../assets/SVg/BottomLeftHand'
import JuiceGlass from '../../assets/SVg/JuiceIcon'
import Etosha from '../../assets/SVg/EtoshaIcon'
import PhoneBook from '../../assets/SVg/PhoneBook';



import {heightToDp, widthToDp} from '../../Utils/Responsive';
import {TextInput} from 'react-native';
import IconMAt from 'react-native-vector-icons/MaterialIcons';

import { COLORS, fontsFamily } from '../../constants';



const useToggleState = (initialState = false) => {
  const [checked, setChecked] = React.useState(initialState);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
  };

  return {checked, onChange: onCheckedChange};
};

const useFocus = () => {
  const htmlElRef = React.useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

export default function Forget({navigation}) {
 
  const [nomber, setNumber] = React.useState('');

 
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  


  const [emailRef, setEmailRef] = useFocus();
 

 

  return (
    <Layout style={styles.container}
    
    >
      <Layout style={{flex: 1, backgroundColor: '#F7F9FC'}}>
        <LeftTopHand
          width={widthToDp(50)}
          height={heightToDp(25)}
          style={styles.TopLeftHand}
        />
        <RightTopHand
          width={widthToDp(25)}
          height={heightToDp(25)}
          style={styles.TopRightHand}
        />
        <Burger
          width={widthToDp(50)}
          height={heightToDp(30)}
          style={styles.pizza}
        />
        <Pizza
          width={widthToDp(50)}
          height={heightToDp(30)}
          style={styles.burger}
        />
        <View style={{alignItems: 'center'}}>
          <Etosha width={widthToDp(40)} height={heightToDp(20)}  />
        </View>

        <Layout
          style={{backgroundColor: '#F7F9FC', width: '100%', marginLeft: 20}}>
          <Text status="basic" style={{fontSize: 20, marginVertical: 10,...fontsFamily.Light}}>
            Forget Passwor
          </Text>
          <Text appearance="hint" style={{marginTop: 5,...fontsFamily.Light}}>
            Enter your Number.
          </Text>
        </Layout>

        <Layout
          style={{
            backgroundColor: '#F7F9FC',
            marginHorizontal: 10,
            marginTop: 30,
          }}>

<View
            style={{
              height: 60,
              borderColor: '#D7D9DB',
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={setEmailRef}>
            <View
              style={{
                borderRightWidth: 1,
                width: 60,
                height: 54,
                marginVertical: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#D7D9DB',
              }}
              onPress={setEmailRef}>
              <PhoneBook onPress={setEmailRef} />
            </View>
            <View onPress={setEmailRef} style={{marginLeft: 10,flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Image
              style={{height:20,width:20,borderRadius:50}}
               source={{uri:'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'}} />
              <IconMAt name="arrow-drop-down" size={25} color={COLORS.black}  />
              </TouchableOpacity>
            
              <TextInput
                ref={emailRef}
                value={nomber}
                onChangeText={text => setNumber(text)}
                style={{height: 35, width: widthToDp(65), paddingBottom: -5,...fontsFamily.Light}}
                placeholder="Number"
              />
            </View>
          </View>

          

          
          <Button
            style={{
              height: 50,
              marginTop: 100,
              borderRadius: 20,
              fontWeight: 'normal',
            }}
            onPress={()=>navigation.navigate("otp")}
            >
            Next
          </Button>

          
          
         
        </Layout>
{/* 
        <View style={{top:145}}>
          <BottomRightHand
            width={widthToDp(70)}
            height={heightToDp(20)}
            style={styles.bottomRighthandIcon}
          />
          <BottomLeftHand
            width={widthToDp(70)}
            height={heightToDp(20)}
            style={styles.bottomLefthandIcon}
          />
          <JuiceGlass style={styles.Juices} />
          <Burger style={styles.BurgerBottom} />
        </View> */}
      </Layout>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  bottomLefthandIcon: {
    bottom: 65,
    left: -110,
  },
  bottomRighthandIcon: {
    bottom: -60,
    right: -250,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  TopRightHand: {
    position: 'absolute',
    right: -18,
    top: -85,
  },
  TopLeftHand: {
    position: 'absolute',
    left: -80,
    top: -65,
  },
  FoodxaIcon: {
    opacity: 0.15,
    position: 'absolute',
    alignSelf: 'center',
    top: heightToDp(30),
  },
  AppIcon: {position: 'absolute', alignSelf: 'center', top: heightToDp(18)},
  pizza: {
    position: 'absolute',
    top: -80,
    right: -50,
    elevation: -1,
    opacity: 0.2,
  },
  burger: {
    position: 'absolute',
    top: -80,
    left: -50,
    elevation: -1,
    opacity: 0.2,
  },
  Juices: {
    position: 'absolute',
    bottom: 40,
    left: -20,
    elevation: -1,
    opacity: 0.2,
  },
  BurgerBottom: {
    position: 'absolute',
    bottom: 40,
    right: -30,
    elevation: -1,
    opacity: 0.2,
    transform: [{rotate: '80deg'}],
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
  Inputstyle: {},
});


