import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { FC, useMemo } from "react";
import { FlatList, View } from "react-native";
import { COMPONENT_SIZES } from "../../constants/componentSizes";
import { w } from "../../styles/scale";
import { Props } from './CustomFlatList.props';
import { styles } from "./CustomFlatList.styles";

const CustomFlatList: FC<Props> = ({ isTabBar, ...props }) => {

    const tabBarHeight = useBottomTabBarHeight();

    const contentInset = useMemo(() => ({ bottom: isTabBar ? tabBarHeight + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20) : 0 }), [isTabBar]);

    return (
        <View>
            <FlatList {...props} contentInset={contentInset} />
        </View>
    );
};

export { CustomFlatList };