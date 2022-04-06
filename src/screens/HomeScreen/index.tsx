import React, { FC } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { ImageCarousel } from "../../components/Products/ImageCarousel";
import { Tags } from "../../components/Products/Tags";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./HomeScreen.props";


const HomeScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('HomeScreen');

    return (
        <Layout>
            <View>
                <ImageCarousel hasBottomButton={true}/>
                <Tags hasPrice={true} horizontal={true} />
            </View>
        </Layout>
    )
};

export { HomeScreen };