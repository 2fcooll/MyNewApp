import React, { FC, memo, useMemo, useRef } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useLayout } from "../../hooks/useLayout";
import { ImageCarousel } from "../ImageCarousel";
import { List } from "../List";
import { ProductSettings } from "../ProductSettings";
import { ProductStatistics } from "../ProductStatistics";
import { Tags } from "../Tags";
import { Props } from './Product.props';
import { styles } from "./Product.styles";

const ProductFunc: FC<Props> = ({ containerStyle, data, ...props }) => {
    const [layoutStatistics, setLayoutStatistics] = useLayout();

    const images = useMemo(() => [data.image], [data.image]);
    
    const settingListRef = useRef<ScrollView>(null);

    const onPressSettings = () => {
        if (settingListRef.current && layoutStatistics.current) 
        {
            settingListRef.current.scrollTo({ x: layoutStatistics.current?.width + layoutStatistics.current?.x });
        }
    }

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
                    onLayout={setLayoutStatistics} 
                />
                <ProductSettings 
                    onPressSettings={onPressSettings} 
                    containerStyle={styles.settingsContainer} 
                />
            </List>
        </View>
    );
};

export const Product = memo(ProductFunc);