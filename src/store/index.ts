import  { configureStore } from '@reduxjs/toolkit';
import { reducer as navigationState } from './slices/navigationState';

export const store = configureStore({
    reducer: {
        navigationState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;