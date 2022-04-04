import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../constants/screenNames";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ItemCreationScreen } from "../screens/ItemCreationScreen";
import { ItemScreen } from "../screens/ItemScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import React from "react";
import { RootStackParamList } from "./RootStack.props";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME_SCREEN}>
                <Stack.Screen 
                    name={SCREEN_NAMES.FAVORITE_SCREEN}
                    component={FavoriteScreen}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.HOME_SCREEN}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={SCREEN_NAMES.ITEM_CREATION_SCREEN}
                    component={ItemCreationScreen}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.ITEM_SCREEN}
                    component={ItemScreen}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.PROFILE_SCREEN}
                    component={ProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { RootNavigator };