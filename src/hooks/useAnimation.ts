import { useCallback } from "react";
import { AnimatedStyleProp, AnimationCallback, interpolate, interpolateColor, runOnJS, SharedValue, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { baseInOutAnimation } from "../constants/animaions";
import { COMPONENT_SIZES } from "../constants/componentSizes";
import { Colors } from "../styles/colors";

interface IStartAnimation {
    (toValue: number, onAnimationEnd?: AnimationCallback): void,
};  

type IUseAnimationType = 
    'TabBarTranslateY' | 
    'AccordionHeight' | 
    'SearchInputContainerPadding' | 
    'SearchInputTranslateX' | 
    'CategoriesSummaryIconRotate' |
    'CategoriesSummaryPadding';

interface IUseAnimation {
    (type: IUseAnimationType): [
        SharedValue<number>,
        AnimatedStyleProp<any>,
        IStartAnimation,
    ];
};

const useAnimation: IUseAnimation = (type) => {
    const animatedValue: SharedValue<number> = useSharedValue(0);
    const inputRange: SharedValue<Array<number>> = useSharedValue([0, 0]);

    const startAnimation: IStartAnimation = useCallback((toValue, onAnimationEnd) => {
        inputRange.value = [0, toValue];

        animatedValue.value = withTiming(toValue, {
            ...baseInOutAnimation,
        }, (...props) => {
            if (onAnimationEnd) runOnJS(onAnimationEnd)(...props);
        });
    }, []);

    const animatedStyle: AnimatedStyleProp<any> = useAnimatedStyle(() => {        
        switch(type) {
            case 'TabBarTranslateY': {
                const translateY = animatedValue.value;
            
                return {
                    transform: [{
                        translateY,
                    }]
                };
            }
            case 'AccordionHeight': {
                const opacity = interpolate(animatedValue.value, inputRange.value, [0, 1]);

                return {
                    opacity,
                    height: animatedValue.value,
                };
            }
            case 'SearchInputContainerPadding': {
                const paddingVertical = interpolate(animatedValue.value, [0, 1], [0, COMPONENT_SIZES.SEARCH.INPUT_CONTAINER.END_PADDING_VERTICAL]);

                return {
                    paddingVertical,
                };
            }
            case 'SearchInputTranslateX': {
                const translateX = interpolate(animatedValue.value, [0, 1], [COMPONENT_SIZES.SEARCH.INPUT.TRANSLATE_X, 0]);
                const backgroundColor = interpolateColor(animatedValue.value, [0, 1], [Colors.WHITE, Colors.WHITE_SMOKE]);
                
                return {
                    backgroundColor,
                    transform: [{
                        translateX,
                    }]
                }
            }
            case 'CategoriesSummaryIconRotate': {
                const rotateZ = interpolate(animatedValue.value, [0, 1], [0, 180]);

                return {
                    transform: [{
                        rotateZ: `${rotateZ}deg`,
                    }],
                };
            }
            case 'CategoriesSummaryPadding': {
                const paddingTop = interpolate(animatedValue.value, [0, 1], [COMPONENT_SIZES.CATEGORIES_SUMMARY.START_PADDING_TOP, COMPONENT_SIZES.CATEGORIES_SUMMARY.END_PADDING_TOP]);
                const paddingLeft = interpolate(animatedValue.value, [0, 1], [COMPONENT_SIZES.CATEGORIES_SUMMARY.START_PADDING_LEFT, COMPONENT_SIZES.CATEGORIES_SUMMARY.END_PADDING_LEFT]);
                const paddingBottom = interpolate(animatedValue.value, [0, 1], [COMPONENT_SIZES.CATEGORIES_SUMMARY.START_PADDING_BOTTOM, COMPONENT_SIZES.CATEGORIES_SUMMARY.END_PADDING_BOTTOM]);

                return {
                    paddingTop,
                    paddingBottom,
                    paddingLeft,
                };
            }
            default: {
                return {};
            }
        }
    }, []);

    return [animatedValue, animatedStyle, startAnimation];
};

export { useAnimation };