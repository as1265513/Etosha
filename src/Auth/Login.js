import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
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
import FoofDeliverIcon from '../../assesst/Svg/CenterSvgIcon.svg';
import BottomLeftHand from '../../assesst/Svg/bottomLeftHand.svg';
import BottomRightHand from '../../assesst/Svg/bottomRightHand.svg';
import TopRightHand from '../../assesst/Svg/rightTopHand.svg';
import TopLefthand from '../../assesst/Svg/leftTopHand.svg';
import Etosha from '../../assesst/Svg/etosha.svg';
import Burger from '../../assesst/Svg/burger.svg';
import JuiceGlass from '../../assesst/Svg/juiceGlass.svg';
import Pizza from '../../assesst/Svg/Pizza.svg';
import EmailSvg from '../../assesst/Icon/email.svg';
import Lock from '../../assesst/Icon/lock.svg';

import {BlurView} from '@react-native-community/blur';
import {heightToDp, widthToDp} from '../../Utils/Responsive';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeartIcon = props => <Icon {...props} name="heart" />;
const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

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

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const [emailRef, setEmailRef] = useFocus();
  const [PasswordRef, setPasswordRef] = useFocus();

  const Saveme = useToggleState();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Layout style={styles.container}>
      <Layout style={{flex: 1, backgroundColor: '#F7F9FC'}}>
        <TopLefthand
          width={widthToDp(50)}
          height={heightToDp(25)}
          style={styles.TopLeftHand}
        />
        <TopRightHand
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
          <Etosha height={100} style={{marginVertical: 20}} />
        </View>

        <Layout
          style={{backgroundColor: '#F7F9FC', width: '100%', marginLeft: 20}}>
          <Text status="basic" style={{fontSize: 20, marginVertical: 10}}>
            Login
          </Text>
          <Text appearance="hint" style={{marginVertical: 5}}>
            Enter your email and password.
          </Text>
        </Layout>

        <Layout
          style={{
            backgroundColor: '#F7F9FC',
            marginHorizontal: 20,
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
              <EmailSvg onPress={setEmailRef} />
            </View>
            <View onPress={setEmailRef} style={{marginLeft: 10}}>
              <Text onPress={setEmailRef} appearance="hint">
                Email
              </Text>
              <TextInput
                ref={emailRef}
                value={email}
                onChangeText={text => setEmail(text)}
                style={{height: 35, width: widthToDp(65), paddingBottom: -5}}
                placeholder="email here"
              />
            </View>
          </View>

          <View
            style={{
              height: 60,
              borderColor: '#D7D9DB',
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: 'row',
              marginVertical: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
              onPress={setPasswordRef}>
              <Lock onPress={setPasswordRef} />
            </View>
            <View
              onPress={setPasswordRef}
              style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text onPress={setPasswordRef} appearance="hint">
                password
              </Text>
              <TextInput
                ref={PasswordRef}
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={text => setpassword(text)}
                style={{height: 35, width: widthToDp(60), paddingBottom: -5}}
                placeholder="Password"
              />
            </View>
            <Ionicons
              onPress={toggleSecureEntry}
              size={20}
              color="#000"
              name={secureTextEntry ? 'eye-off' : 'eye'}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Toggle style={styles.toggle} status="info" {...Saveme}>
              <Text appearance="hint">Save me</Text>
            </Toggle>
            <Text onPress={()=>navigation.navigate('forget')} category="h6">Forget Password?</Text>
          </View>
          <Button
            style={{
              height: 50,
              marginTop: 20,
              borderRadius: 20,
              fontWeight: 'normal',
            }}
            onPress={()=>navigation.navigate("UserTab")}
            
            >
            Login
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text>Don't have an account?</Text>
            <Text onPress={()=>navigation.navigate('signup')} style={{fontSize:20}} status="primary">   Sign Up</Text>
          </View>
        </Layout>

        <View>
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
        </View>
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
    bottom: 38,
    left: -110,
  },
  bottomRighthandIcon: {
    bottom: -80,
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