import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,Image} from 'react-native';
import { Component } from "react";
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    cart: state.cart
});
function mapDispatchtoProps(dispatch){
    return{
      increaseQty : (item) => dispatch ({type:'INCREASE_QTY',payload:item}) ,
      decreaseQty : (item) => dispatch ({type:'DECREASE_QTY',payload:item}) ,
      removeItemFromCart : (item) => dispatch ({type:'REMOVE_FROM_CART',payload:item}) 
    }
  };



class CartItem extends Component{

    render() {
        const {title, imageUri, price, id,item} = this.props;

        return (
            <View style={styles.productStyle}>
            <Image source={imageUri}  style={styles.productImage} />

            
            <View style={[styles.mainRight]}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.txtName}>{title}</Text>
                    <TouchableOpacity onPress={() => this.props.removeItemFromCart(id)}>
                        <Text style={{  color: '#0984e3' }}>remove</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txtPrice}>${price * item.quantity}</Text>
                    
                </View>
                <View style={styles.productController}>
                
                    <View style={styles.numberOfProduct}>
                    <Text style={{fontWeight: 'bold'}}>quanity:</Text>
                        <TouchableOpacity onPress={()=>this.props.increaseQty(id)} >
                            <Text style={{  color: '#0984e3', fontSize:20 }}>+</Text>
                        </TouchableOpacity >
                        <Text>{item.quantity}</Text>
                        <TouchableOpacity onPress={()=>this.props.decreaseQty(id)}>
                            <Text style={{  color: '#0984e3', fontSize:20 }}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        );
  };
}


export default connect (mapStateToProps,mapDispatchtoProps)(CartItem);

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    
    summary:{
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
       
    },
    summaryLine:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        marginBottom:0,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#2d3436',
        fontSize: 20,
        fontWeight: '400',
        // fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 18,
        fontWeight: '400',
        // fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        // fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});