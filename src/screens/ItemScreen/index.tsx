import React, { FC } from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { ImageCarousel } from "../../components/ImageCarousel";
import { Layout } from "../../components/Layout";
import { List } from "../../components/List";
import { VerticalTags } from "../../components/VerticalTags";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Props } from "./ItemScreen.props";
import { styles } from "./ItemScreen.styles";

const data = [
    {title: "Видеокарта", content: "nvidia gtx 1650" },
    {title: "Процессор", content: "intel i5" },
    {title: "Куллер", content: "AMW-500" },
    {title: "Память", content: "8GB ddr5" },
];

const ItemScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('ItemScreen');

    return (
        <View style={styles.container}>
            <List isTabBar={true} containerStyle={styles.content}>
                <ImageCarousel 
                    hasBottomButton={true}
                    images={[require('../../assets/images/car1.png'), require('../../assets/images/car1.png')]}
                />
                <View style={styles.productDetails}>
                    <Text style={styles.city}>Донецк</Text>
                    <Button 
                        containerStyle={styles.phoneNumberContainer}
                        containerStyleText={styles.phoneNumber}
                        innerText='+ (380) 714957885'
                        rightIconName='CopyOutline'
                        rightIconColor={Colors.WHITE}
                        rightIconSize={w(20)}
                    />
                </View>
                <VerticalTags 
                    data={data}
                    hasPrice={true}
                    price='12 000 $'
                    time='Сегодня в 12:15'
                />
            </List>
        </View>
    );
};

export { ItemScreen };