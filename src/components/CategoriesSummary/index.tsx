import React, { FC, memo, useEffect } from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { useAnimation } from "../../hooks/useAnimation";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Props } from './CategoriesSummary.props';
import { styles } from "./CategoriesSummary.styles";

const CategoriesSummaryFunc: FC<Props> = ({
    isDetailsOpened,
    renderSummary,
    hasRightIcon = true,
    rightIconSize = w(25),
    rightIconName = 'ArrowDownCircleOutline',
    rightIconColor = Colors.SONIC_SILVER,
    containerStyle,
    hasPaddingAnimation = true,
}) => {
    const [animatedValue, animatedStyle, startIconAnimation] = useAnimation('CategoriesSummaryIconRotate');
    const [_, containerAnimatedStyle, startContainerPaddingAnimation] = useAnimation('CategoriesSummaryPadding');

    useEffect(() => {
        if (isDetailsOpened) {
            startIconAnimation(1);
            if (hasPaddingAnimation) startContainerPaddingAnimation(1);
        } else {
            startIconAnimation(0);
            if (hasPaddingAnimation) startContainerPaddingAnimation(0);
        }
    }, [isDetailsOpened]);

    return (
        <Animated.View style={[styles.container, hasPaddingAnimation && containerAnimatedStyle, containerStyle]}>
            {!!renderSummary ? renderSummary() : (
                <Text style={styles.title}>Категория</Text>
            )}
            {hasRightIcon && (
                <Animated.View style={animatedStyle}>
                    <Icon
                        name={rightIconName}
                        size={rightIconSize} 
                        color={rightIconColor} 
                    />
                </Animated.View>
            )}
            {/* <Button
                innerText='Отменить'
                rightIconName='Close'
                rightIconColor={Colors.WHITE}
                rightIconSize={w(8)}
                rightIconContainerStyle={styles.buttonRightIconContainer}
                containerStyle={styles.button}
                containerStyleText={styles.buttonText}
            /> */}
        </Animated.View>
    );
};

export const CategoriesSummary = memo(CategoriesSummaryFunc);