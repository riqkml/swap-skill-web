// src/store.ts  
import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './pages/login/LoginSlice';

const store = configureStore({
    reducer: {
        counter: LoginSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;  
