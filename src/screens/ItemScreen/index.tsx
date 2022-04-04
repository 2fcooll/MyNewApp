import React, { FC } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./ItemScreen.props";

const ItemScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('ItemScreen');

    return (
        <Layout>
            <View></View>
        </Layout>
    );
};

export { ItemScreen };