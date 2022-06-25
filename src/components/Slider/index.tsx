import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { Props } from './Slider.props';
import {Slider as SliderPackage} from '@miblanchard/react-native-slider';
import { styles } from "./Slider.styles";

const SliderFunc: FC<Props> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tRow}>
                <Text style={styles.label}>Цена</Text>
                <Text style={styles.priceUpTo}>до 1000</Text>
            </View>
            <SliderPackage thumbStyle={styles.thumb} trackStyle={styles.track} value={[0, 1]} />
        </View>
    );
};

export const Slider = memo(SliderFunc);