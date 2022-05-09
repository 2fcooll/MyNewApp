import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../constants/screenNames";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ItemCreationScreen } from "../screens/ItemCreationScreen";
import { ItemScreen } from "../screens/ItemScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import React, { RefObject, useCallback, useEffect, useMemo, useRef } from "react";
import { RootStackParamList } from "./RootStack.props";
import { screenAnimation } from "../constants/animaions";
import { createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { TabBar } from "../components/TabBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoginBottomSheet } from "../components/LoginBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setTabBarHeight } from "../store/slices/navigationState";
import { BottomSheetContextProvider } from "../contexts/BottomSheet";
import { useSharedValue } from "react-native-reanimated";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ITabBarHandles } from "../components/TabBar/TabBar.props";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false,
    transitionSpec: {
        open: screenAnimation,
        close: screenAnimation,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainStack = () => {
    const dispatch = useDispatch();
    const tabBarHeight = useBottomTabBarHeight();

    useEffect(() => {
       dispatch(setTabBarHeight({ tabBarHeight }));
    }, []);

    return (
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
    );
};

const renderTabBar = (tabBarRef: RefObject<any>, onClose: () => void) => (props: any) => {
    return (
        <TabBar onClose={onClose} ref={tabBarRef} {...props} />
    );
};

const tabScreenOptions = { headerShown: false };

const RootNavigator = () => {
    const LoginBottomSheetAnimatedPosition = useSharedValue(0);
    const LoginBottomSheetRef = useRef<BottomSheetMethods>(null);
    const bottomSheetContextProviderValue = useMemo(() => ({ LoginBottomSheetAnimatedPosition, LoginBottomSheetRef }), []);
    const tabBarRef = useRef<ITabBarHandles>(null);

    const onCloseLoginBottomSheet = useCallback(() => {
        if (tabBarRef.current) {
            tabBarRef.current.openTabBar();
        }
    }, []);

    const onCloseTabBar = useCallback(() => {
        if (LoginBottomSheetRef.current) {
            LoginBottomSheetRef.current?.expand();
        }
    }, []);

    return (
        <GestureHandlerRootView style={styles.rootView}>
            <BottomSheetContextProvider value={bottomSheetContextProviderValue}>
                <SafeAreaProvider>
                    <NavigationContainer>
                            <Tab.Navigator tabBar={renderTabBar(tabBarRef, onCloseTabBar)} screenOptions={tabScreenOptions}>
                                <Tab.Screen name={SCREEN_NAMES.HOME_STACK} component={MainStack} />
                            </Tab.Navigator>
                            <LoginBottomSheet 
                                onClose={onCloseLoginBottomSheet} 
                                animatedPosition={LoginBottomSheetAnimatedPosition} 
                                ref={LoginBottomSheetRef} 
                            />
                            {/* <FiltersBottomSheet /> */}
                    </NavigationContainer>
                </SafeAreaProvider>
            </BottomSheetContextProvider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    rootView: {
        flex: 1 
    },
});

export { RootNavigator };