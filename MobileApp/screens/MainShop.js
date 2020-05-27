import React,{ Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import CheckoutNavigator from './CheckoutNavigator.js';

import HomeScreen from './HomeScreen';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
    cart: state.cart,
});




class MyTabs extends Component {
    
    render() {

    const Tab = createMaterialBottomTabNavigator();
    const arrayquantity = this.props.cart.map(e => e.quantity)
    const itemCount = arrayquantity.length ? arrayquantity.reduce((a, b) => a + b) : 0;
    return (
        <Tab.Navigator
        initialRouteName="HomeScreen"
        shifting={true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'rgba(127,63,191,.9)' }}
        >
        <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
            }}
        />
        
        <Tab.Screen
            name="AppNavigator"
            component={CheckoutNavigator}
            options={{
            tabBarBadge: itemCount,
            tabBarLabel: 'My Cart',
            tabBarIcon: ({ color }) => (
                <Zocial name="cart" color={color} size={26} />
            ),
            }}
            
        />
        </Tab.Navigator>
    );
    };}

    export default connect (mapStateToProps,null)(MyTabs);

