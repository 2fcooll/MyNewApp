import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Icon } from "../Icon";
import { Props } from './ProductStatistics.props';
import { styles } from "./ProductStatistics.styles";

const ProductStatisticsFunc: FC<Props> = ({ containerStyle, ...props }) => {
    return (
        <View {...props} style={[styles.container, containerStyle]}>
            <View style={[styles.tRow, styles.firstTRow]}>
                <Icon name='Eye' color={Colors.WHITE_SMOKE} size={w(20)} />
                <Text style={styles.title}>31</Text>
            </View>
            <View style={styles.tRow}>
                <Icon name='Chart' color={Colors.WHITE_SMOKE} size={w(17)} />
                <Text style={styles.title}>21</Text>
            </View>
            <View style={styles.tRow}>
                <Icon name='Heart' color={Colors.WHITE_SMOKE} size={w(20)} />
                <Text style={styles.title}>29</Text>
            </View>
        </View>
    );
};

export const ProductStatistics = memo(ProductStatisticsFunc);