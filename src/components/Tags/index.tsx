import React, { FC, memo, useMemo } from 'react'
import { Price } from '../Price'
import { List } from '../List'
import { Tag } from '../Tag'
import { Itag, Props } from './Tags.props'
import { View } from 'react-native';
import { styles } from './Tags.style';

const TagsFunc: FC<Props> = ({
    data,
    price,
    time,
    contentContainerStyle,
}) => {
    const tagComponents = useMemo(() => data.map((item: Itag) => {
        return (
            <Tag
                containerStyle={styles.tagContainer}
                key={item.content}
                content={item.content}
                horizontal={true}
            />
        );
    }), []);
    const contentCenterIndex = useMemo(() => Math.round(tagComponents.length / 2), []);
    const firstRow = useMemo(() => tagComponents.slice(0, contentCenterIndex), []);
    const secondRow = useMemo(() => tagComponents.slice(contentCenterIndex, tagComponents.length), []);

    return (
        <List 
            contentContainerStyle={contentContainerStyle}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.content}>
                <View style={[styles.row, styles.firstRow]}>
                    <Price
                        containerStyle={styles.tagContainer}
                        key={time}
                        horizontal={true}
                        price={price}
                        time={time}
                    /> 
                    {firstRow}
                </View>
                <View style={styles.row}>{secondRow}</View>
            </View>
        </List>
    );
}

export const Tags = memo(TagsFunc);