import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList,ScrollView} from 'react-native';
import { Component } from "react";
import {connect} from 'react-redux';
import CartItem from './CartItem.js'


const mapStateToProps = (state) => ({
    cart: state.cart,
    promo: state.promo,
    promoCount: state.promoCount
});

function mapDispatchtoProps(dispatch){
    return{
      removePromo : () => dispatch ({type:'REMOVE_PROMO'}) 
    }
  };
class ShoppingCartScreen extends Component {
    
    render() {
        const arrTotal = this.props.cart.map(e => e.product.priceOne * e.quantity);
        const subtotal = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
        const tax = (subtotal*0.13);
        const discount = subtotal * (this.props.promo/100)
        const total = subtotal + tax + discount ;
        
        const {
            main, checkoutButton, wrapper, checkoutTitle,summary,summaryLine,addPromo} = styles;
         return (
             
            <View style={wrapper}>
                 
                <ScrollView>
                    <View>
                        <FlatList
                            contentContainerStyle={main}
                            enableEmptySections
                            data = {this.props.cart}
                            renderItem={({item}) => <CartItem title={item.product.title} imageUri={item.product.imageUri} price={item.product.priceOne} id={item.product.id} item={item}/>}
                            keyExtractor={item => item.id}
                        />
                    </View>

                <View  style={addPromo}>
                    <TouchableOpacity style={{flexGrow:2}} onPress={() => this.props.navigation.navigate('Promo')}>
                        <Text style={{color:'#2ABB9C',fontWeight:'bold'}}>Add Promotion  </Text>
                        <Text style={{color:'#000'}}>{this.props.promoCount} promo used </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.removePromo()}>
                        <Text style={{color:"#0984e3"}} >remove promo</Text>
                    </TouchableOpacity>
                </View>   
                
                
                <View style={summary} >
                    <View style={summaryLine}>
                        <Text>Order Subtotal    </Text>
                        <Text> ${subtotal.toFixed(2)}</Text>
                    </View >
                    <View style={summaryLine}>
                        <Text>Tax (13%)   </Text>
                        <Text> ${tax.toFixed(2)}</Text>
                    </View>
                    <View style={summaryLine}>
                        <Text>Promotion  </Text>
                        <Text>${discount.toFixed(2)}</Text>
                    </View>
                    
                </View>
                    </ScrollView>
                <TouchableOpacity style={checkoutButton} >
                    <Text style={checkoutTitle}>TOTAL ${total.toFixed(2)} CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
}}

export default connect (mapStateToProps,mapDispatchtoProps)(ShoppingCartScreen);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        // fontFamily: 'Avenir'
    },

    addPromo:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
    },
    summary:{
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
       
    },
    summaryLine:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

