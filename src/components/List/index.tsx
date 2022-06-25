import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, memo, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import { ScrollView, View } from 'react-native';
import { COMPONENT_SIZES } from '../../constants/componentSizes';
import { w } from '../../styles/scale';
import { Props } from './List.props'
import { styles } from './List.styles';

const ListFunc: ForwardRefRenderFunction<ScrollView, Props> = ({children, insideBottomSheet, containerStyle, isTabBar, yPos, ...props }: Props, ref: ForwardedRef<any>) => {
    const tabBarHeight = isTabBar ? useBottomTabBarHeight() : 0;
    const listRef = useRef<ScrollView>(null);

    const contentContainerStyle = useMemo(() => ({ paddingBottom: isTabBar ? tabBarHeight + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20) : 0 }), [isTabBar]);

    useImperativeHandle(ref, () => ({
        ...listRef.current,
    }));

    useEffect(() => {
        if (yPos) {
            listRef.current?.scrollTo({ y: yPos });
        }
    }, [yPos]);

    const ScrollComponent = useMemo(() => {
        if (insideBottomSheet) return BottomSheetScrollView;
        return ScrollView;
    }, [insideBottomSheet]);

    return (
        <View style={[styles.wrapper, containerStyle]}>
            <ScrollComponent 
                contentContainerStyle={contentContainerStyle} 
                ref={listRef} 
                {...props}
            >
                {children}
            </ScrollComponent>
        </View>
    );
};

export const List = memo(forwardRef(ListFunc));