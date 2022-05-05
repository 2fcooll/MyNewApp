import React, { FC, useCallback } from "react";
import { useRenderCounter } from "../../hooks/useRenderCounter";
import { Props } from "./HomeScreen.props";
import { styles } from "./HomeScreen.styles";
import { Product } from "../../components/Product";
import { View } from "react-native";
import { IProduct } from "../../components/Product/Product.props";
import { SCREEN_NAMES } from "../../constants/screenNames";
import { CustomFlatList } from "../../components/CustomFlatList";

let data = [
    {
        image: require('../../assets/images/car1.png'),
        tags: [
            {title: "Видеокарта", content: "nvidia gtx 1650" },
            {title: "Процессор", content: "intel i5" },
            {title: "Куллер", content: "AMW-500" },
            {title: "Память", content: "8GB ddr5" },
        ],
        price: '12 000 $',
        time: 'Сегодня в 12:15',
    },
    {
        image: require('../../assets/images/car1.png'),
        tags: [
            {title: "Видеокарта", content: "nvidia gtx 1650" },
            {title: "Процессор", content: "intel i5" },
            {title: "Куллер", content: "AMW-500" },
            {title: "Память", content: "8GB ddr5" },
        ],
        price: '12 000 $',
        time: 'Сегодня в 12:00',
    },
];

const HomeScreen: FC<Props> = ({ route, navigation }) => {
    useRenderCounter('HomeScreen');

    const onProductPress = useCallback(() => {
        navigation.navigate(SCREEN_NAMES.ITEM_SCREEN);
    }, []);

    const renderProduct = useCallback(({ item, index }) => {
        const containerStyle = [styles.productContainer, index === 0 && styles.firstProductContainer];

        return (
            <Product 
                key={item.time}
                data={item} 
                containerStyle={containerStyle} 
                onPress={onProductPress}
            />
        );
    }, []);

    const keyExtractor = useCallback((item: IProduct) => {
        return item.time;
    }, []);

    return (
        <View style={styles.wrapper}>
            <CustomFlatList 
                data={data}
                renderItem={renderProduct}
                keyExtractor={keyExtractor}
                isTabBar={true}
            />
        </View>
    );
};

export { HomeScreen };