import React, { FC, useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { ImageCarousel } from "../ImageCarousel";
import { Tags } from "../Tags";
import { Props } from './Product.props';
import { styles } from "./Product.styles";

const Product: FC<Props> = ({ containerStyle, data, ...props }) => {
    const images = useMemo(() => [data.image], [data.image]);

    return (
        <TouchableOpacity {...props} activeOpacity={1} style={containerStyle}>
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
    );
};

export { Product };