import React, { FC, memo } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./ProfileScreen.props";

const ProfileScreenFunc: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('ProfileScreen');

    return (
        <Layout>
            <View></View>
        </Layout>
    );
};

export const ProfileScreen  = memo(ProfileScreenFunc);