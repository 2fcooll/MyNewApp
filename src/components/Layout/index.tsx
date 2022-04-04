import React, { FC, useMemo } from "react";
import { SafeAreaView, View } from "react-native";
import { Props } from "./Layout.props";
import { styles } from "./Layout.styles";

const Layout: FC<Props> = ({ children, containerStyle, contentContainerStyle }) => {
    const cachedContainerStyle = useMemo(() => [styles.container, containerStyle], [containerStyle]);
    const cachedContentContainerStyle = useMemo(() => [styles.container, contentContainerStyle], [contentContainerStyle]);

    return (
        <SafeAreaView style={cachedContainerStyle}>
            <View style={cachedContentContainerStyle}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export { Layout };