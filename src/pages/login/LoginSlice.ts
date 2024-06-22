// src/features/counterSlice.ts  
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 100,
};

const loginSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { setValue } = loginSlice.actions;
export default loginSlice.reducer;  
