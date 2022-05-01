import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../constants/screenNames";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ItemCreationScreen } from "../screens/ItemCreationScreen";
import { ItemScreen } from "../screens/ItemScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import React from "react";
import { RootStackParamList } from "./RootStack.props";
import { screenAnimation } from "../constants/animaions";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
    headerShown: false,
    transitionSpec: {
        open: screenAnimation,
        close: screenAnimation,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const RootNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME_SCREEN}>
                <Stack.Screen 
                    name={SCREEN_NAMES.FAVORITE_SCREEN}
                    component={FavoriteScreen}
                    options={screenOptions}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.HOME_SCREEN}
                    component={HomeScreen}
                    options={screenOptions}
                />
                <Stack.Screen
                    name={SCREEN_NAMES.ITEM_CREATION_SCREEN}
                    component={ItemCreationScreen}
                    options={screenOptions}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.ITEM_SCREEN}
                    component={ItemScreen}
                    options={screenOptions}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.PROFILE_SCREEN}
                    component={ProfileScreen}
                    options={screenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { RootNavigator };