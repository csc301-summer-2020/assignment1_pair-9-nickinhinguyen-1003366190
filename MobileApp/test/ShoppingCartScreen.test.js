import React from 'react';
import { Provider } from 'react-redux';
import {render} from 'react-native-testing-library';
import configstore from '../redux/store.js';
import ShoppingCartScreen from '../screens/ShoppingCartScreen.js';

describe('ItemList component test', () => {
    test('Calculate subtotal', () => {
        
  
        const item = {
            id: 1,
            imageUri: require("../assets/books/C_programming.jpg"),
            title: "C Programming",
            priceOne: 85,
            priceTwo: "$120"
      
          };

        const state = {cart:[{product:item,quantity:1}],
            itemCount: 1,
            promo: 0,
            promoCount : 0}

        const store = configstore(state);

        const component = (
          <Provider store={store}>
            <ShoppingCartScreen />
          </Provider>
        );
  
        const  rendered = render(component);
        const textComponent = rendered.getByTestId('subtotal');
   
  
        expect(textComponent.props.children).toEqual([" $", "85.00"]);
    });

    test('Calculate tax', () => {
        
  
        const item = {
            id: 1,
            imageUri: require("../assets/books/C_programming.jpg"),
            title: "C Programming",
            priceOne: 85,
            priceTwo: "$120"
      
          };

        const state = {cart:[{product:item,quantity:1}],
            itemCount: 1,
            promo: 0,
            promoCount : 0}

        const store = configstore(state);

        const component = (
          <Provider store={store}>
            <ShoppingCartScreen />
          </Provider>
        );
        const tax = (85 * 0.13).toString();
        const rendered = render(component);
        const textComponent = rendered.getByTestId('tax');
        
  
        expect(textComponent.props.children).toEqual([" $", tax]);
    });

})