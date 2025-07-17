import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: [],
    shoeDetail: {
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    carts: [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png",
            "cartQuantity": 1,
        }
    ]
}

const shoeSlice = createSlice({
    name: "shoeSlice",
    initialState,
    reducers: {
        setDataShoes: (state, action) => {
            const payload = action.payload
            console.log("data", payload)
            state.data = payload
        },
        setShoeDetail: (state, action) => {
            const payload = action.payload
            state.shoeDetail = payload
        },
        setCarts: (state, action) => {
            const payload = action.payload
            const index = state.carts.findIndex((item) => item.id === payload.id)
            if (index === -1) {
                state.carts.push({
                    ...payload,
                    cartQuantity: 1,
                })
            } else {
                state.carts[index].cartQuantity += 1;
            }

        },
        deleteCart: (state, action) => {
            const payload = action.payload
            state.carts = state.carts.filter(item => item.id !== payload)
        }
    }
});

export const shoeActions = shoeSlice.actions

export default shoeSlice.reducer