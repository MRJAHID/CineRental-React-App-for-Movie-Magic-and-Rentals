const initialState = {
    cartData: [],
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADDCART":
            return {
                cartData: [...state.cartData, action.payload]
            }
        case "REMOVECART":

            return {
                ...state.cartData,
                cartData: state.cartData.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;

    }
}


export {initialState, cartReducer};
