import React from 'react';
import { Provider } from 'react-redux';
import {fireEvent ,render} from 'react-native-testing-library';
import configstore from '../redux/store.js';
import ItemList from '../screens/ItemList.js';

describe('ItemList component test', () => {
  test('adds an item when user press add to cart', () => {
      const store = configstore();

      const item = {
          id: 1,
          imageUri: require("../assets/books/C_programming.jpg"),
          title: "C Programming",
          priceOne: 85,
          priceTwo: "$120"
    
        };

      const component = (
        <Provider store={store}>
          <ItemList item={item} />
        </Provider>
      );

      const { getByText } = render(component);
      fireEvent.press(getByText('Add item'));
      const cart = store.getState().cart;

      expect(cart.length).toEqual(1);
  })})