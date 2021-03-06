import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Avatar
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import Menue from '../../assets/SVg/MenuIcon';
import StarIcon from '../../assets/SVg/Star';
import ClockIcon from '../../assets/SVg/Clock';
import {CategoryData,PopularFoods} from '../../model/Data'



import { COLORS } from '../../constants';

const width = Dimensions.get('screen').width;

export default function Home({navigation}) {
  const [search, setSearch] = React.useState('');

  const renderCat = ({item}) => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("FoodCategory",{CategoryName:item.CatName})}
        style={styles.CatContainer}>
        <View
          style={styles.CatImgsec}>
          <Image
            source={item.img}
            style={styles.CatIMg}
          />
          <Text style={{fontFamily: 'Poppins-Regular'}}>{item.CatName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderPopularFood = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 220, 
          width: width - 140,
          margin: 15,
          borderRadius: 30,
          backgroundColor: '#fff',
          elevation:10
          
        }}
        onPress={()=>navigation.navigate('FoodPage')}
        >
        
          <Image
            source={item.img}
            style={{height: 130, width: width - 140, borderRadius: 30}}
          />
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 15,
              backgroundColor: '#fff',
              borderRadius: 50,
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => alert('Book Mark icon is pressed')}
              name="bookmark"
              size={25}
              color="#F24F04"
            />
          </View>
        
        <View>
          <Text style={{marginLeft: 10, marginVertical: 5}} appearance="hint">
            {item.FoodName}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
            }}>
            $ {item.price}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <StarIcon
              style={{ marginLeft: 10}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              {item.Rating}
            </Text>
            <View   style={{marginLeft: 10}}>
            <ClockIcon/>
            </View>
            <Text appearance="hint" style={{marginLeft: 5}}>
              {item.Time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };



  const rendertags=({item})=>{
      return(
        <Text appearance="hint" style={styles.tags}>
        {item.tag}
      </Text>
      )
  }



  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F7F9FC'}}>
      {/* Header Sction */}
      <StatusBar />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
         
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
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
            onPress={()=>navigation.openDrawer()}
            >
            <Menue />
          </TouchableOpacity>
          <Text style={{marginLeft: 5, fontFamily: 'Poppins-Regular'}}>
            {' '}
            Home{' '}
          </Text>
        </View>
        <TouchableOpacity 
       
        >
        <Avatar
        onPress={()=>{alert("ok")}}
          source={require('../../assets/DummyImages/profilePic.png')}
          style={{height: 40, width: 40, borderRadius: 10}}
        />
        </TouchableOpacity>
      </View>

      {/* Search Bar input */}

      <TouchableOpacity
        style={{
          backgroundColor: '#F6F6F6',
          flexDirection: 'row',
          height: 50,
          marginHorizontal: 10,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 0.5,
          borderColor: '#D7D9DB',
          borderRadius: 10,
        }}
        onPress={()=>navigation.navigate('Search')}
        >
        <Text
          style={{marginLeft: 10, fontFamily: 'Poppins-Regular'}}
          appearance="hint"
          >
          Search
        </Text>
        <View
          status="primary"
          style={{
            height: 50,
            width: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
     <Icon name="search" size={25} color={COLORS.white} />

        </View>
      </TouchableOpacity>

      {/* Catergory Section rander in horizental way */}

      <View>
        <FlatList
          data={CategoryData}
          style={{marginHorizontal: 5}}
          keyExtractor={item => item.id}
          renderItem={renderCat}
          horizontal
        />
      </View>

      {/* Popular food section */}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Popular Foods</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("popularFood")}>
          <Text style={{fontFamily: 'Poppins-Regular'}} appearance="hint">
            View All
          </Text>
        </TouchableOpacity>
      </View>
    

      <FlatList
        data={PopularFoods}
        keyExtractor={item => item.id}
        renderItem={renderPopularFood}
        horizontal
      />
        
      {/* Near By resturen */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
         justifyContent:'space-between',          
          
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Nearby Resturent</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("nearbyResturen")}>
          <Text style={{fontFamily: 'Poppins-Regular'}} appearance="hint">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 290, 
          width: width - 20,
          margin: 15,
          borderRadius: 30,
          backgroundColor: '#fff',
          marginBottom:80,
          alignSelf:'center',
          elevation:10
        }}
        onPress={()=>navigation.navigate("ResturentProfile")}
        >
        
          <Image
            source={require('./../../assets/DummyImages/dish.jpg')}
            style={{height: 200, width: width - 20, borderRadius: 30}}
          />
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 15,
              backgroundColor: '#fff',
              borderRadius: 50,
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => alert('Book Mark icon is pressed')}
              name="bookmark"
              size={25}
              color="#F24F04"
            />
          </View>
          <Button
            style={{
              position: 'absolute',
              top: 10,
              left: 15,
              borderRadius: 50,
            }}>
            Free Delivery
          </Button>
        
        <View>
          <Text style={{marginLeft: 10, marginVertical: 5,fontSize:20}} appearance="hint">
            Burger King
          </Text>
          
          <View style={{flexDirection: 'row'}}>
            <StarIcon
              style={{marginLeft: 10}}
            />
            <Text appearance="hint" style={{marginLeft: 5}}>
              4.6
            </Text>
            <View style={{ marginLeft: 15}}>
            <ClockIcon />
            </View>
            <Text appearance="hint" style={{marginLeft: 5}}>
              30 Min
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
           
            <FlatList 

            data={[{id:"1",tag:"Foods"},{id:"2",tag:"Buger"},{id:"3",tag:"Pizza"}]}
            horizontal
            keyExtractor={(item)=>item.id}
            renderItem={rendertags}
            />
            
             
          </View>
        </View>
      </TouchableOpacity>
    
     
    </ScrollView>
  );
}
const styles=StyleSheet.create({
    tags:{marginLeft: 5,marginHorizontal:30,backgroundColor:COLORS.background,borderRadius:10,paddingHorizontal:10},
    CatContainer:{
        height: 50,
        marginVertical: 20,
        marginHorizontal: 5,
        borderRadius: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#fff',
        padding:10,
        width:110,
        elevation:10
      },CatImgsec:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      CatIMg:{height: 20, width: 20, marginRight: 5},
})