import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Layout,
  List,
  Input,
  Card,
  Avatar,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Arrow from '../../assesst/Icon/arrowBack.svg';

const width = Dimensions.get('screen').width;

const data = [
  {
    id: '#2145',
    FoodName: 'Whipping cream',
    img: require('./../../assesst/food/icecream.jpg'),
    ResturentLogo:require('./../../assesst/Burgerking.png'),
    price: 3.99,
    totlatItems:5,
    Time: '20 min',
    status:"done"
  
  },

  {
    id: '#2149',
    FoodName: 'Stir-Fried Spicy',
    img: require('./../../assesst/food/dishfood.jpg'),
    ResturentLogo:require('./../../assesst/Burgerking.png'),
    price: 9.99,
    totlatItems:2,
    Time: '15 min',
    status:"done"
  },
  {
    id: '#2146',
    FoodName: 'Burger',
    img: require('./../../assesst/food/burgerCat.jpg'),
    ResturentLogo:require('./../../assesst/Burgerking.png'),
    price: 200.0,
    totlatItems:5,
    Time: '20 min',
    status:"pending"
  },
  {
    id: '#2144',
    FoodName: 'Rice',
    img: require('./../../assesst/food/rice.jpg'),
    ResturentLogo:require('./../../assesst/Burgerking.png'),
    price: 200.0,
    totlatItems:5,
    Time: '20 min',
    status:"pending"
  },
];


