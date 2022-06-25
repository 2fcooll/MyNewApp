import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { Props } from './Chip.props';
import { styles } from "./Chip.styles";

const ChipFunc: FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Транспорт</Text>
            <Button 
                containerStyle={styles.closeButton}
                iconName='Close'
                iconColor={Colors.WHITE}
                iconSize={w(10)}
            />
        </View>
    );
};

export const Chip = memo(ChipFunc);
