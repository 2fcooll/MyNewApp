import React, { FC } from "react";
import { View } from "react-native";
import { Icon } from "../../components/Icon";
import { Layout } from "../../components/Layout";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Props } from "./HomeScreen.props";

const HomeScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('HomeScreen');

    return (
        <Layout>
            <View>
                <Icon name='ArrowDown' color={Colors.BLACK} size={w(20)} />
            </View>
        </Layout>
    )
};

export { HomeScreen };