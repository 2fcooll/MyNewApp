import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { FC, memo, useMemo } from "react";
import { FlatList, View } from "react-native";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { w } from "../../styles/scale";
import { Props } from './CustomFlatList.props';
import { styles } from "./CustomFlatList.styles";

const CustomFlatListFunc: FC<Props> = ({ isTabBar, ...props }) => {
    const tabBarHeight = useBottomTabBarHeight();

    const contentContainerStyle = useMemo(() => ({ paddingBottom: isTabBar ? tabBarHeight + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20) : 0 }), [isTabBar]);

    return (
        <View>
            <FlatList {...props} contentContainerStyle={contentContainerStyle} />
        </View>
    );
};

export const CustomFlatList = memo(CustomFlatListFunc);