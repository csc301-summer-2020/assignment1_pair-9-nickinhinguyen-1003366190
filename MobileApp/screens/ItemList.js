import React, { Component } from "react";
import { View, StyleSheet,Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import {connect} from 'react-redux'

// function mapispatchtoProps(dispatch){
//   return{
//     addItemsToCart : () => dispatch ({type:'ADD_TO_CART',payload:item})
//   }
// };

function mapDispatchtoProps(dispatch){
  return{
    addItemsToCart : (item) => dispatch ({type:'ADD_TO_CART',payload:{item , quantity:1}}) 
  }
};

class ItemList extends Component {

  render() {
    const {item} = this.props;

    return (
        <View style={styles.container}>
          <View
            style={{
              width: wp("44%"),
              height: wp("55%"),
              marginBottom: 10
            }}
          >
            <Image
              source={item.imageUri}
              style={styles.image}
            />
          </View>
          <View
            style={{
              marginHorizontal: 5
            }}
          >
            <Text style={styles.title}>
              {item.title}

            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 5
              }}
            >
              <Text
                style={styles.priceOne}
              >
                ${item.priceOne}
              </Text>
              <Text
                style={styles.priceTwo}
              >
                {item.priceTwo}
              </Text>
            </View>
            <TouchableOpacity onPress={()=> this.props.addItemsToCart(item)} style={
                {borderRadius: 30,
                margin: 5,
                backgroundColor: "#f3d23d",
                alignItems: "center",
                color: "#fff"}
            } >
                <Text style={{padding:5, alignItems:"center", fontSize:16}} >Add item</Text>
            </TouchableOpacity> 
          </View>
        </View>
        
    );
  }
}

export default connect (null,mapDispatchtoProps) (ItemList);

const styles = StyleSheet.create({
    container: {
        width: wp("44%"),
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor:"#fff",
        borderRadius:wp("2%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    image: {
        marginTop: wp("5%"),
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
      },
    title: {
        fontSize: 18,
        color: "#63CBA7",
        fontWeight: "bold",
        alignItems:"center",
        marginHorizontal:10
      },
    priceOne:{
        fontSize: 14,
        fontWeight: "bold",
        marginHorizontal:10
      },
    priceTwo: {
        fontSize: 12,
        textDecorationLine: "line-through",
      }
  });

