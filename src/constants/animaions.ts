import { Easing } from 'react-native-reanimated';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

export const baseInOutAnimation = {
    duration: 300, 
    easing: Easing.inOut(Easing.ease),
};

export const screenAnimation: TransitionSpec = {
    animation: 'timing',
    config: {
        ...baseInOutAnimation,
    },
};