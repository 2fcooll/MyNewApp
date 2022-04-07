import React, { FC } from "react";
import { View } from "react-native";
import { Layout } from "../../components/Layout";
import { ImageCarousel } from "../../components/Products/ImageCarousel";
import { Tags } from "../../components/Products/Tags";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./HomeScreen.props";
import { styles } from "./HomeScreen.styles";

let data = [
    {title: "Видеокарта", content: "nvidia gtx 1650" },
    {title: "Процессор", content: "intel i5" },
    {title: "Куллер", content: "AMW-500" },
    {title: "Память", content: "8GB ddr5" },
]


const HomeScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('HomeScreen');

    return (
        <Layout>
            <View style={styles.wrapper}>
                <ImageCarousel hasBottomButton={true}/>
                <Tags 
                    hasPrice={true} 
                    horizontal={false} 
                    data={data}
                    price="21 000 $"
                    time="Сегоднгя в 18:30"
                />
            </View>
        </Layout>
    )
};

export { HomeScreen };