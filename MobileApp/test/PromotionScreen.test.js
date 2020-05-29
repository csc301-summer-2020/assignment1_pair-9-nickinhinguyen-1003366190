import React from 'react';
import { Provider } from 'react-redux';
import {fireEvent , cleanup,render} from 'react-native-testing-library';
import configstore from '../redux/store.js';
import PromotionScreen from '../screens/PromotionScreen.js';

afterEach(cleanup);

describe('Promotion component test', () => {
    test('adds an invalid promotion', () => {
        const store = configstore();
       
        const component = (
            <Provider store={store}>
              <PromotionScreen />
            </Provider>
          );

        
        const { getByText } = render(component);
        const inputComponent = render(component).getByTestId('promo-input');
    
        fireEvent(inputComponent, 'changeText', 'invalid promo');

        fireEvent.press(getByText(' Submit '));
        const promo = store.getState().promo;
        expect(promo).toEqual(0);
        
    });
})