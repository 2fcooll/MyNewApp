import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { FC, ForwardedRef, forwardRef, ForwardRefRenderFunction, useImperativeHandle, useMemo, useRef } from 'react'
import { ScrollView, View } from 'react-native';
import { COMPONENT_SIZES } from '../../constants/componentSizes';
import { w } from '../../styles/scale';
import { IListHandles, IScrollToProps, Props } from './List.props'
import { styles } from './List.styles';

const List: ForwardRefRenderFunction<IListHandles, Props> = ({children, containerStyle, isTabBar, ...props }: Props, ref: ForwardedRef<any>) => {
    const tabBarHeight = useBottomTabBarHeight();
    const listRef = useRef<ScrollView>(null);

    const cachedContainerStyles = useMemo(() => [styles.wrapper, containerStyle], [containerStyle]);
    const contentContainerStyle = useMemo(() => ({ paddingBottom: isTabBar ? tabBarHeight + COMPONENT_SIZES.TAB_BAR.BOTTOM_OFFSET + w(20) : 0 }), [isTabBar]);

    useImperativeHandle(ref, () => ({
        scrollTo(props: IScrollToProps) {
            listRef.current?.scrollTo(props);
        },
    }));

    return (
        <View style={cachedContainerStyles}>
            <ScrollView contentContainerStyle={contentContainerStyle} ref={listRef} {...props}>
                {children}
            </ScrollView>
        </View>
    );
};

const ForwardList = forwardRef(List);
export { ForwardList as List };