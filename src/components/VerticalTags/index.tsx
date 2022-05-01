import React, { FC } from "react";
import { View } from "react-native";
import { Props } from './VerticalTags.props';
import { styles } from "./VerticalTags.styles";
import { List } from "../List";
import { Button } from "../Button";
import { Price } from "../Price";
import { Colors } from "../../styles/colors";
import { w } from "../../styles/scale";
import { Tag } from "../Tag";

const VerticalTags: FC<Props> = ({
    data,
    hasPrice,
    price,
    time
}) => {
    return (
        <View>
            <List 
                contentContainerStyle={styles.listContent} 
                horizontal={false} 
                showsHorizontalScrollIndicator={false}
            >
                {data.map((item, index) => {
                    const even = index % 2;
                    const containerStyle = [styles.tagContainer, index === 0 && styles.firstTagContainer, !even && { backgroundColor: Colors.DIM_GRAY }];

                    return (
                        <Tag
                            key={item.title}
                            containerStyle={containerStyle}
                            title={item.title}
                            content={item.content}
                            horizontal={false}
                        />   
                    );
                })}
            </List>
            <Button 
                rightIconName='ArrowDown'
                rightIconColor={Colors.OYSTER_PINK}
                rightIconSize={w(12)}
                innerText='Смотреть больше'
                containerStyleText={styles.moreButtonText}
                containerStyle={styles.moreButtonContainer}
            />
            {hasPrice && (
                <Price
                    horizontal={false}
                    price={price}
                    time={time}
                    containerStyle={styles.priceContainer}
                />
            )}
        </View>
    );
};

export { VerticalTags };