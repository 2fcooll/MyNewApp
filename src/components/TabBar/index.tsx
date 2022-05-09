import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, useCallback, useImperativeHandle, useMemo } from "react";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { useAnimation } from "../../hooks/useAnimation";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { ITabBarHandles, Props } from './TabBar.props';
import { styles } from "./TabBar.styles";
import Animated from "react-native-reanimated";
import { useLayout } from "../../hooks/useLayout";

const TabBar: ForwardRefRenderFunction<ITabBarHandles, Props> = ({ onClose }: Props, ref: ForwardedRef<any>) => {
    const [animatedValue, animatedStyle, startAnimation] = useAnimation('TabBarTranslateY');
    const [layout, setLayout] = useLayout();

    const openTabBar = useCallback(() => {
        const VISIBLE_TAB_BAR_POSITION = 0;
        startAnimation(VISIBLE_TAB_BAR_POSITION);
    }, []);

    const closeTabBar = useCallback(() => {
        if (layout.current) {
            const HIDDEN_TAB_BAR_POSITION = layout.current.height + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20);
            startAnimation(HIDDEN_TAB_BAR_POSITION, onClose);
        }
    }, []);

    useImperativeHandle(ref, () => ({
        openTabBar,
        closeTabBar,
    }));

    const cachedContainerStyles = useMemo(() => [styles.container, animatedStyle], [animatedStyle]);

    return (
        <Animated.View onLayout={setLayout} style={cachedContainerStyles}>
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
                onPress={closeTabBar}
            />
        </Animated.View>
    );
};

const TabBarForwardRef = forwardRef(TabBar);
export { TabBarForwardRef as TabBar };