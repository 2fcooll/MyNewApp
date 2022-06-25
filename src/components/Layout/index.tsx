import React, { FC, memo } from "react";
import { SafeAreaView, View } from "react-native";
import { Props } from "./Layout.props";
import { styles } from "./Layout.styles";

const LayoutFunc: FC<Props> = ({ children, containerStyle, contentContainerStyle }) => {
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <View style={[styles.container, contentContainerStyle]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export const Layout = memo(LayoutFunc);