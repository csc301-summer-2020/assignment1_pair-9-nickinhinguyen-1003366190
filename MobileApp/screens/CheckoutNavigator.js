import React,{ Component } from 'react';
import ShoppingCartScreen from './ShoppingCartScreen';
import PromotionScreen from './PromotionScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()


  

class CheckoutNavigator extends Component {

    render() {
    return (
        <Stack.Navigator initialRouteName="Cart" screenOptions={{
            headerStyle: {
              backgroundColor: 'rgba(127,63,191,.9)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center"
            },
          }}>
             <Stack.Screen name="Cart" component={ShoppingCartScreen} options={{ title: 'My Cart'}}  />
             <Stack.Screen name="Promo" component={PromotionScreen} options={{ title: 'Add Promos'}}/>
        </Stack.Navigator>
    )
     }
};
export default CheckoutNavigator