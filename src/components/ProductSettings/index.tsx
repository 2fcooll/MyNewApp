import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { Props } from './ProductSettings.props';
import { styles } from "./ProductSettings.styles";

const ProductSettings: FC<Props> = ({ containerStyle, onPressSettings }) => {
    const cachedContainerStyles = useMemo(() => [styles.container, containerStyle], [containerStyle]);
    const cachedButtonContainer = useMemo(() => [styles.buttonContainer, styles.firstbButtonContainer], []);
    const lastCachedButtonContainer = useMemo(() => [styles.buttonTitle, styles.redText], []);

    return (
        <View style={cachedContainerStyles}>
            <Button 
                onPress={onPressSettings}
                containerStyle={styles.settingsButton}
                iconName='SettingsOutline'
                iconColor={Colors.WHITE_SMOKE}
                iconSize={w(23)}
            />
            <View style={styles.settingsContainer}>
                <Button 
                    iconName='EditOutline'
                    iconColor={Colors.WHITE_SMOKE}
                    iconSize={w(17)}
                    innerText='Изменить'
                    containerStyle={cachedButtonContainer}
                    containerStyleText={styles.buttonTitle}
                />
                <Button 
                    iconName='RatingOutline'
                    iconColor={Colors.WHITE_SMOKE}
                    iconSize={w(17)}
                    innerText='Поднять в топ'
                    containerStyle={styles.buttonContainer}
                    containerStyleText={styles.buttonTitle}
                />
                <Button 
                    iconName='PauseOutline'
                    iconColor={Colors.WHITE_SMOKE}
                    iconSize={w(17)}
                    innerText='Поставить на паузу'
                    containerStyle={styles.buttonContainer}
                    containerStyleText={styles.buttonTitle}
                />
                <Button 
                    iconName='DeleteOutline'
                    iconColor={Colors.RED}
                    iconSize={w(17)}
                    innerText='Удалить'
                    containerStyle={styles.buttonContainer}
                    containerStyleText={lastCachedButtonContainer}
                />
            </View>
        </View>
    );
};

export { ProductSettings };