import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectTabBarHeight = createSelector((state: RootState) => state.navigationState, ({ tabBarHeight }) => tabBarHeight);