export default function Profile({navigation}) {
  const [index, setIndex] = React.useState(1);
  const [RunningOrder, SetRuningOrder] = React.useState(data.filter(item=>item.status=="pending"));
  const [PastOrder, setPastOrder] = React.useState(data.filter(item=>item.status=="done"));
  const RanderFoods = ({item}) => {
  console.log(RunningOrder)

    return (
      <View
        style={styles.renderFoodCard}>
       <View style={styles.CardLogoContainer}>
       <Avatar source={item.ResturentLogo} />

       <View style={styles.FoodImageContainer}>
       <Image source={item.img} style={styles.foodImage} />
       </View>

       <Text style={styles.Idtxt} appearance="hint">{item.id}</Text>
         </View>

         <Text style={styles.CardText}>{item.FoodName}</Text>
         <Text style={styles.CardText}>{'$'+item.price}</Text>

         <View style={styles.itemContainer}>
         <Text appearance="hint">Items: {item.totlatItems}</Text>
         <Text appearance="hint">Delivery time: {item.Time}</Text>
         </View>


         <View style={styles.itemContainer}>
         <TouchableOpacity style={[styles.BtnStyle,styles.shadow,{backgroundColor:'#F24F04'}]}><Text style={[styles.buttonText,{color:'#fff'}]}>Track Order</Text></TouchableOpacity>
         <TouchableOpacity style={[styles.BtnStyle,styles.shadow,{backgroundColor:'#fff'}]}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
         </View>



      </View>
    );
  };

  const Headers=()=>(
    <View style={{marginBottom:30}}>
    <View
      style={styles.header}>
      <View style={styles.headerFlex}>
        <TouchableOpacity
          style={styles.MenueBtn}
          onPress={() => navigation.goBack()}>
          <Arrow />
        </TouchableOpacity>
        <Text style={styles.ScreenTitle}>
          My Order
        </Text>
      </View>
    </View>
    {/* Search input field */}

   
    <View
      style={styles.ButtonContainer}>
      <Button
        size="giant"
        style={[styles.ButtonSele]}
        onPress={() => setIndex(1)}
        status={index !== 1 ? 'success' : 'primary'}>
        <Text style={{color:index == 1 ?"#Fff":"#000"}}>Running Order</Text>
      </Button>
      <Button
        size="giant"
        style={styles.ButtonSele}
        onPress={() => setIndex(2)}
        status={index !== 2 ? 'success' : 'primary'}>
        <Text style={{color:index == 2 ?"#Fff":"#000"}}>Past Order </Text>
      </Button>
    </View>
  </View>

  )

  return (
    <Layout style={styles.conTainer}>
      <StatusBar />

      

      {index === 1 && RunningOrder.length > 0 ? (
        <List
        ListHeaderComponent={Headers}
          data={RunningOrder}
          keyExtractor={item => item.id}
          renderItem={RanderFoods}
          
          ListFooterComponent={() => (
            <View style={{height: 60, width: '100%'}} />
          )}
        />
      ) :index === 1 && RunningOrder.length == 0 ?(<View style={{justifyContent:'space-between'}}>
          {Headers()}
          <View style={styles.emptyImageContainer} >
              <Image source={require('../../assesst/emptyNote.png')} style={styles.imageEmpty} />
          </View>

          <Text style={{textAlign:'center',fontSize:18,fontFamily:'Poppins-Light',margin:30}}>
          No Running Order{'\n'} Right Now
          </Text>

          <Button
          style={[{
            marginHorizontal: 20,
            height: 50,
            borderRadius: 30,
            marginTop: 25,    
            margin:45    
          },
          styles.shadow
          ]}
          onPress={()=>navigation.navigate("MyOrder")}
          >
          Order Now
        </Button>
      </View>):null
      }

      {index === 2 && PastOrder.length > 0  ? (
        <List
        ListHeaderComponent={Headers}
          data={PastOrder}
          keyExtractor={item => item.id}
          renderItem={RanderFoods}
          
          ListFooterComponent={() => (
            <View style={{height: 60, width: '100%'}} />
          )}
        />
      ) : index === 2 && PastOrder.length == 0 ?(<View style={{justifyContent:'space-between'}}>
          {Headers()}
          <View style={styles.emptyImageContainer} >
              <Image source={require('../../assesst/emptyNote.png')} style={styles.imageEmpty} />
          </View>

          <Text style={{textAlign:'center',fontSize:18,fontFamily:'Poppins-Light',margin:30}}>
          No Past Order {'\n'}History
          </Text>

          <Button
          style={[{
            marginHorizontal: 20,
            height: 50,
            borderRadius: 30,
            marginTop: 25,    
            margin:45    
          },
          styles.shadow
          ]}
          onPress={()=>navigation.navigate("MyOrder")}
          >
          Order Now
        </Button>
      </View>):null
      
      }
    </Layout>
  );
}
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
      },
    Container:{flex: 1, backgroundColor: '#F7F9FC'},
    headerFlex:{flexDirection: 'row', alignItems: 'center'},
    MenueBtn:{
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#D7D9DB',
      },
      ScreenTitle:{marginLeft: 5, fontFamily: 'Poppins-Light'},

  ButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  renderFoodCard:{
    paddingBottom: 10,
    width: width -20,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  CardLogoContainer:{flexDirection:'row',justifyContent:'space-between',margin:10},
  FoodImageContainer:{height:80,width:80,borderRadius:50,backgroundColor:"#ffffff",justifyContent:'center',alignItems:'center',elevation:20,},
  foodImage:{height:70,width:70,borderRadius:50},
  Idtxt:{fontSize:10,fontFamily:"Poppins-Light"},
  shadow: {
    shadowColor: '#F24F04',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 7,
  },
  CardText:{textAlign:"center",fontSize:18,fontFamily:'Poppins-Light',marginVertical:5},
  itemContainer:{flexDirection:'row',marginHorizontal:50,justifyContent:'space-around',marginVertical:5},
  BtnStyle:{justifyContent:'center',alignItems:'center',borderRadius:30,paddingVertical:5,width:100,},
  buttonText:{fontFamily:'Poppins-Light',fontSize:12},
  emptyImageContainer:{justifyContent:'center',alignItems:'center',margin:30},
  imageEmpty:{justifyContent:'center',alignItems:'center'},
  ButtonSele:{width: 150, borderRadius: 40,elevation:5}

});