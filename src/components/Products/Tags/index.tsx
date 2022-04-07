import React, { FC } from 'react'
import { View } from 'react-native'
import { Price } from '../../Price'
import { List } from '../../List'
import { Tag } from '../../Tag'
import { Props } from './Tags.props'
import { styles } from './Tags.style'
import { Colors } from '../../../styles/colors'



const Tags: FC<Props> = ({
    data,
    hasPrice,
    horizontal,
    price,
    time
}) => {

    if(!horizontal) {
        for(let i = 0; i < data.length; i++) {
            let num = i % 2
            if(!num) {
                data[i].backgroundColor = Colors.DIM_GRAY
            }
        }
    }

    return (
        <View style={styles.wrapper}>
            <List horizontal={horizontal}>
                {data.map(tag =>
                    <Tag
                        backgroundColor={tag.backgroundColor}
                        content={tag.content}
                        title={tag.title}
                        horizontal={horizontal} />
                )}
                {hasPrice &&
                    <Price
                        horizontal={horizontal}
                        price={price}
                        time={time}
                    />}
            </List>
        </View>
    )
}

export { Tags }