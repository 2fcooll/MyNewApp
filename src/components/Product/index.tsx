import React, { FC, useCallback, useMemo, useRef } from "react";
import { LayoutChangeEvent, LayoutRectangle, TouchableOpacity, View } from "react-native";
import { ImageCarousel } from "../ImageCarousel";
import { List } from "../List";
import { IListHandles } from "../List/List.props";
import { ProductSettings } from "../ProductSettings";
import { ProductStatistics } from "../ProductStatistics";
import { Tags } from "../Tags";
import { Props } from './Product.props';
import { styles } from "./Product.styles";

const Product: FC<Props> = ({ containerStyle, data, ...props }) => {
    const images = useMemo(() => [data.image], [data.image]);
    const layoutStatistics = useRef<LayoutRectangle|null>(null);
    const settingListRef = useRef<IListHandles>(null);

    const onLayoutStatistics = useCallback((e: LayoutChangeEvent) => {
        if (!layoutStatistics.current) 
        {
            layoutStatistics.current = e.nativeEvent.layout;
        }
    }, []);

    const onPressSettings = useCallback(() => {
        if (settingListRef.current && layoutStatistics.current) 
        {
            settingListRef.current.scrollTo({ x: layoutStatistics.current?.width + layoutStatistics.current?.x });
        }
    }, []);

    return (
        <View style={containerStyle}>
            <TouchableOpacity {...props} activeOpacity={1}>
                <ImageCarousel 
                    images={images} 
                    hasBottomButton={true} 
                />
                <Tags 
                    contentContainerStyle={styles.tagsContentContainer}
                    data={data.tags}
                    price={data.price}
                    time={data.time}
                />
            </TouchableOpacity>
            <List
                ref={settingListRef}
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.statistics}
            >
                <ProductStatistics 
                    onLayout={onLayoutStatistics} 
                />
                <ProductSettings 
                    onPressSettings={onPressSettings} 
                    containerStyle={styles.settingsContainer} 
                />
            </List>
        </View>
    );
};

export { Product };