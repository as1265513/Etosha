import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';

import Home from "./Home"
import StackNavigationUser from './StackNavigation'
import Icocion from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import StoreIcon from './../../assesst/Icon/Store.svg'

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: "#fff"
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    
}


const TabBarCustomButtonForNormaol = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected
    console.log(accessibilityState);

   
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: "#F7F9FC" }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={"#ffffff"}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: "#F7F9FC" }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#F24F04"
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    
}







const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        
                        height: 30,
                        backgroundColor: "#fff"
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}

const UserTabs = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: 1,
          },
        }}
        tabBar={props => <CustomTabBar props={props} />}>
        <Tab.Screen
          name="Home"
          component={StackNavigationUser}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                size={25}
                color={focused ? '#F24F04' : '#B2B6BB'}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Search"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
                <Octicons
                name="bell"
                size={25}
                color={focused ? '#F24F04' : '#B2B6BB'}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Like"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
                <StoreIcon
              
                
                color={focused ? '#F24F04' : '#B2B6BB'}
              />
            ),
            tabBarButton: props => <TabBarCustomButtonForNormaol {...props} />,
          }}
        />

        <Tab.Screen
          name="User"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
                <Foundation
                name="heart"
                size={25}
                color={focused ? '#F24F04' : '#B2B6BB'}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />
        <Tab.Screen
          name="User1"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
                <Icocion
                name="md-person"
                size={25}
                color={focused ? '#F24F04' : '#B2B6BB'}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />
      </Tab.Navigator>
    );
}

export default UserTabs 
