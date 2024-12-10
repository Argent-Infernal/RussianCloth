import { IProduct } from '@/shared/types/product.interface';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    items: IProduct[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity! += 1; // Увеличиваем количество на 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Добавляем новый товар с количеством 1
            }
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem && existingItem.quantity! > 1) {
                existingItem.quantity! -= 1; // Уменьшаем количество на 1, если больше 1
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id); // Удаляем товар, если он последний
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;