import { useCallback } from "react";
import { AnimatedStyleProp, AnimationCallback, runOnJS, SharedValue, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { baseInOutAnimation } from "../constants/animaions";

interface IStartAnimation {
    (toValue: number, onAnimationEnd?: AnimationCallback): void,
};  

type IUseAnimationType = 'TabBarTranslateY';

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
            default: {
                return {};
            }
        }
    }, []);

    return [animatedValue, animatedStyle, startAnimation];
};

export { useAnimation };