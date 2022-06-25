import React, { FC, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Icon } from "../Icon";
import { Props } from './Checkbox.props';
import { styles } from "./Checkbox.styles";

const CheckboxFunc: FC<Props> = ({
    titleStyle,
    containerStyle,
    wrapperStyle,
    iconSize = w(23),
}) => {
    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            <TouchableOpacity activeOpacity={1} style={[styles.container, containerStyle]}>
                <Icon name='CheckMarkCircleOutline' color={Colors.MATTERHORN} size={iconSize} />
            </TouchableOpacity>
            <Text style={[styles.title, titleStyle]}>Транспорт</Text>
        </View>
    );
};

export const Checkbox = memo(CheckboxFunc);