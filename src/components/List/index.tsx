import React, { FC, ForwardedRef, forwardRef, ForwardRefRenderFunction, useImperativeHandle, useMemo, useRef } from 'react'
import { ScrollView, View } from 'react-native';
import { IListHandles, IScrollToProps, Props } from './List.props'
import { styles } from './List.styles';

const List: ForwardRefRenderFunction<IListHandles, Props> = ({children, containerStyle, ...props }: Props, ref: ForwardedRef<any>) => {
    const cachedContainerStyles = useMemo(() => [styles.wrapper, containerStyle], [containerStyle]);
    const listRef = useRef<ScrollView>(null);

    useImperativeHandle(ref, () => ({
        scrollTo(props: IScrollToProps) {
            listRef.current?.scrollTo(props);
        },
    }));

    return (
        <View style={cachedContainerStyles}>
            <ScrollView ref={listRef} {...props}>
                {children}
            </ScrollView>
        </View>
    );
};

const ForwardList = forwardRef(List);
export { ForwardList as List };