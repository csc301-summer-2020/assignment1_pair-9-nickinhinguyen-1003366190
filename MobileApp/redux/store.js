import { createStore } from 'redux';
import reducer from './reducer.js';

const initialStore = {
    cart:[],
    itemCount: 0,
    promo: 0,
    promoCount : 0

};
export default function configstore(initialState = initialStore){
    return createStore(reducer, initialState);}