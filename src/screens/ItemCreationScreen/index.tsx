import React, { FC, memo } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./ItemCreationScreen.props";

const ItemCreationScreenFunc: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('ItemCreationScreen');

    return (
        <Layout>
            <View></View>
        </Layout>
    )
};

export const ItemCreationScreen = memo(ItemCreationScreenFunc);