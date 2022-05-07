import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
    tabBarHeight: number,
}

export interface ITabBarHeightAction {
    tabBarHeight: number,
};

const initialState = {
    tabBarHeight: 0,
};

export const navigationStateSlice = createSlice({
    name: 'navigationState',
    initialState,
    reducers: {
        setTabBarHeight(state: IState, action: PayloadAction<ITabBarHeightAction>) {
            state.tabBarHeight = action.payload.tabBarHeight;
        },
    },
});

export const { setTabBarHeight } = navigationStateSlice.actions;
export const reducer = navigationStateSlice.reducer;

