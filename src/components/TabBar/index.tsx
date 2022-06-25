import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, memo, useContext, useImperativeHandle } from "react";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { useAnimation } from "../../hooks/useAnimation";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { ITabBarHandles, Props } from './TabBar.props';
import { styles } from "./TabBar.styles";
import Animated from "react-native-reanimated";
import { useLayout } from "../../hooks/useLayout";
import { BottomSheetContext } from "../../contexts/BottomSheet";
import { useNavigation } from "@react-navigation/core";
import { SCREEN_NAMES } from "../../constants/screenNames";
import { RootStackParamList } from "../../navigations/RootStack.props";
import { StackNavigationProp } from "@react-navigation/stack";

const TabBarFunc: ForwardRefRenderFunction<ITabBarHandles, Props> = ({}: Props, ref: ForwardedRef<any>) => {
    const [animatedValue, animatedStyle, startAnimation] = useAnimation('TabBarTranslateY');
    const [layout, setLayout] = useLayout();
    const bottomSheetContext = useContext(BottomSheetContext);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const VISIBLE_TAB_BAR_POSITION = 0;

    const openTabBar = () => {
        startAnimation(VISIBLE_TAB_BAR_POSITION);
    };

    const closeTabBar = (onClose: any) => () => {
        if (layout.current?.height) {
            const HIDDEN_TAB_BAR_POSITION = layout.current.height + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20);
            startAnimation(HIDDEN_TAB_BAR_POSITION, onClose);
        }
    };

    const openLoginBottomSheet = () => {
        if (bottomSheetContext?.LoginBottomSheetRef) bottomSheetContext.LoginBottomSheetRef.current?.expand();
    };

    const openFiltersBottomSheet = () => {
        if (bottomSheetContext?.FiltersBottomSheetRef) bottomSheetContext.FiltersBottomSheetRef.current?.expand();
    };

    const onProfilePress = () => {
        closeTabBar(openLoginBottomSheet)();
    };

    const onFiltersPress = () => {
        closeTabBar(openFiltersBottomSheet)();
    };

    const onFavoritePress = () => {
        navigation.navigate(SCREEN_NAMES.FAVORITE_SCREEN);
    };

    useImperativeHandle(ref, () => ({
        openTabBar,
        closeTabBar,
    }));

    return (
        <Animated.View onLayout={setLayout} style={[styles.container, animatedStyle]}>
            <Button 
                iconName='HeartOutline'
                iconColor={Colors.WHITE}
                iconSize={w(22)}
                onPress={onFavoritePress}
            />
            <Button 
                iconName='FilterOutline'
                iconColor={Colors.WHITE}
                iconSize={w(22)}
                onPress={onFiltersPress}
            />
            <Button 
                iconName='ProfileOutline'
                iconColor={Colors.WHITE}
                iconSize={w(22)}
                onPress={onProfilePress}
            />
        </Animated.View>
    );
};

export const TabBar = memo(forwardRef(TabBarFunc));