import React from 'react';
import {View, StyleSheet, Switch, TouchableOpacity, Image} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {Text, Avatar,Toggle} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Close from '../../assesst/Icon/close.svg';

export function DrawerContent(props) {
    const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };
  return (
    <View style={{flex: 1, borderTopRightRadius: 30}}>
      <DrawerContentScrollView {...props} style={{borderTopRightRadius: 30}}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderColor: '#D7D9DB',
                  }}
                  onPress={() => props.navigation.closeDrawer()}>
                  <Icon name="close" size={25} color="#000" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 40,
                alignItems: 'center',
              }}>
              <Avatar
                source={require('../../assets/DummyImages/profilePic.png')}
                style={{height: 60, width: 60, borderRadius: 10}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}>Dwayne Johnson</Text>
                <Text style={{fontSize: 10}} appearance="hint">@Dwaynejohnson</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}
           onPress={()=>props.navigation.navigate("Profile")}
          >
          <View>
              <Text style={{fontSize: 16}}>Profile</Text>
              <Text style={{fontSize: 10}} appearance="hint">See my profile</Text>
          </View>
          <Icon name="arrow-right" size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',margin:20,justifyContent:'space-between'}} 
          onPress={()=>props.navigation.navigate("Categories")}
          >
          <View>
              <Text style={{fontSize: 16}}>Categories</Text>
              <Text style={{fontSize: 10}} appearance="hint">See Categories items</Text>
          </View>
          <Icon name="arrow-right" size={25} color="#000" />
          </TouchableOpacity>


          <TouchableOpacity style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}
           onPress={()=>props.navigation.navigate("Cart")}
          >
          <View>
              <Text style={{fontSize: 16}}>Cart</Text>
              <Text style={{fontSize: 10}} appearance="hint">See my cart items</Text>
          </View>
          <Icon name="arrow-right" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}
          onPress={()=>props.navigation.navigate("MyCard")}
          >
          <View>
              <Text style={{fontSize: 16}}>Payment Card</Text>
              <Text style={{fontSize: 10}} appearance="hint">See my payment card option</Text>
          </View>
          <Icon name="arrow-right" size={25} color="#000" />
          </TouchableOpacity>

 <View style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}>
          <View>
              <Text style={{fontSize: 16}}>Push-Notifications</Text>
              <Text style={{fontSize: 10}} appearance="hint">Set up push notification</Text>
          </View>
          <Toggle checked={checked} onChange={onCheckedChange} />
          </View>
          
          <TouchableOpacity style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}
          onPress={()=>props.navigation.replace("login")}
          
          
          >
          <View>
              <Text style={{fontSize: 16}}>Logout</Text>
              <Text style={{fontSize: 10}} appearance="hint">See you latter</Text>
          </View>
          <Icon name="exit-to-app" size={25} color="#000" />
          
          </TouchableOpacity>
          
        

         
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
