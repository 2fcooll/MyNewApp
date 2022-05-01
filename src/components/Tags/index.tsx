import React, { FC, ReactNode, useMemo } from 'react'
import { Price } from '../Price'
import { List } from '../List'
import { Tag } from '../Tag'
import { Itag, Props } from './Tags.props'
import { View } from 'react-native';
import { styles } from './Tags.style';

const Tags: FC<Props> = ({
    data,
    price,
    time,
    contentContainerStyle,
}) => {
    const cachedContentStyles = useMemo(() => [styles.content], []);
    const cachedRowStyles = useMemo(() => [styles.row, styles.firstRow], []);

    const content = data.reduce((nodes: Array<ReactNode>, item: Itag, index: number) => {
        nodes.push(
            <Tag
                containerStyle={styles.tagContainer}
                key={item.content}
                content={item.content}
                horizontal={true}
            />
        );
        if (index === 0) 
        {
            nodes.push(
                <Price
                    containerStyle={styles.tagContainer}
                    key={time}
                    horizontal={true}
                    price={price}
                    time={time}
                /> 
            );
        }
        return nodes;
    }, []);

    const contentCenterIndex = Math.round(content.length / 2);
    const firstRow = content.slice(0, contentCenterIndex);
    const secondRow = content.slice(contentCenterIndex, content.length);

    return (
        <List 
            contentContainerStyle={contentContainerStyle}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
        >
            <View style={cachedContentStyles}>
                <View style={cachedRowStyles}>{firstRow}</View>
                <View style={styles.row}>{secondRow}</View>
            </View>
        </List>
    );
}

export { Tags }