import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { LayoutChangeEvent, TouchableOpacity, View } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { baseInOutAnimation } from "../../constants/animaions";
import { w } from "../../styles/scale";
import { Props } from './Accordion.props';
import { styles } from "./Accordion.styles";

const AccordionFunc: FC<Props> = ({
    children,
    renderSummary,
    isDetailsOpened,
    setIsDetailsOpened,
    onChangeTotalVisibilityPos,
    containerStyle,
    detailsStyle,
}) => {
    const [measuredDetails, setMeasuredDetails] = useState(false);
    const detailsLayoutHeight = useSharedValue(0);
    const detailsAnimatedValue = useSharedValue(0);

    const onDetailsLayout = (e: LayoutChangeEvent) => {
        const isLayoutSizeChanged = e.nativeEvent.layout.height !== Math.ceil(detailsLayoutHeight.value);
        
        if (!measuredDetails) {
            detailsLayoutHeight.value = e.nativeEvent.layout.height;
            setMeasuredDetails(true);
        } else if (measuredDetails && isLayoutSizeChanged && e.nativeEvent.layout.height > 0) {
            detailsLayoutHeight.value = e.nativeEvent.layout.height;
        }
    };

    const onLayout = (e: LayoutChangeEvent) => {
        const { layout } = e.nativeEvent;

        if (onChangeTotalVisibilityPos) {
            if (layout.y - layout.height <= 0) 
            {
                onChangeTotalVisibilityPos(layout.y - w(20));
            } else {
                onChangeTotalVisibilityPos(layout.height - w(20));
            }
        }
    };

    const toggleDetails = () => {
        setIsDetailsOpened(!isDetailsOpened);
    };

    const detailsAnimatedStyle = useAnimatedStyle(() => {
        const height = interpolate(detailsAnimatedValue.value, [0, 1], [0, detailsLayoutHeight.value], Extrapolate.CLAMP);

        return {
            opacity: detailsAnimatedValue.value,
            height,
        };
    }, []);

    useEffect(() => {
        detailsAnimatedValue.value = withTiming(isDetailsOpened ? 1 : 0, {
            ...baseInOutAnimation,
        });
    }, [isDetailsOpened]);

    const cachedDetailsContainerStyle = useMemo(() => [styles.detailsContainer, detailsAnimatedStyle], []);
    const cachedDetailsStyle = useMemo(() => [styles.details, detailsStyle], [detailsStyle]);
    const isContentRendered = !measuredDetails || !!isDetailsOpened;

    return (
        <View style={containerStyle} onLayout={onLayout}>
            <TouchableOpacity 
                style={styles.summary} 
                activeOpacity={1}
                onPress={toggleDetails}
            >
                {renderSummary}
            </TouchableOpacity>
            <Animated.View style={cachedDetailsContainerStyle}>
                <View 
                    onLayout={onDetailsLayout} 
                    style={cachedDetailsStyle}
                >
                    {isContentRendered && children}
                </View>
            </Animated.View>
        </View>
    );
};

export const Accordion = memo(AccordionFunc);