import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { Props } from './TabBar.props';
import { styles } from "./TabBar.styles";

const TabBar: FC<Props> = () => {
    const cachedContainerStyles = useMemo(() => [styles.container], []);

    return (
        <View style={cachedContainerStyles}>
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
            />
        </View>
    );
};

export { TabBar };