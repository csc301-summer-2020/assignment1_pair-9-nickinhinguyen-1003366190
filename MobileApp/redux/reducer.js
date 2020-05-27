
const initialState = {
    cart: [],
    itemCount: 0,
    promo:10,
    promoCount : 0
}

export default function(state=initialState, action) {
    switch(action.type){
        case 'ADD_TO_CART':
            const product = action.payload.item
            const quantity = action.payload.quantity
            const existsInArray = state.cart.some(l => l.product.id === product.id)
            if(existsInArray) {
                return state;
              }
            return {
                ...state,
                cart: [{product,quantity}, ...state.cart],
                itemCount: state.itemCount +1
            }
        
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((card) => card.product.id !== action.payload),
                itemCount: state.itemCount - 1
            }
        case 'INCREASE_QTY':
            const increase_newCart = state.cart.map(e => {
                if (e.product.id !== action.payload ) return e;
                return { product: e.product, quantity: e.quantity + 1 };
            });
        
            
            return {
                ...state,
                cart: increase_newCart
            }

        case 'DECREASE_QTY':
            const newCart = state.cart.map(e => {
                if (e.product.id !== action.payload || e.quantity == 1 ) return e;
                return { product: e.product, quantity: e.quantity - 1 };
            });

            return {
                ...state,
                cart: newCart
            }
        case 'ADD_PROMO':
            return{
                ...state,
                promo: action.payload.promo,
                promoCount : 1
            }
        case 'REMOVE_PROMO':
            return{
                ...state,
                promo: 0,
                promoCount : 0
            }
        default:
            
            return state
    }
}