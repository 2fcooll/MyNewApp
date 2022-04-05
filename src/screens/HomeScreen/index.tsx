import React, { FC } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { ImageCarousel } from "../../components/Products/ImageCarousel";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./HomeScreen.props";


const HomeScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('HomeScreen');

    return (
        <Layout>
            <View>
                <ImageCarousel hasBottomButton={true}/>
            </View>
        </Layout>
    )
};

export { HomeScreen };