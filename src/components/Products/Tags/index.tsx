import React, { FC } from 'react'
import { View } from 'react-native'
import { Price } from '../../Price'
import { List } from '../../List'
import { Tag } from '../../Tag'
import { Props } from './Tags.props'
import { styles } from './Tags.style'



const Tags: FC<Props> = ({
    data,
    hasPrice,
    horizontal,
    price,
    time
}) => {

    return (
        <View style={styles.wrapper}>
            <List horizontal={horizontal}>
                {data.map(tag =>
                    <Tag 
                        content={tag.content} 
                        title={tag.title} 
                        horizontal={horizontal}/>
                )}
                {hasPrice &&
                    <Price
                        horizontal={horizontal}
                        price={price}
                        time={time}
                    /> }
            </List>
        </View>
    )
}

export { Tags }