import React, { FC } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./FavoriteScreen.props";

const FavoriteScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('FavoriteScreen');

    return (
        <Layout>
            <View></View>
        </Layout>
    );
};

export { FavoriteScreen };