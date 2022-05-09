import React, { FC, ForwardedRef, forwardRef, ForwardRefRenderFunction, useCallback, useContext, useImperativeHandle, useMemo } from "react";
import { useSelector } from "react-redux";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { useAnimation } from "../../hooks/useAnimation";
import { selectTabBarHeight } from "../../store/selectors/navigationState";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { ITabBarHandles, Props } from './TabBar.props';
import { styles } from "./TabBar.styles";
import Animated from "react-native-reanimated";
import { BottomSheetContext } from "../../contexts/BottomSheet";

const TabBar: ForwardRefRenderFunction<ITabBarHandles, Props> = ({}: Props, ref: ForwardedRef<any>) => {
    const tabBarHeight = useSelector(selectTabBarHeight);
    const VISIBLE_TAB_BAR_POSITION = 0;
    const HIDDEN_TAB_BAR_POSITION = tabBarHeight + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20);

    const [animatedValue, animatedStyle, startAnimation] = useAnimation('TabBarTranslateY');
    const cachedContainerStyles = useMemo(() => [styles.container, animatedStyle], [animatedStyle]);

    const bottomSheetContext = useContext(BottomSheetContext);
    
    const openLoginBottomSheet = useCallback(() => {
        if (bottomSheetContext?.LoginBottomSheetRef) {
            bottomSheetContext?.LoginBottomSheetRef.current?.expand();
        }
    }, []);

    const openTabBar = useCallback(() => {
        startAnimation(VISIBLE_TAB_BAR_POSITION);
    }, []);

    const closeTabBar = useCallback(() => {
        startAnimation(HIDDEN_TAB_BAR_POSITION, openLoginBottomSheet);
    }, [HIDDEN_TAB_BAR_POSITION]);

    const onProfileButtonPress = useCallback(() => {
        closeTabBar();
    }, [closeTabBar]);

    useImperativeHandle(ref, () => ({
        openTabBar,
        closeTabBar,
    }));

    return (
        <Animated.View style={cachedContainerStyles}>
            <Button 
                iconName='HeartOutline'
                iconColor={Colors.WHITE}
                iconSize={w(22)}
            />
            <Button 
                iconName='FilterOutline'
                iconColor={Colors.WHITE}
                iconSize={w(22)}
            />
            <Button 
                iconName='ProfileOutline'
                iconColor={Colors.WHITE}
                iconSize={w(22)}
                onPress={onProfileButtonPress}
            />
        </Animated.View>
    );
};

const TabBarForwardRef = forwardRef(TabBar);
export { TabBarForwardRef as TabBar };